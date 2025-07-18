import InvoiceRepository from './InvoiceRepository.js';

export default class DeleteInvoicePage {
    constructor() {
        // Get invoice ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.id = id;

        // Handle Delete button
        document.getElementById('confirm-delete-btn').addEventListener('click', () => {
            InvoiceRepository.delete(this.id);
            window.location.href = "read.html";
        });

        // Handle Cancel button
        document.getElementById('cancel-delete-btn').addEventListener('click', () => {
            window.location.href = "read.html";
        });
    }
}

// If you use a global app.js that initializes pages:
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('delete.html')) {
        new DeleteInvoicePage();
    }
});