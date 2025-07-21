
// this class provides methods to interact with the server-side invoice storage via REST API.
// all invoice data is persisted in a server-side file (e.g. data.json) through the backend API.
// Importuojama Invoice klasė iš kito failo.
import Invoice from './Invoice.js';

// Pagrindinis API galutinis taškas (endpoint) sąskaitų CRUD operacijoms.
const API = '/api/invoices';

// Eksportuojama InvoiceRepository klasė, skirta darbui su sąskaitomis per REST API.
export default class InvoiceRepository {
    // Metodas, skirtas gauti visas sąskaitas iš serverio.
    static async getAll() {
        // Siunčiamas GET užklausimas į /api/invoices.
        const res = await fetch(API); // GET /api/invoices
        // Jei atsakymas nėra sėkmingas, grąžinamas tuščias masyvas.
        if (!res.ok) return [];
        // Gautas JSON masyvas su sąskaitų duomenimis.
        const arr = await res.json();
        // Kiekvienas objektas paverčiamas Invoice klasės egzemplioriumi.
        return arr.map(inv => new Invoice(inv));
    }

    // Metodas, skirtas gauti konkrečią sąskaitą pagal ID iš serverio.
    static async get(id) {
        // Siunčiamas GET užklausimas į /api/invoices/:id.
        const res = await fetch(`${API}/${id}`); // GET /api/invoices/:id
        // Jei atsakymas nėra sėkmingas, grąžinama null reikšmė.
        if (!res.ok) return null;
        // Gautas JSON objektas su sąskaitos duomenimis.
        const data = await res.json();
        // Objektas paverčiamas Invoice klasės egzemplioriumi.
        return new Invoice(data);
    }

    // Metodas, skirtas išsaugoti naują sąskaitą serveryje.
    static async save(invoice) {
        // Siunčiamas POST užklausimas su sąskaitos duomenimis į /api/invoices.
        const res = await fetch(API, {
            method: 'POST', // POST /api/invoices
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        // Grąžinamas serverio atsakymas (naujos sąskaitos duomenys).
        return await res.json();
    }

    // Metodas, skirtas atnaujinti esamą sąskaitą serveryje.
    static async update(invoice) {
        // Siunčiamas PUT užklausimas su atnaujintais duomenimis į /api/invoices/:id.
        const res = await fetch(`${API}/${invoice.id}`, {
            method: 'PUT', // PUT /api/invoices/:id
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(invoice)
        });
        // Grąžinamas serverio atsakymas (atnaujintos sąskaitos duomenys).
        return await res.json();
    }

    // Metodas, skirtas ištrinti sąskaitą iš serverio pagal ID.
    static async delete(id) {
        // Siunčiamas DELETE užklausimas į /api/invoices/:id.
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' }); // DELETE /api/invoices/:id
        // Grąžinamas serverio atsakymas (ištrintos sąskaitos duomenys arba statusas).
        return await res.json();
    }
}