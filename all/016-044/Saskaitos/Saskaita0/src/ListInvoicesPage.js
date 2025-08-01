
// Fetches and displays all invoices from the backend API in a table

import InvoiceRepository from './InvoiceRepository.js';

export default class ListInvoicesPage {
    constructor() {
        this.renderList();
    }

    // Load and render all invoices
    async renderList() {
        const invoices = await InvoiceRepository.getAll(); // Fetch all invoices from API
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
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td>
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">Žiūrėti</a>
                    <a href="edit.html?id=${inv.id}" class="btn primary">Redaguoti</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Trinti</a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}