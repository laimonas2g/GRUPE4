// InvoiceRepository.js
// This class provides methods to interact with the server-side invoice storage via REST API.
// All invoice data is persisted in a server-side file (e.g. data.json) through the backend API.

import Invoice from './Invoice.js';

// The base API endpoint for invoice CRUD operations.
const API = '/api/invoices';

export default class InvoiceRepository {
    // Retrieve all invoices from the server.
    static async getAll() {
        const res = await fetch(API); // GET /api/invoices
        if (!res.ok) return [];
        const arr = await res.json();
        // Convert each plain object to an Invoice instance.
        return arr.map(inv => new Invoice(inv));
    }

    // Retrieve a specific invoice by ID from the server.
    static async get(id) {
        const res = await fetch(`${API}/${id}`); // GET /api/invoices/:id
        if (!res.ok) return null;
        const data = await res.json();
        return new Invoice(data);
    }

    // Save a new invoice to the server.
    static async save(invoice) {
        const res = await fetch(API, {
            method: 'POST', // POST /api/invoices
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        return await res.json();
    }

    // Update an existing invoice on the server.
    static async update(invoice) {
        const res = await fetch(`${API}/${invoice.id}`, {
            method: 'PUT', // PUT /api/invoices/:id
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        return await res.json();
    }

    // Delete an invoice from the server.
    static async delete(id) {
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' }); // DELETE /api/invoices/:id
        return await res.json();
    }
}