import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';
import InvoiceApi from './invoiceApi.js';

export default class CreateInvoicePage {
    constructor() {
        this.invoice = null;
        this.init();
    }

    async init() {
        await this.loadNewInvoice();
        this.setupEventListeners();
    }

    async loadNewInvoice() {
        try {
            const data = await InvoiceApi.fetchNewInvoice();
            this.invoice = new Invoice(data);
            this.renderInvoice();
        } catch (e) {
            this.showMessage('Error fetching invoice from API', true);
        }
    }

    renderInvoice() {
        document.getElementById('invoice-number').textContent = this.invoice.number || '';
        document.getElementById('invoice-date').textContent = this.invoice.date || '';
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date || '';
        // Seller
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
        document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
        document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
        document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
        document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
        document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
        // Buyer
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
        document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
        document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
        document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
        document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';
        document.getElementById('shipping').textContent = (this.invoice.shippingPrice ?? 0).toFixed(2);

        // Items
        const tbody = document.getElementById('products-body');
        tbody.innerHTML = '';
        (this.invoice.items || []).forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${Array.isArray(item.discount) && item.discount.length > 0 ? item.discount.join(', ') : '-'}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });

        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    setupEventListeners() {
        document.getElementById('save-btn').onclick = () => this.saveInvoice();
        document.getElementById('update-btn').onclick = () => this.loadNewInvoice();
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    saveInvoice() {
        if (!this.invoice.isValid()) {
            this.showMessage('Invoice is not valid!', true);
            return;
        }
        InvoiceRepository.save(this.invoice);
        this.showMessage('Invoice saved successfully!');
        setTimeout(() => window.location.href = 'read.html', 1000);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}