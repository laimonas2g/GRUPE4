export default class Invoice {
  constructor({ id, number, date, products, discount, vat, total }) {
    this.id = id;
    this.number = number;
    this.date = date;
    this.products = products;
    this.discount = discount;
    this.vat = vat;
    this.total = total;
  }

  static fromAPI(data) {
    return new Invoice({
      id: data.id || null,
      number: data.number,
      date: data.date,
      products: data.products,
      discount: data.discount || 0,
      vat: data.vat,
      total: data.total,
    });
  }

  static calculateTotal(products, discount = 0) {
    let subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
    let vat = subtotal * 0.21;
    let total = subtotal + vat - discount;
    return { subtotal, vat, total };
  }
}