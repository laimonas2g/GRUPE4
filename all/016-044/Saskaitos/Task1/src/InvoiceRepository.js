export default class InvoiceRepository {
  static getAll() {
    return JSON.parse(localStorage.getItem('invoices') || '[]');
  }
  static save(invoice) {
    const invoices = this.getAll();
    invoices.push(invoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }
  static update(id, data) {
    const invoices = this.getAll();
    const idx = invoices.findIndex(inv => inv.id === id);
    if (idx !== -1) {
      invoices[idx] = { ...invoices[idx], ...data };
      localStorage.setItem('invoices', JSON.stringify(invoices));
    }
  }
  static delete(id) {
    const invoices = this.getAll().filter(inv => inv.id !== id);
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }
  static findById(id) {
    return this.getAll().find(inv => inv.id === id);
  }
}