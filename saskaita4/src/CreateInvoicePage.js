import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';
import { uuidv4 } from './uuid.js';

export default class CreateInvoicePage {
    constructor() {
        this.invoice = null;
        this.loadInvoiceFromApi();
    }

    async loadInvoiceFromApi() {
        try {
            const res = await fetch('https://in3.dev/inv/');
            const data = await res.json();
            this.invoice = new Invoice(data);
            this.renderForm();
            this.setupEventListeners();
        } catch (e) {
            this.showMessage('Failed to fetch invoice from API', true);
        }
    }

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

        // Items table (readonly)
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

        document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    renderDiscountCell(discount) {
        if (!discount || discount.type === 'none' || discount.value === 0) return '';
        if (discount.type === 'percentage') return discount.value + '%';
        if (discount.type === 'fixed') return discount.value + ' €';
        return '';
    }

    setupEventListeners() {
        document.getElementById('save-btn').onclick = async () => {
            await this.saveInvoice();
        };
        document.getElementById('update-btn').onclick = async () => {
            await this.loadInvoiceFromApi();
        };
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    async saveInvoice() {
        if (!this.invoice.id) {
            this.invoice.id = uuidv4();
        }
        await InvoiceRepository.save(this.invoice);
        this.showMessage('Invoice saved!', false);
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}