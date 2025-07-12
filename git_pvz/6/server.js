const express = require('express');
const app = express();
const fs = require('fs');
const URL = 'http://localhost:3000/'
const bodyParser = require('body-parser');
const handlebars = require('handlebars');

const apiUrl = "https://in3.dev/inv/";




// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
invoices = JSON.parse(invoices);

const makeHTML = (data, pageName) => {

    data.url = URL;

    const topHtml = fs.readFileSync(`./templates/top.hbr`, 'utf8');     //paimt top
    const pageHtml = fs.readFileSync(`./templates/${pageName}.hbr`, 'utf8');     //paimt vidurį - pagal pageName
    const bottomHtml = fs.readFileSync(`./templates/bottom.hbr`, 'utf8');     //paimt bottom


    const html = handlebars.compile(topHtml + pageHtml + bottomHtml)(data);     //perduoti data ir suklijuoti

    return html;    //grąžinti suklijuotą html

}


function newInv(newData) {
    newData.subTotal = 0;
    newData.vat = 0;
    newData.grandTotal = 0;
    newData.totalDiscounts = 0;
    newData.beaver = false;
    newData.items.map(item => {


        if (item.discount.type === 'fixed') {
            item.discount.Eur = item.discount.value || 0;
            item.discount.P = item.discount.value * 100 / (item.price * item.quantity);

        } else if (item.discount.type === 'percentage') {
            item.discount.P = item.discount.value;
            item.discount.Eur = (item.price * item.quantity - (item.price * item.quantity * (1 - item.discount.P / 100)));
        } else {
            item.discount.Eur = 0;
            item.discount.P = 0;
        }

        const regex = /Bebro iškamša/gm;

        if (item.description.search(regex) !== -1) {
            newData.beaver = true;
        }



        item.itemTotal = item.quantity * item.price
        item.itemDiscountedTotal = (item.quantity * item.price - item.discount.Eur).toFixed(2);
        newData.subTotal += item.itemTotal;
        newData.totalDiscounts += item.discount.Eur;

        item.discount.Eur = `${item.discount.Eur.toFixed(2)}`;
        item.discount.P = `[-${item.discount.P.toFixed(2)}%]`


    })

    newData.vat = ((newData.subTotal + newData.shippingPrice) * 0.21);

    newData.grandTotal = newData.subTotal - newData.totalDiscounts + newData.shippingPrice + newData.vat;

    newData.subTotal = newData.subTotal.toFixed(2);
    newData.grandTotal = newData.grandTotal.toFixed(2)
    newData.totalDiscounts = newData.totalDiscounts.toFixed(2)
    newData.vat = newData.vat.toFixed(2)
    newData.shippingPrice = newData.shippingPrice.toFixed(2)


    fs.writeFileSync('./data/temp.json', JSON.stringify(newData), 'utf8');

}

function editedInv(newData) {
    newData.subTotal = 0;
    newData.vat = 0;
    newData.grandTotal = 0;
    newData.totalDiscounts = 0;
    newData.items.map(item => {

        item.itemTotal = item.quantity * item.price
        item.itemDiscountedTotal = (item.quantity * item.price - item.discount.Eur).toFixed(2);
        newData.subTotal += item.itemTotal;
        newData.totalDiscounts += item.discount.Eur;

        item.discount.Eur = `${item.discount.Eur.toFixed(2)}`;
        item.discount.P = `[-${item.discount.P.toFixed(2)}%]`;
    })

    newData.vat = ((parseFloat(newData.subTotal) + parseFloat(newData.shippingPrice)) * 0.21);
    newData.grandTotal = parseFloat(newData.subTotal) - parseFloat(newData.totalDiscounts) + parseFloat(newData.shippingPrice) + newData.vat;

    newData.subTotal = newData.subTotal.toFixed(2);
    newData.grandTotal = newData.grandTotal.toFixed(2);
    newData.totalDiscounts = newData.totalDiscounts.toFixed(2);
    newData.vat = newData.vat.toFixed(2);
    newData.shippingPrice = newData.shippingPrice;

    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    let fileContent = {};
    const invoice = invoices.items.find(invoice => invoice.number === newData.number);

    let filteredInvoices = invoices.items.filter((inv) => inv !== invoice);

    filteredInvoices.push(newData);

    fileContent.items = filteredInvoices;
    fs.writeFileSync('./data/invoices.json', JSON.stringify(fileContent), 'utf8');


}

// Function to add a new item
function addItem(newData) {
    // Read the current content of the file
    let fileContent = {};
    const oldData = fs.readFileSync('./data/invoices.json', 'utf8'); //nuskaito JSON
    fileContent = oldData ? JSON.parse(oldData) : {}; //Patikrina ar kažkas yra, jei ne įdeda '{}'

    if (!fileContent.items) {
        fileContent.items = [];
    }

    // Add the new item as a new array (if needed) or push it into an existing array
    fileContent.items.push(newData);

    // Write the updated content back to the file
    fs.writeFileSync('./data/invoices.json', JSON.stringify(fileContent), 'utf8');
    console.log('New item added successfully!');
}




app.get('/', (req, res) => {

    const data = {
        pageTitle: 'Pirmasis puslapis',
        URL
    };

    const html = makeHTML(data, 'landing');

    res.send(html);
});



app.get('/read/:number', (req, res) => {
    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    const invoice = invoices.items.find(invoice => invoice.number === req.params.number);



    const data = {
        pageTitle: req.params.number + ` Sąskaitos peržiūra`,
        invoice,
        URL,
    };

    const html = makeHTML(data, 'read');

    res.send(html);
});

