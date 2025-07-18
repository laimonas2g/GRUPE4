class EditInvoicePage {
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
   // Fill form fields with invoice data
   // For each product, create input for qty and discount
  }

  setupForm() {
   document.getElementById('edit-form').onsubmit = (e) => {
    e.preventDefault();
    // Validate and update invoice
    // Update products' qty and discount from form
    InvoiceRepository.update(this.invoiceId, this.invoice);
    alert('Invoice updated!');
    window.location.reload();
   };
  }
}