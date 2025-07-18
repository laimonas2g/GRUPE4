class ShowInvoicePage {
  constructor(invoiceId) {
   this.invoice = InvoiceRepository.findById(invoiceId);
   this.render();
  }

  render() {
   // Render invoice details in read-only mode
   document.getElementById('invoice-number').textContent = this.invoice.number;
   // ... render other fields
  }
}