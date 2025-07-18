import InvoiceRepository from './InvoiceRepository.js';

export default class EditInvoicePage {
    constructor() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        this.invoice = InvoiceRepository.getById(id);

        this.renderItemsTable();

        // Save handler
        document.getElementById('save-invoice-btn').addEventListener('click', () => {
            this.updateItemsFromTable();
            InvoiceRepository.save(this.invoice);
            window.location.href = "read.html";
        });
    }

    renderItemsTable() {
        const tbody = document.getElementById('items-tbody');
        tbody.innerHTML = '';
        this.invoice.items.forEach((item, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <input type="text" name="desc${idx}" value="${item.description || ''}">
                </td>
                <td>
                    <input type="number" name="qty${idx}" value="${item.quantity || 1}" min="1">
                </td>
                <td>
                    <input type="number" name="price${idx}" value="${item.price || 0}" min="0" step="0.01">
                </td>
                <td>
                    <input type="number" name="discount${idx}" value="${item.discount || 0}" min="0" step="0.01">
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    updateItemsFromTable() {
        const tbody = document.getElementById('items-tbody');
        const rows = tbody.getElementsByTagName('tr');
        let newItems = [];
        for (let i = 0; i < rows.length; i++) {
            const desc = rows[i].querySelector(`input[name="desc${i}"]`).value;
            const qty = parseFloat(rows[i].querySelector(`input[name="qty${i}"]`).value);
            const price = parseFloat(rows[i].querySelector(`input[name="price${i}"]`).value);
            const discount = parseFloat(rows[i].querySelector(`input[name="discount${i}"]`).value);
            newItems.push({
                description: desc,
                quantity: qty,
                price: price,
                discount: discount
            });
        }
        this.invoice.items = newItems;
    }
}

// If you use a global app.js that initializes pages:
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('edit.html')) {
        new EditInvoicePage();
    }
});