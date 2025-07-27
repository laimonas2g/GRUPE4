// /src/classes/InvoiceCalculations.js

export default class InvoiceCalculations {
  static calculateDiscountedPrice(price, discount) {
    if (!discount) return price;
    if (discount.type === "percentage") {
      return price - price * (discount.value / 100);
    } else if (discount.type === "fixed") {
      return price - discount.value;
    }
    return price;
  }

  static calculateTax(price) {
    return price * 0.21;
  }

  static totals(items) {
    let viso = 0;
    let pvm = 0;
    let isViso = 0;

    items.forEach(item => {
      const price = parseFloat(item.price);
      const discounted = this.calculateDiscountedPrice(price, item.discount);
      const tax = this.calculateTax(discounted);
      const totalWithTax = discounted + tax;

      viso += discounted;
      pvm += tax;
      isViso += totalWithTax;
    });

    return { viso, pvm, isViso };
  }

  static totalWithTaxAndShipping(items, shipping) {
    const { isViso } = this.totals(items);
    return isViso + parseFloat(shipping);
  }
}