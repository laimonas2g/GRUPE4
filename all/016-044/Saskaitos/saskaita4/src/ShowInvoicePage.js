
import InvoiceRepository from './InvoiceRepository.js';
import Invoice from './Invoice.js';

export default class ShowInvoicePage {

    constructor() {
        this.init();  // inicializuoja puslapi iskarto sukurus objekta
    }

    // load invoice by ID and render viska
    async init() {
        const params = new URLSearchParams(window.location.search);
        /* Išgauna 'id' parametrą iš URL */
        const id = params.get('id');
        // gauna sąskaitos duomenis pagal ID iš API
        const data = await InvoiceRepository.get(id);
        // Jei duomenys gauti, sukuria naują Invoice objektą, kitaip priskiria null
        this.invoice = data ? new Invoice(data) : null;
        if (!this.invoice) {
            document.getElementById('message').textContent = 'Sąskaita nerasta';
            return;
        }
        this.renderFields();
    }

    // Atvaizduoja visus sąskaitos laukus puslapyje.
    renderFields() {
        document.getElementById('invoice-number').textContent = this.invoice.number;
        document.getElementById('invoice-date').textContent = this.invoice.date;
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
        document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
        document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
        document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
        document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
        document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
        document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
        document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
        document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
        document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';

        // Render items table
        const tbody = document.getElementById('products-body');
        tbody.innerHTML = '';
        /* kiekvienai prekei sąskaitoje */
        this.invoice.items.forEach(item => {
            let discountStr = '';
            if (item.discount) {
                if (item.discount.type === 'percentage') discountStr = item.discount.value + '%';
                else if (item.discount.type === 'fixed') discountStr = item.discount.value + ' €';
            }
            const tr = document.createElement('tr');
            // Uzpildo eilute prekes duomenimis
            tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${discountStr}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });
        // Atvaizduoja pristatymo kainą
        document.getElementById('shipping').textContent = this.invoice.shippingPrice.toFixed(2);
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }
}