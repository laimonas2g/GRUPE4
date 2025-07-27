import InvoiceRepository from './InvoiceRepository';

export default class ShowInvoicePage {
  constructor(invoiceId) {
    this.invoice = InvoiceRepository.findById(invoiceId);
    this.render();
  }
  render() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    // Render other fields as needed
  }
}