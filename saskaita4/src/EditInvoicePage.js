
// displAY and update an invoice

import Invoice from './Invoice.js'; 
import InvoiceRepository from './InvoiceRepository.js';

export default class EditInvoicePage {
    constructor() {
        this.invoice = null;
        this.init(); // iskviecia pradini metoda.
    }

    // Load the invoice to edit from the backend
    async init() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (!id) return this.showMessage('No invoice ID provided', true);
        this.invoice = await InvoiceRepository.get(id);
        if (!this.invoice) return this.showMessage('Sąskaitos nera', true);
        this.renderForm();
        this.setupEventListeners();
    }

    // atvaizduoja visus saskaitos laukus kaip redaguojamus formos laukus
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

        // Render each invoice item as editable row
        const tbody = document.getElementById('products-body'); // Gauna prekių lenteles body
        tbody.innerHTML = '';
        this.invoice.items.forEach((item, idx) => {
            const discountType = item.discount?.type || 'none';
            // Nuolaidos reiksme
            const discountValue = item.discount?.value || 0;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description || ''}"></td>
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity || 1}"></td>
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price || 0}" readonly></td>
                <td>
                    <select name="discountType${idx}">
                        <option value="none"${discountType === 'none' ? ' selected' : ''}>Be nuolaidos</option>
                        <option value="percentage"${discountType === 'percentage' ? ' selected' : ''}>%</option>
                        <option value="fixed"${discountType === 'fixed' ? ' selected' : ''}>€</option>
                    </select>
                    <input type="number" min="0" step="0.01" name="discountValue${idx}" value="${discountValue}">
                </td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
                <td><button type="button" style="color: red" class="remove-item-btn" data-idx="${idx}">Trinti</button></td>
            `;
            tbody.appendChild(tr);
        });

        //// Po eilučių atvaizdavimo priskiria trynimo mygtukų įvykius
        this.attachRemoveHandlers();
    }

    // Set up event listeners for saving or canceling
    setupEventListeners() {
        document.getElementById('edit-form').onsubmit = async (e) => {
            e.preventDefault();
            this.updateInvoiceFromForm();
            await InvoiceRepository.update(this.invoice);
            this.showMessage('Invoice updated!');
            setTimeout(() => window.location.href = 'read.html', 500);
        };
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    // Attach remove handlers to all "Remove" buttons
    attachRemoveHandlers() {
        const tbody = document.getElementById('products-body');
        tbody.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.onclick = async (e) => {
                const idx = parseInt(btn.getAttribute('data-idx'), 10);
                // Remove the item from the invoice data
                this.invoice.items.splice(idx, 1);
                // Update the backend immediately after removal
                await InvoiceRepository.update(this.invoice);
                // Re-render the form to update UI and re-attach handlers
                this.renderForm();
                this.showMessage('Line removed and invoice updated.');
            };
        });
    }

    updateInvoiceFromForm() {
        // Update shipping
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;

        // Update items
        const tbody = document.getElementById('products-body');
        const rows = tbody.querySelectorAll('tr');
        this.invoice.items = Array.from(rows).map((tr, idx) => {
            return {
                description: tr.querySelector(`[name=desc${idx}]`).value,
                quantity: parseInt(tr.querySelector(`[name=qty${idx}]`).value, 10),
                price: parseFloat(tr.querySelector(`[name=price${idx}]`).value),
                discount: {
                    type: tr.querySelector(`[name=discountType${idx}]`).value,
                    value: parseFloat(tr.querySelector(`[name=discountValue${idx}]`).value) || 0
                }
            };
        });
    }

    // Show a status message
    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}