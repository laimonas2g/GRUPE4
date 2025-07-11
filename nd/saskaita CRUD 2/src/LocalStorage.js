export class LocalStorage {
    static getInvoices() {
        return JSON.parse(localStorage.getItem('invoices') || '[]');
    }
    static saveInvoices(invoices) {
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }
    static addInvoice(inv) {
        const invoices = this.getInvoices();
        invoices.push(inv);
        this.saveInvoices(invoices);
    }
    static updateInvoice(number, data) {
        let invoices = this.getInvoices();
        invoices = invoices.map(inv => inv.number === number ? data : inv);
        this.saveInvoices(invoices);
    }
    static deleteInvoice(number) {
        let invoices = this.getInvoices();
        invoices = invoices.filter(inv => inv.number !== number);
        this.saveInvoices(invoices);
    }
    static findInvoiceByNumber(number) {
        return this.getInvoices().find(inv => inv.number === number);
    }
}
