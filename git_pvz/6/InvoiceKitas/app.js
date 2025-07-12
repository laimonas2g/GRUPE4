console.log('hello from JS file');

const url = "https://in3.dev/inv/";

const serNumber = document.querySelector('[data-serial-number]');
const date = document.querySelector('[data-date]');
const dueDate = document.querySelector('[data-due-date]');

const sellerName = document.querySelector('[data-seller-name]');
const sellerAddress = document.querySelector('[data-seller-address]');
const sellerCode = document.querySelector('[data-seller-code]');
const sellerVAT = document.querySelector('[data-seller-VAT]');
const sellerPhone = document.querySelector('[data-seller-phone]');
const sellerEmail = document.querySelector('[data-seller-email]');

const buyerName = document.querySelector('[data-buyer-name]');
const buyerAddress = document.querySelector('[data-buyer-address]');
const buyerCode = document.querySelector('[data-buyer-code]');
const buyerVAT = document.querySelector('[data-buyer-VAT]');
const buyerPhone = document.querySelector('[data-buyer-phone]');
const buyerEmail = document.querySelector('[data-buyer-email]');

const items = document.querySelector('[data-items]');

const sum = document.querySelector('[data-sum]');
const total = document.querySelector('[data-pre-total]');
const shippingPrice = document.querySelector('[data-shipping-price]');
const vatTax = document.querySelector('[data-vat-tax]');
const totalFinal = document.querySelector('[data-total-final]');

console.log(total);


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        serNumber.innerHTML = `Serijos numeris: ${data.number}. `;
        date.innerHTML = `Data: ${data.date}. `
        dueDate.innerHTML = `Sumokėti iki: ${data.due_date}`

        sellerName.innerHTML = `<b>Pavadinimas:</b> ${data.company.seller.name}`
        sellerAddress.innerHTML = `<b> Adresas:</b> ${data.company.seller.address}`
        sellerCode.innerHTML = ` <b> Įm. kodas:</b> ${data.company.seller.code}`
        sellerVAT.innerHTML = `<b> PVM mok. kodas:</b> ${data.company.seller.vat}`
        sellerPhone.innerHTML = `<b> Tel.:</b> ${data.company.seller.phone}`
        sellerEmail.innerHTML = `<b> El. paštas:</b> ${data.company.seller.email}`

        buyerName.innerHTML = `<b>Pavadinimas:</b> ${data.company.buyer.name}`
        buyerAddress.innerHTML = `<b> Adresas:</b> ${data.company.buyer.address}`
        buyerCode.innerHTML = ` <b> Įm. kodas:</b> ${data.company.buyer.code}`
        buyerVAT.innerHTML = `<b> PVM mok. kodas:</b> ${data.company.buyer.vat}`
        buyerPhone.innerHTML = `<b> Tel.:</b> ${data.company.buyer.phone}`
        buyerEmail.innerHTML = `<b> El. paštas:</b> ${data.company.buyer.email}`

        let bendraSuma = 0;

        data.items.forEach(item => {
            items.innerHTML += '<hr>'
            let nuolaidaProc = '';
            let nuolaidaEur = '';

            if (item.discount.type === 'fixed') {
                nuolaidaEur = item.discount.value;
                nuolaidaProc = item.discount.value * 100 / (item.price * item.quantity);

            } else if (item.discount.type === 'percentage') {
                nuolaidaProc = item.discount.value;
                nuolaidaEur = item.price * item.quantity - (item.price * item.quantity * (1 - nuolaidaProc / 100));
            } else {
                nuolaidaEur = 0;
                nuolaidaProc = 0;
            }
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `
                <div class="item-name">${item.description}</div>
                <div class="price">${(item.price).toFixed(2)} EUR. </div>
                <div class="quantity">${item.quantity} vnt. </div>
                <div class="discount">${-nuolaidaEur.toFixed(2)} EUR (${-nuolaidaProc.toFixed(2)}%)</div>
                <div class="total-item">${(item.price * item.quantity - nuolaidaEur).toFixed(2)} EUR
                </div>
                `
            items.appendChild(div);

            bendraSuma += item.quantity * item.price - nuolaidaEur;
        });
        sum.innerHTML = `<b>Iš viso:</b> <span class="sum"> ${bendraSuma.toFixed(2)}</span> EUR`
        shippingPrice.innerHTML = `<b>Pristatymo išlaidos:</b> ${data.shippingPrice} EUR`
        total.innerHTML = `<b>Tarpinė suma:</b> ${(bendraSuma + data.shippingPrice).toFixed(2)} EUR`
        vatTax.innerHTML = `<b>PVM(21%):</b> ${((bendraSuma + data.shippingPrice) * 0.21).toFixed(2)} EUR`
        totalFinal.innerHTML = `<b>Galutinė kaina:</b> <span class="finalSum">${((bendraSuma + data.shippingPrice) * 1.21).toFixed(2)}</span> EUR`

    });