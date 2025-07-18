// ListInvoicesPage.js
// Handles displaying all invoices with Edit, View, Delete buttons

import InvoiceRepository from './InvoiceRepository.js';

export default class ListInvoicesPage {
    constructor() {
        this.invoices = InvoiceRepository.getAll();
        this.renderList();
    }

    // Render the invoice list table
    renderList() {
        const tbody = document.getElementById('invoice-list');
        tbody.innerHTML = '';
        this.invoices.forEach(inv => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.total.toFixed(2)}</td>
                <td>
                    <a href="edit.html?id=${inv.id}">Edit</a>
                    <a href="show.html?id=${inv.id}">View</a>
                    <a href="delete.html?id=${inv.id}">Delete</a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Optionally, show messages after actions
    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}