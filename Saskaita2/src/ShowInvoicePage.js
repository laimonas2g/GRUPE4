// ShowInvoicePage.js
// Handles displaying a single invoice in read-only mode

import InvoiceRepository from './InvoiceRepository.js';

export default class ShowInvoicePage {
    constructor() {
        this.invoice = null;
        this.init();
    }

    init() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) return this.showMessage('No invoice ID provided', true);
        this.invoice = InvoiceRepository.get(id);
        if (!this.invoice) return this.showMessage('Invoice not found', true);
        this.renderInvoice();
    }

    // Render the invoice details as read-only
    renderInvoice() {
        document.getElementById('number').textContent = this.invoice.number;
        document.getElementById('date').textContent = this.invoice.date;
        document.getElementById('total').textContent = this.invoice.total.toFixed(2);
        // Render products, VAT, etc.
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}