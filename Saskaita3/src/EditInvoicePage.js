import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';

export default class EditInvoicePage {
    constructor() {
        this.invoice = null;
        this.init();
    }

    async init() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) return this.showMessage('No invoice ID provided', true);
        this.invoice = await InvoiceRepository.get(id);
        if (!this.invoice) return this.showMessage('Invoice not found', true);
        this.renderForm();
        this.setupEventListeners();
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
        document.getElementById('shipping').value = this.invoice.shippingPrice || 0;

        // Render items as editable rows
        const tbody = document.getElementById('products-body');
        tbody.innerHTML = '';
        this.invoice.items.forEach((item, idx) => {
            const discountType = item.discount?.type || 'none';
            const discountValue = item.discount?.value || 0;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description || ''}"></td>
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity || 1}"></td>
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price || 0}" readonly></td>
                <td>
                    <select name="discountType${idx}">
                        <option value="none"${discountType === 'none' ? ' selected' : ''}>No discount</option>
                        <option value="percentage"${discountType === 'percentage' ? ' selected' : ''}>%</option>
                        <option value="fixed"${discountType === 'fixed' ? ' selected' : ''}>€</option>
                    </select>
                    <input type="number" min="0" step="0.01" name="discountValue${idx}" value="${discountValue}">
                </td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
                <td><button type="button" class="remove-item-btn" data-idx="${idx}">Remove</button></td>
            `;
            tbody.appendChild(tr);
        });

        // Add item row at the end
    }

    setupEventListeners() {
        // Add your event listeners for saving/updating invoice here
        // For example:
        document.getElementById('edit-form').onsubmit = async (e) => {
            e.preventDefault();
            // ... gather updated invoice data ...
            await InvoiceRepository.update(this.invoice);
            this.showMessage('Invoice updated!');
            setTimeout(() => window.location.href = 'read.html', 500);
        };
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}