import Invoice from './Invoice.js';

const API = '/api/invoices';

export default class InvoiceRepository {
    static async getAll() {
        const res = await fetch(API);
        const arr = await res.json();
        return arr.map(inv => new Invoice(inv));
    }

    static async get(id) {
        const res = await fetch(`${API}/${id}`);
        if (!res.ok) return null;
        const data = await res.json();
        return new Invoice(data);
    }

    static async save(invoice) {
        const res = await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        return await res.json();
    }

    static async update(invoice) {
        const res = await fetch(`${API}/${invoice.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        return await res.json();
    }

    static async delete(id) {
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
        return await res.json();
    }
}