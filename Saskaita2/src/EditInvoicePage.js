// EditInvoicePage.js
// Handles editing an invoice's products and discounts

import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';

export default class EditInvoicePage {
    constructor() {
        this.invoice = null;
        this.init();
    }

    // Initialize the page: load invoice by ID from URL, setup form
    init() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) return this.showMessage('No invoice ID provided', true);
        this.invoice = InvoiceRepository.get(id);
        if (!this.invoice) return this.showMessage('Invoice not found', true);
        this.renderForm();
        this.setupEventListeners();
    }

    // Render form fields for product quantities, discounts, etc.
    renderForm() {
        // Populate the form with invoice data
        // Example:
        document.getElementById('discount').value = this.invoice.discount;
        // Render editable product list...
    }

    // Setup form event listeners
    setupEventListeners() {
        document.getElementById('edit-form').onsubmit = e => {
            e.preventDefault();
            this.updateInvoiceFromForm();
        };
    }

    // Read form and update invoice, then save
    updateInvoiceFromForm() {
        // Update invoice products and discount from form fields
        this.invoice.discount = parseFloat(document.getElementById('discount').value) || 0;
        // Update products...
        this.invoice.calculateTotals();

        if (!this.invoice.isValid()) {
            this.showMessage('Invalid invoice data!', true);
            return;
        }
        InvoiceRepository.update(this.invoice);
        this.showMessage('Invoice updated!', false);
        // Stay on edit page, reload to show latest data
        setTimeout(() => window.location.reload(), 1000);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}