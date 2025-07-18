export default class InvoiceRepository {
    static save(invoice) {
        let all = this.getAll();
        const idx = all.findIndex(inv => inv.id === invoice.id);
        if (idx !== -1) {
            all[idx] = invoice;
        } else {
            all.push(invoice);
        }
        localStorage.setItem('invoices', JSON.stringify(all));
    }

    static getAll() {
        const data = localStorage.getItem('invoices');
        return data ? JSON.parse(data) : [];
    }

    static getById(id) {
        return this.getAll().find(inv => inv.id == id);
    }

    static delete(id) {
        let all = this.getAll();
        all = all.filter(inv => inv.id != id);
        localStorage.setItem('invoices', JSON.stringify(all));
    }
}