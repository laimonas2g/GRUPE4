import InvoiceRepository from './InvoiceRepository';

export default class EditInvoicePage {
  constructor(invoiceId) {
    this.invoiceId = invoiceId;
    this.invoice = InvoiceRepository.findById(invoiceId);
    this.init();
  }
  init() {
    this.renderForm();
    this.setupForm();
  }
  renderForm() {
    // Fill the form fields with invoice data (implement as needed)
  }
  setupForm() {
    document.getElementById('edit-form').onsubmit = (e) => {
      e.preventDefault();
      // Update logic here
      InvoiceRepository.update(this.invoiceId, this.invoice);
      alert('Invoice updated!');
      window.location.href = 'read.html';
    };
  }
}