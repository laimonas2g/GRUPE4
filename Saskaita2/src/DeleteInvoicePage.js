// DeleteInvoicePage.js
// Handles the delete confirmation page and logic

import InvoiceRepository from './InvoiceRepository.js';

export default class DeleteInvoicePage {
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
        this.renderConfirmation();
        this.setupEventListeners();
    }

    renderConfirmation() {
        document.getElementById('invoice-number').textContent = this.invoice.number;
        // Show other invoice info if desired
    }

    setupEventListeners() {
        document.getElementById('confirm-delete-btn').onclick = () => this.handleDelete();
        document.getElementById('cancel-delete-btn').onclick = () => window.location.href = 'read.html';
    }

    handleDelete() {
        InvoiceRepository.delete(this.invoice.id);
        this.showMessage('Invoice deleted!');
        setTimeout(() => window.location.href = 'read.html', 1000);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}