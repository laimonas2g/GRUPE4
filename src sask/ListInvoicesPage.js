
// fetches and displays all invoices from the backend API in a table

import InvoiceRepository from './InvoiceRepository.js';

export default class ListInvoicesPage {
    constructor() {
        // Sukuriant objektą, iškart atvaizduojamas sąskaitų sąrašas
        this.renderList();
    }

    // Įkelia ir atvaizduoja visas sąskaitas
    async renderList() {
        // Asinchroniškai gauna visas sąskaitas iš API per InvoiceRepository
        const invoices = await InvoiceRepository.getAll(); // fetch all invoices from API
        // Suranda HTML lentelės tbody elementą pagal ID 'invoice-list'
        const tbody = document.getElementById('invoice-list');
        // Išvalo lentelės turinį prieš įdedant naujus duomenis
        tbody.innerHTML = '';
        // Pereina per kiekvieną sąskaitą ir sukuria naują lentelės eilutę
        invoices.forEach(inv => {
            // Sukuria naują <tr> elementą
            const tr = document.createElement('tr');
            // Užpildo eilutę sąskaitos duomenimis
            tr.innerHTML = `
                <td>${inv.number}</td> <!-- Sąskaitos numeris -->
                <td>${inv.date}</td> <!-- Sąskaitos data -->
                <td>${inv.due_date}</td> <!-- Sąskaitos apmokėjimo terminas -->
                <td>${inv.company?.buyer?.name || ''}</td> <!-- Pirkėjo pavadinimas (jei yra) -->
                <td>${inv.company?.seller?.name || ''}</td> <!-- Pardavėjo pavadinimas (jei yra) -->
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td> <!-- Sąskaitos suma (jei yra) -->
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">Žiūrėti</a> <!-- Nuoroda peržiūrėti -->
                    <a href="edit.html?id=${inv.id}" class="btn primary">Redaguoti</a> <!-- Nuoroda redaguoti -->
                    <a href="delete.html?id=${inv.id}" class="btn danger">Trinti</a> <!-- Nuoroda trinti -->
                </td>
            `;
            // Prideda naują eilutę į lentelės kūną
            tbody.appendChild(tr);
        });
    }
}