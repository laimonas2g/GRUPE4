
// Handles showing a confirmation to delete an invoice and then deleting via the API
// Tvarko sąskaitos ištrynimo patvirtinimo rodymą ir trynimą per API

import InvoiceRepository from './InvoiceRepository.js';

export default class DeleteInvoicePage {
    constructor() {
        // Pradinė sąskaitos reikšmė (kol kas nėra užkrauta)
        this.invoice = null;
        // Inicijuoja puslapio logiką
        this.init();
    }

    // Inicijuoja puslapį: užkrauna sąskaitą ir paruošia UI
    async init() {
        // Sukuria URL parametrų objektą iš naršyklės adreso
        const params = new URLSearchParams(window.location.search);
        // Paimamas 'id' parametras iš URL
        const id = params.get('id');
        // Jei nėra id, rodo klaidos žinutę ir nutraukia vykdymą
        if (!id) return this.showMessage('No invoice ID provided', true);
        // Bando užkrauti sąskaitą pagal id iš API
        this.invoice = await InvoiceRepository.get(id);
        // Jei sąskaita nerasta, rodo klaidos žinutę ir nutraukia vykdymą
        if (!this.invoice) return this.showMessage('Sąskaita nerasta', true);
        // Atvaizduoja patvirtinimo informaciją apie sąskaitą
        this.renderConfirmation();
        // Paruošia mygtukų įvykių klausytojus
        this.setupEventListeners();
    }

    // Atvaizduoja sąskaitos informaciją patvirtinimui
    renderConfirmation() {
        // Parodo sąskaitos numerį
        document.getElementById('invoice-number').textContent = this.invoice.number;
        // Parodo sąskaitos datą
        document.getElementById('invoice-date').textContent = this.invoice.date;
        // Parodo pirkėjo pavadinimą (jei yra)
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        // Parodo pardavėjo pavadinimą (jei yra)
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    }

    // Paruošia patvirtinimo ir atšaukimo mygtukų įvykių klausytojus
    setupEventListeners() {
        // Suranda trynimo patvirtinimo mygtuką
        const deleteBtn = document.getElementById('confirm-delete-btn');
        // Suranda atšaukimo mygtuką
        const cancelBtn = document.getElementById('cancel-delete-btn');
        // Jei yra trynimo mygtukas, priskiria jam paspaudimo įvykį
        if (deleteBtn) {
            deleteBtn.onclick = async () => await this.handleDelete();
        }
        // Jei yra atšaukimo mygtukas, priskiria jam paspaudimo įvykį
        if (cancelBtn) {
            cancelBtn.onclick = () => window.location.href = 'read.html';
        }
    }

    // Atlieka trynimą per API ir rodo rezultatą
    async handleDelete() {
        // Ištrina sąskaitą per API pagal jos id
        await InvoiceRepository.delete(this.invoice.id);
        // Parodo sėkmės žinutę
        this.showMessage('Sąskaita ištrinta!');
        // Po 0.5 sekundės grąžina į sąskaitų sąrašą
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    // Parodo vartotojui žinutę
    showMessage(msg, isError = false) {
        // Suranda žinutės elementą puslapyje
        const el = document.getElementById('message');
        // Nustato žinutės tekstą
        el.textContent = msg;
        // Nustato žinutės spalvą (raudona jei klaida, žalia jei sėkmė)
        el.style.color = isError ? 'red' : 'green';
    }
}