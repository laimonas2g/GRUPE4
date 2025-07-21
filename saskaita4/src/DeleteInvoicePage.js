
/* tvarko sąskaitos ištrynimo patvirtinimo rodymą ir trynimą per API */

import InvoiceRepository from './InvoiceRepository.js';

export default class DeleteInvoicePage {
    constructor() {
        this.invoice = null;
        this.init();
    }

    // Initialize the page: load the invoice and prepare UI
    async init() {
        const params = new URLSearchParams(window.location.search);
        // paimamas 'id' parametras is URL
        const id = params.get('id');

        // Jei nėra id = rodo klaidos zinute ir nutraukia veikla
        if (!id) return this.showMessage('No invoice ID provided', true);
        /* bando uzkrauti saskaita pagal id is API */
        this.invoice = await InvoiceRepository.get(id);
        if (!this.invoice) return this.showMessage('Saskaita nerasta', true);
        this.renderConfirmation();
        this.setupEventListeners();
    }

    // saskaitos informacija patvirtinimui
    renderConfirmation() {
        document.getElementById('invoice-number').textContent = this.invoice.number;
        document.getElementById('invoice-date').textContent = this.invoice.date;
        //Parodo pirkėjo pavadinimą (jei yra)
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    }

    // set up confirm and cancel buttons
    setupEventListeners() {
        const deleteBtn = document.getElementById('confirm-delete-btn');
        const cancelBtn = document.getElementById('cancel-delete-btn');
        /* Jei yra trynimo mygtukas, priskiria jam paspaudimo įvykį */
        if (deleteBtn) {
            deleteBtn.onclick = async () => await this.handleDelete();
        }
        if (cancelBtn) {
            cancelBtn.onclick = () => window.location.href = 'read.html';
        }
    }

    // Perform the delete via backend API and show result
    async handleDelete() {
        await InvoiceRepository.delete(this.invoice.id);
        this.showMessage('Sąskaita ištrinta!');
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    // rodo vartotojui zinute
    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';
    }
}