
import InvoiceRepository from '../../saskaita4/src/InvoiceRepository.js';

export default class ReadInvoicePage {
    constructor() {
        
        this.renderList(); // konstruktorius iskviecia saskaitu listo atvaizdavimo funkcija
    }

    // load ir atvaizduoja visas sąskaitas
    async renderList() {
        const invoices = await InvoiceRepository.getAll(); // Fetch all invoices from API
        const tbody = document.getElementById('invoice-list');
        tbody.innerHTML = '';
        // forEach per kiekviena saskaita ir sukuria nauja lenteles eilute
        invoices.forEach(inv => {
            const tr = document.createElement('tr');
           /* uzpildo eilute saskaitos duomenimis */
            tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.due_date}</td>
                <td>${inv.company?.buyer?.name || ''}</td>
                <td>${inv.company?.seller?.name || ''}</td>
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td>
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