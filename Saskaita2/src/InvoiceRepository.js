// InvoiceRepository.js
// Handles CRUD operations for invoices in LocalStorage using static methods

import Invoice from './Invoice.js';

export default class InvoiceRepository {
    static STORAGE_KEY = 'vat_invoices';

    // Returns all invoices as Invoice instances
    static getAll() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        const arr = data ? JSON.parse(data) : [];
        return arr.map(inv => new Invoice(inv));
    }

    // Returns a single invoice by ID
    static get(id) {
        return this.getAll().find(inv => inv.id == id) || null;
    }

    // Saves a new invoice
    static save(invoice) {
        const arr = this.getAll();
        arr.push(invoice);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }

    // Updates an existing invoice
    static update(updatedInvoice) {
        let arr = this.getAll();
        arr = arr.map(inv => inv.id == updatedInvoice.id ? updatedInvoice : inv);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }

    // Deletes an invoice by ID
    static delete(id) {
        let arr = this.getAll();
        arr = arr.filter(inv => inv.id != id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }
}