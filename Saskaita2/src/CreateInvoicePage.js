import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';

export default class CreateInvoicePage {
    constructor() {
        this.invoice = new Invoice({
            // Optionally prepopulate fields
            items: []
        });
        this.renderForm();
        this.setupEventListeners();
    }

    renderForm() {
        // Fill static fields as needed, e.g. invoice number, date, etc.
        document.getElementById('invoice-number').textContent = this.invoice.number;
        document.getElementById('invoice-date').textContent = this.invoice.date;
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
        document.getElementById('shipping').value = this.invoice.shippingPrice || 0;

        // Render items as editable rows
        const tbody = document.getElementById('products-body');
        tbody.innerHTML = '';
        this.invoice.items.forEach((item, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description}"></td>
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity}"></td>
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price}"></td>
                <td><input type="number" min="0" step="0.01" name="discount${idx}" value="${item.discount}"></td>
                <td>${(item.quantity * item.price - (item.discount || 0)).toFixed(2)}</td>
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
                    discount: 0
                });
                this.renderForm();
            };
        }

        this.updateTotals();
    }

    setupEventListeners() {
        document.getElementById('save-btn').onclick = () => this.saveInvoice();
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
        document.getElementById('shipping').oninput = () => this.updateTotals();
        document.getElementById('products-body').oninput = () => this.updateTotals();
        document.getElementById('update-btn').onclick = () => this.saveInvoice();
    }

    saveInvoice() {
        // Collect items from table
        const rows = Array.from(document.querySelectorAll('#products-body tr'));
        // Exclude the last row (add item)
        this.invoice.items = rows.slice(0, -1).map((row, idx) => ({
            description: row.querySelector(`[name="desc${idx}"]`).value,
            quantity: parseFloat(row.querySelector(`[name="qty${idx}"]`).value),
            price: parseFloat(row.querySelector(`[name="price${idx}"]`).value),
            discount: parseFloat(row.querySelector(`[name="discount${idx}"]`).value)
        }));
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;

        if (!this.invoice.isValid()) {
            this.showMessage('Invalid invoice data!', true);
            return;
        }
        InvoiceRepository.save(this.invoice);
        this.showMessage('Invoice saved!', false);
        setTimeout(() => window.location.href = 'read.html', 600);
    }

    updateTotals() {
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
    
}