import Invoice from '../models/Invoice.js';

export default class InvoiceRepository {
  static KEY = 'vat_invoices';

  static getAll() {
    let data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data).map(i => new Invoice(i)) : [];
  }

  static save(invoice) {
    const all = this.getAll();
    all.push(invoice);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  }

  static update(id, data) {
    let all = this.getAll();
    all = all.map(i => (i.id === id ? { ...i, ...data } : i));
    localStorage.setItem(this.KEY, JSON.stringify(all));
  }

  static delete(id) {
    let all = this.getAll().filter(i => i.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  }

  static getById(id) {
    return this.getAll().find(i => i.id === id);
  }
}