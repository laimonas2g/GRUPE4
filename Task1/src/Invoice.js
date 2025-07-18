class Invoice {
  constructor({ id, number, date, products, customer, vatRate }) {
   this.id = id;
   this.number = number;
   this.date = date;
   this.products = products;
   this.customer = customer;
   this.vatRate = vatRate;
  }

  getSubtotal() {
   return this.products.reduce((sum, p) =>
    sum + (p.qty * p.price * (1 - (p.discount || 0) / 100)), 0);
  }

  getVAT() {
   return this.getSubtotal() * (this.vatRate / 100);
  }

  getFinalAmount() {
   return this.getSubtotal() + this.getVAT();
  }
}

if (typeof module !== 'undefined') module.exports = Invoice;
