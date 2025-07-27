
// Displays full details of a single invoice, fetched from the API
// Rodo visą vienos sąskaitos faktūros informaciją, gautą iš API

import InvoiceRepository from './InvoiceRepository.js'; // Importuoja sąskaitų duomenų saugyklą
import Invoice from './Invoice.js'; // Importuoja sąskaitos faktūros klasę

export default class ShowInvoicePage {
    constructor() {
        // Inicializuoja puslapį iš karto sukūrus objektą
        this.init();
    }

    // Įkelia sąskaitą pagal ID ir atvaizduoja laukus
    async init() {
        // Sukuria URL parametrų objektą iš naršyklės adreso juostos
        const params = new URLSearchParams(window.location.search);
        // Išgauna 'id' parametrą iš URL
        const id = params.get('id');
        // Asinchroniškai gauna sąskaitos duomenis pagal ID iš API
        const data = await InvoiceRepository.get(id);
        // Jei duomenys gauti, sukuria naują Invoice objektą, kitaip priskiria null
        this.invoice = data ? new Invoice(data) : null;
        // Jei sąskaita nerasta, rodo pranešimą ir nutraukia vykdymą
        if (!this.invoice) {
            document.getElementById('message').textContent = 'Invoice not found!';
            return;
        }
        // Jei sąskaita rasta, atvaizduoja visus laukus puslapyje
        this.renderFields();
    }

    // Atvaizduoja visus sąskaitos laukus puslapyje
    renderFields() {
        // Atvaizduoja sąskaitos numerį
        document.getElementById('invoice-number').textContent = this.invoice.number;
        // Atvaizduoja sąskaitos datą
        document.getElementById('invoice-date').textContent = this.invoice.date;
        // Atvaizduoja sąskaitos apmokėjimo terminą
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date;

        // Atvaizduoja pardavėjo pavadinimą
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
        // Atvaizduoja pardavėjo adresą
        document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
        // Atvaizduoja pardavėjo kodą
        document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
        // Atvaizduoja pardavėjo PVM kodą
        document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
        // Atvaizduoja pardavėjo telefono numerį
        document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
        // Atvaizduoja pardavėjo el. paštą
        document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';

        // Atvaizduoja pirkėjo pavadinimą
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        // Atvaizduoja pirkėjo adresą
        document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
        // Atvaizduoja pirkėjo kodą
        document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
        // Atvaizduoja pirkėjo PVM kodą
        document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
        // Atvaizduoja pirkėjo telefono numerį
        document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
        // Atvaizduoja pirkėjo el. paštą
        document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';

        // Atvaizduoja prekių lentelę
        const tbody = document.getElementById('products-body');
        // Išvalo lentelės turinį
        tbody.innerHTML = '';
        // Kiekvienai prekei sąskaitoje
        this.invoice.items.forEach(item => {
            // Sukuria nuolaidos tekstą
            let discountStr = '';
            // Jei yra nuolaida, nustato jos tipą ir reikšmę
            if (item.discount) {
                if (item.discount.type === 'percentage') discountStr = item.discount.value + '%';
                else if (item.discount.type === 'fixed') discountStr = item.discount.value + ' €';
            }
            // Sukuria naują lentelės eilutę
            const tr = document.createElement('tr');
            // Užpildo eilutę prekės duomenimis
            tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${discountStr}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
            // Prideda eilutę prie lentelės
            tbody.appendChild(tr);
        });

        // Atvaizduoja pristatymo kainą
        document.getElementById('shipping').textContent = this.invoice.shippingPrice.toFixed(2);
        // Atvaizduoja tarpines sumas (be PVM ir pristatymo)
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        // Atvaizduoja PVM sumą
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        // Atvaizduoja bendrą nuolaidų sumą
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        // Atvaizduoja galutinę sumą
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }
}