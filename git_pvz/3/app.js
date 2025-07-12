const invoicenr = document.querySelector('#invoicenr');
const invoicedate = document.querySelector('#invoicedate');
const invoiceenddate = document.querySelector('#invoiceenddate');
const seller = document.querySelector('div.details div.seller');
const buyer = document.querySelector('div.details div.buyer');
const item = document.querySelector('div.itemdetails ol.item');
const quantity = document.querySelector('div.itemdetails div.quantity');
const discount = document.querySelector('div.itemdetails div.discount');
const price = document.querySelector('div.itemdetails div.price');
const eprice = document.querySelector('#ttsct')
const transport = document.querySelector('#trcst');
const vat = document.querySelector('#vat');
const total = document.querySelector('#tot');

fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => {

        invoicenr.innerText = data.number;
        invoicedate.innerText = data.date;
        invoiceenddate.innerText = data.due_date;

        seller.innerHTML = `
            <h2>Pardavėjas:</h2>
            <div></div>
            <div>Pavadinimas: ${data.company.seller.name}</div>
            <div>Adresas: ${data.company.seller.address}</div>
            <div>Įmonės kodas: ${data.company.seller.code}</div>
            <div>PVM mokėtojo kodas: ${data.company.seller.vat}</div>
            <div>Pašto adresas: ${data.company.seller.email}</div>
            <div>Telefono numeris: ${data.company.seller.phone}</div>
            `

        buyer.innerHTML = `
            <h2>Pardavėjas:</h2>
            <div></div>
            <div>Pavadinimas: ${data.company.buyer.name}</div>
            <div>Adresas: ${data.company.buyer.address}</div>
            <div>Įmonės kodas: ${data.company.buyer.code}</div>
            <div>PVM mokėtojo kodas: ${data.company.buyer.vat}</div>
            <div>Pašto adresas: ${data.company.buyer.email}</div>
            <div>Telefono numeris: ${data.company.buyer.phone}</div>
            `

        let tot = 0;
        let vat1 = 0;

        data.items.forEach(itemz => {

            let val = 0;
            let val2 = 0;

            if (itemz.discount.type == 'fixed') {
                val = `-${itemz.discount.value} Eur`;
                val2 = itemz.discount.value;
            } else if (itemz.discount.type == 'percentage') {
                val = `-${itemz.discount.value}% (-${(itemz.price * itemz.discount.value / 100).toFixed(2)} Eur)`;
                val2 = itemz.price * itemz.discount.value / 100;
            } else {
                val = '-';
                val2 = 0;
            }

            item.innerHTML += `<li>${itemz.description}</li>`
            quantity.innerHTML += `<div>${itemz.quantity}</div>`
            discount.innerHTML += `<div>${val}</div>`
            price.innerHTML += `<div>${itemz.price} Eur</div>`

            tot += (itemz.price - val2) * itemz.quantity;
            vat1 = tot * 0.21;
        });

        transport.innerText = `${data.shippingPrice} Eur`;
        vat.innerText = vat1.toFixed(2) + ' Eur';
        eprice.innerText = tot.toFixed(2) + ' Eur';
        total.innerText = (vat1 + tot).toFixed(2) + ' Eur';

    });