app.get('/edit/:number', (req, res) => {
    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    const invoice = invoices.items.find(invoice => invoice.number === req.params.number);
    invoice.items.map(item => {
        if (item.discount.P) {
            item.discount.P = item.discount.P.slice(2, -2)
        }
    });

    // item.discount.P = parseFloat(item.discount.P)

    let message = fs.readFileSync('./data/message.json', 'utf8');
    message = JSON.parse(message);

    const data = {
        pageTitle: invoice.number + ' sąskaitos redagavimas',
        invoice,
        URL,
        message
    };




    const html = makeHTML(data, 'edit');

    res.send(html);

    message = '';
    fs.writeFileSync('./data/message.json', JSON.stringify(message), 'utf8');
});

app.get('/delete/:number', (req, res) => {
    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    const invoice = invoices.items.find(invoice => invoice.number === req.params.number);



    const data = {
        pageTitle: invoice.number + ' sąskaitos trynimas',
        invoice,
        URL,
    };

    const html = makeHTML(data, 'delete');

    res.send(html);
});

app.get('/destroy/:number', (req, res) => {
    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    let fileContent = {};


    const invoice = invoices.items.find(invoice => invoice.number === req.params.number);

    const filteredInvoice = invoices.items.filter((inv) => inv !== invoice);

    fileContent.items = filteredInvoice;
    fs.writeFileSync('./data/invoices.json', JSON.stringify(fileContent), 'utf8');

    const message = {};
    message.text = 'Sąskaita ištrinta!';

    fs.writeFileSync('./data/message.json', JSON.stringify(message), 'utf8');

    res.redirect(`${URL}list`);
});

app.get('/list', (req, res) => {
    let invoices = fs.readFileSync('./data/invoices.json', 'utf8');
    invoices = JSON.parse(invoices);

    let message = fs.readFileSync('./data/message.json', 'utf8');
    message = JSON.parse(message);

    const data = {
        pageTitle: 'Sąskaitų sąrašas',
        invoices,
        message,
        URL,
    };

    const html = makeHTML(data, 'list');

    res.send(html);

    message = '';
    fs.writeFileSync('./data/message.json', JSON.stringify(message), 'utf8');
});
app.get('/new', (req, res) => {
    // fetch(apiUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //         newInv(data);
    //         res.redirect(`${URL}create`);
    //     });


    async function getData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            newInv(json);
            res.redirect(`${URL}create`);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    getData();
});

app.get('/create', (req, res) => {
    let invoice = fs.readFileSync('./data/temp.json', 'utf8');
    invoice = JSON.parse(invoice);

    const data = {
        pageTitle: 'Pridėti naują',
        invoice,
        URL,
    };

    const html = makeHTML(data, 'create');

    res.send(html);
});

app.get('custom/new', (req, res) => {
    res.redirect(`${URL}/custom`);

});

app.get('/custom', (req, res) => {
    let invoice = fs.readFileSync('./data/temp.json', 'utf8');
    invoice = JSON.parse(invoice);

    const data = {
        pageTitle: 'Pridėti naują',
        invoice,
        URL,
    };

    const html = makeHTML(data, 'custom');

    res.send(html);
});

app.get('/save', (req, res) => {
    let invoice = fs.readFileSync('./data/temp.json', 'utf8');
    invoice = JSON.parse(invoice);

    addItem(invoice);


    const message = {};
    message.text = 'Sąskaita pridėta!';

    fs.writeFileSync('./data/message.json', JSON.stringify(message), 'utf8');


    res.redirect(`${URL}list`);


});

app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const invoice = invoices.items.find(invoice => invoice.number === id);


    let { quantity, discount_eur, discount_p } = req.body;

    const message = {};
    message.text = 'Pakeitimai Išsaugoti!';

    fs.writeFileSync('./data/message.json', JSON.stringify(message), 'utf8');
    console.log('lABAS', invoice.items);

    invoice.items.map((item, i) => {
        quantity[i] = parseInt(quantity[i]);
        if (discount_eur[i] === '' || discount_p[i] === '') {
            discount_eur[i] = 0;
            discount_p[i] = 0;
        } else {
            discount_eur[i] = parseFloat(discount_eur[i]);
            discount_p[i] = parseFloat(discount_p[i]);
        }
        item.quantity = quantity[i];
        item.discount.Eur = discount_eur[i];
        item.discount.P = discount_p[i];
    });

    editedInv(invoice);

    res.redirect(URL + 'edit/' + id);

});

app.post('/custom/store', (req, res) => {
    // let { serial_number, date, due_date } = req.body;
    const all = req.body;
    // console.log(all);
    console.log(all.items.price.length);

    const items = [];


    if (all.items.name.length < 2) {
        console.log('laba diena')
        // all.items[0].push({
        //     description: all.items.name[0],
        //     quantity: parseInt(all.items.quantity[0]),
        //     price: parseFloat(all.items.price[0]),
        //     discount: {
        //         type: 'fixed',
        //         value: parseFloat(all.items.discount_eur[0]) || 0,
        //     }
        // })
    } else {
        all.items.name.forEach((element, i) => {

            console.log('element, i', element, i)
            items.push({
                description: element,
                quantity: parseInt(all.items.quantity[i]),
                price: parseFloat(all.items.price[i]),
                discount: {
                    type: 'fixed',
                    value: parseFloat(all.items.discount_eur[i]) || 0,
                },
            })




        });
    }


    all.shippingPrice = parseFloat(all.shippingPrice);

    all.items = items;

    newInv(all);

    let invoice = fs.readFileSync('./data/temp.json', 'utf8');
    invoice = JSON.parse(invoice);

    addItem(invoice);


    res.redirect(URL + 'list');




});


// Start server

const port = 3000;
app.listen(port, () => {
    console.log(`Serveris pasiruošęs ir laukia ant ${port} porto!`);
});