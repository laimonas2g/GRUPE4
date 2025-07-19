import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';

export default class ListInvoicesPage {
    constructor() {
        this.invoices = InvoiceRepository.getAll();
        this.renderList();
    }

    renderList() {
        const tbody = document.getElementById('invoice-list');
        tbody.innerHTML = '';
        if (!this.invoices.length) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td colspan="4">No invoices found.</td>`;
            tbody.appendChild(tr);
            return;
        }
        this.invoices.forEach(invData => {
            const inv = new Invoice(invData); // ensure full model for calculations
            const total = inv.getTotal().toFixed(2);
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${total}</td>
                <td>
                    <a href="edit.html?id=${inv.id}" class="btn">Edit</a>
                    <a href="show.html?id=${inv.id}" class="btn">View</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Delete</a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}