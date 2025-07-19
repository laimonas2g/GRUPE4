import InvoiceRepository from './InvoiceRepository.js';

export default class ReadInvoicePage {
    constructor() {
        this.renderList();
    }

    renderList() {
        const invoices = InvoiceRepository.getAll();
        const tbody = document.getElementById('invoice-list');
        tbody.innerHTML = '';
        invoices.forEach(inv => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.due_date}</td>
                <td>${inv.company?.buyer?.name || ''}</td>
                <td>${inv.company?.seller?.name || ''}</td>
                <td>${inv.total || ''}</td>
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">View</a>
                    <a href="edit.html?id=${inv.id}" class="btn primary">Edit</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Delete</a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}