
// Fetches all invoices and displays them in a table (similar to ListInvoicesPage)

import InvoiceRepository from './InvoiceRepository.js';

export default class ReadInvoicePage {
    constructor() {
        // Konstruktorius iškviečia sąskaitų sąrašo atvaizdavimo funkciją
        this.renderList();
    }

    // Įkelia ir atvaizduoja visas sąskaitas
    async renderList() {
        // Asinchroniškai gauna visas sąskaitas iš API per InvoiceRepository
        const invoices = await InvoiceRepository.getAll(); // Fetch all invoices from API
        // Suranda HTML lentelės tbody elementą pagal ID 'invoice-list'
        const tbody = document.getElementById('invoice-list');
        // Išvalo lentelės turinį prieš pridedant naujus duomenis
        tbody.innerHTML = '';
        // Pereina per kiekvieną sąskaitą ir sukuria naują lentelės eilutę
        invoices.forEach(inv => {
            // Sukuria naują <tr> (lentelės eilutės) elementą
            const tr = document.createElement('tr');
            // Užpildo eilutę HTML su sąskaitos duomenimis
            tr.innerHTML = `
                <td>${inv.number}</td> <!-- Sąskaitos numeris -->
                <td>${inv.date}</td> <!-- Sąskaitos data -->
                <td>${inv.due_date}</td> <!-- Sąskaitos apmokėjimo terminas -->
                <td>${inv.company?.buyer?.name || ''}</td> <!-- Pirkėjo pavadinimas (jei yra) -->
                <td>${inv.company?.seller?.name || ''}</td> <!-- Pardavėjo pavadinimas (jei yra) -->
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td> <!-- Sąskaitos suma (jei yra) -->
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">View</a> <!-- Nuoroda peržiūrėti -->
                    <a href="edit.html?id=${inv.id}" class="btn primary">Edit</a> <!-- Nuoroda redaguoti -->
                    <a href="delete.html?id=${inv.id}" class="btn danger">Delete</a> <!-- Nuoroda ištrinti -->
                </td>
            `;
            // Prideda sukurtą eilutę prie lentelės
            tbody.appendChild(tr);
        });
    }
}