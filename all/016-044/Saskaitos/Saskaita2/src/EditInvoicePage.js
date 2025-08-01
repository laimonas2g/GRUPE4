import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';

export default class EditInvoicePage {
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
        const addTr = document.createElement('tr');
        addTr.innerHTML = `
            <td colspan="6">
                <button type="button" id="add-item-btn" class="btn primary">Add Item</button>
            </td>
        `;
        tbody.appendChild(addTr);

        // Remove item handler
        tbody.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.onclick = () => {
                const idx = +btn.getAttribute('data-idx');
                this.invoice.items.splice(idx, 1);
                this.renderForm();
            };
        });

        // Add item handler
        const addBtn = document.getElementById('add-item-btn');
        if (addBtn) {
            addBtn.onclick = () => {
                this.invoice.items.push({
                    description: '',
                    quantity: 1,
                    price: 0,
                    discount: { type: 'none', value: 0 }
                });
                this.renderForm();
            };
        }

        this.updateTotals();
    }

    setupEventListeners() {
        document.getElementById('edit-form').onsubmit = e => {
            e.preventDefault();
            this.updateInvoiceFromForm();
        };
        document.getElementById('cancel-btn').onclick = () => {
            window.location.href = 'read.html';
        };
        document.getElementById('shipping').oninput = () => this.updateTotals();
        document.getElementById('products-body').oninput = () => this.updateTotals();
    }

    updateInvoiceFromForm() {
        const rows = Array.from(document.querySelectorAll('#products-body tr'));
        // Exclude the last row (add item)
        this.invoice.items = rows.slice(0, -1).map((row, idx) => ({
            description: row.querySelector(`[name="desc${idx}"]`).value,
            quantity: parseFloat(row.querySelector(`[name="qty${idx}"]`).value),
            price: parseFloat(row.querySelector(`[name="price${idx}"]`).value),
            discount: {
                type: row.querySelector(`[name="discountType${idx}"]`).value,
                value: parseFloat(row.querySelector(`[name="discountValue${idx}"]`).value) || 0
            }
        }));
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;

        if (!this.invoice.isValid()) {
            this.showMessage('Invalid invoice data!', true);
            return;
        }
        InvoiceRepository.update(this.invoice);
        this.showMessage('Invoice updated!', false);
        this.renderForm(); // Stay on edit page and show updated data
    }

    updateTotals() {
        const subtotalEl = document.getElementById('subtotal');
        const vatEl = document.getElementById('vat');
        const discountEl = document.getElementById('discount');
        const totalEl = document.getElementById('total');
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;
        subtotalEl.textContent = this.invoice.getSubtotal().toFixed(2);
        vatEl.textContent = this.invoice.getVat().toFixed(2);
        discountEl.textContent = this.invoice.getTotalDiscount().toFixed(2);
        totalEl.textContent = this.invoice.getTotal().toFixed(2);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}