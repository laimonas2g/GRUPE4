import InvoiceRepository from './InvoiceRepository';

export default class DeleteInvoicePage {
  constructor(invoiceId) {
    this.invoiceId = invoiceId;
    this.setup();
  }
  setup() {
    document.getElementById('confirm-delete').onclick = () => {
      InvoiceRepository.delete(this.invoiceId);
      alert('Invoice deleted!');
      window.location.href = 'read.html';
    };
    document.getElementById('cancel-delete').onclick = () => {
      window.location.href = 'read.html';
    };
  }
}