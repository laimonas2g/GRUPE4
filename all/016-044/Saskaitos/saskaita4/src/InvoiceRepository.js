
import Invoice from './Invoice.js';

const API = '/api/invoices';

export default class InvoiceRepository {
    
    static async getAll() { // Retrieve all invoices from the server
        const res = await fetch(API); // GET /api/invoices
        if (!res.ok) return [];
        const arr = await res.json();
        // // kiekvienas objektas paverciamas Invoice klases egzemplioriumi
        return arr.map(inv => new Invoice(inv));
    }

    // Retrieve a specific invoice by ID from the server
    static async get(id) {
        // Siunčiamas GET užklausimas į /api/invoices/:id.
        const res = await fetch(`${API}/${id}`); // GET /api/invoices/:id
        if (!res.ok) return null;
        const data = await res.json();
        // objektas paverciamas Invoice klases egzemplioriumi
        return new Invoice(data);
    }

    // Save a new invoice to the server.
    static async save(invoice) {
        /* Siunčiamas POST užklausimas su sąskaitos duomenimis į /api/invoices */
        const res = await fetch(API, {
            method: 'POST', // POST /api/invoices
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        return await res.json();
    }

    // Update an existing invoice on the server.
    static async update(invoice) {
         // Siunčiamas PUT užklausimas su atnaujintais duomenimis į /api/invoices/:id
        const res = await fetch(`${API}/${invoice.id}`, {
            method: 'PUT', // PUT /api/invoices/:id
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        // Grąžinamas serverio atsakymas (atnaujintos sąskaitos duomenys)
        return await res.json();
    }

    // Delete an invoice from server
    static async delete(id) {
        // Siunčiamas DELETE užklausimas į /api/invoices/:id.
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' }); // DELETE /api/invoices/:id
        return await res.json();
    }
}