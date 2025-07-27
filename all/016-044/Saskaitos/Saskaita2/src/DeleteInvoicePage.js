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
        document.getElementById('invoice-date').textContent = this.invoice.date;
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    }

    setupEventListeners() {
        const deleteBtn = document.getElementById('confirm-delete-btn');
        const cancelBtn = document.getElementById('cancel-delete-btn');
        if (deleteBtn) {
            deleteBtn.onclick = () => this.handleDelete();
        }
        if (cancelBtn) {
            cancelBtn.onclick = () => window.location.href = 'read.html';
        }
    }

    handleDelete() {
        InvoiceRepository.delete(this.invoice.id);
        this.showMessage('Invoice deleted!');
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}