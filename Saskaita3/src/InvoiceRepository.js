import Invoice from './Invoice.js';

export default class InvoiceRepository {
    static STORAGE_KEY = 'vat_invoices';

    static getAll() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        const arr = data ? JSON.parse(data) : [];
        return arr.map(inv => new Invoice(inv));
    }

    static get(id) {
        return this.getAll().find(inv => inv.id == id) || null;
    }

    static save(invoice) {
        const arr = this.getAll();
        arr.push(invoice);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }

    static update(updatedInvoice) {
        let arr = this.getAll();
        arr = arr.map(inv => inv.id == updatedInvoice.id ? updatedInvoice : inv);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }

    static delete(id) {
        let arr = this.getAll();
        arr = arr.filter(inv => inv.id != id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(arr));
    }
}