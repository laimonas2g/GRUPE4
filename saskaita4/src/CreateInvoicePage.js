// CreateInvoicePage.js
// Handles displaying and saving a new invoice via the backend API

import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';
import { uuidv4 } from './uuid.js';

export default class CreateInvoicePage {
    constructor() {
        this.invoice = null;
        this.loadInvoiceFromApi(); // Load a fresh invoice template from the API
    }

    // Fetch a template invoice from external API (for populating form with example data)
    async loadInvoiceFromApi() {
        try {
            const res = await fetch('https://in3.dev/inv/');
            const data = await res.json();
            this.invoice = new Invoice(data); // Wrap in Invoice class for methods
            this.renderForm();
            this.setupEventListeners();
        } catch (e) {
            this.showMessage('Failed to fetch invoice from API', true);
        }
    }

    // Render invoice fields to the form (readonly in this example)
    renderForm() {
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

        // Render each product/item as a row in the invoice
        const tbody = document.getElementById('products-body');
        tbody.innerHTML = '';
        this.invoice.items.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${this.renderDiscountCell(item.discount)}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });

        // Render totals and calculations
        document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    // Format the discount cell for display
    renderDiscountCell(discount) {
        if (!discount || discount.type === 'none' || discount.value === 0) return '';
        if (discount.type === 'percentage') return discount.value + '%';
        if (discount.type === 'fixed') return discount.value + ' €';
        return '';
    }

    // Hook up button event listeners for saving, refreshing, and canceling
    setupEventListeners() {
        document.getElementById('save-btn').onclick = async () => {
            await this.saveInvoice();
        };
        document.getElementById('update-btn').onclick = async () => {
            await this.loadInvoiceFromApi();
        };
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    // Save the invoice via POST to the backend API
    async saveInvoice() {
        if (!this.invoice.id) {
            this.invoice.id = uuidv4(); // Ensure unique ID
        }
        await InvoiceRepository.save(this.invoice); // Save to backend
        this.showMessage('Invoice saved!', false);
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    // Display a user message on the page
    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}