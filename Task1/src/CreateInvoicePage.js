class CreateInvoicePage {
  constructor() {
   this.invoice = null;
   this.init();
  }

  async init() {
   this.invoice = await fetchInvoiceFromApi();
   this.renderInvoice();
   this.setupButtons();
  }

  renderInvoice() {
   // Render invoice fields (read-only)
   document.getElementById('invoice-number').textContent = this.invoice.number;
   document.getElementById('invoice-date').textContent = this.invoice.date;
   // ... render products, customer, etc.
  }

  setupButtons() {
   document.getElementById('save-btn').onclick = () => {
    this.invoice.id = crypto.randomUUID();
    InvoiceRepository.save(this.invoice);
    alert('Invoice saved!');
    window.location.href = 'read.html';
   };
   document.getElementById('update-btn').onclick = async () => {
    this.invoice = await fetchInvoiceFromApi();
    this.renderInvoice();
   };
   document.getElementById('cancel-btn').onclick = () => {
    window.location.href = 'read.html';
   };
  }
}