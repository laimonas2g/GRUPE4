// /src/classes/InvoiceTable.js

import InvoiceCalculations from './InvoiceCalculations.js';

export default class InvoiceTable {
  static render(items) {
    const table = document.createElement('table');
    table.classList.add('products-table');

    table.innerHTML = `
      <thead>
        <tr>
          <th>Prekė</th>
          <th>Kiekis</th>
          <th>Kaina (€)</th>
          <th>Nuolaida</th>
          <th>Kaina su nuolaida (€)</th>
          <th>PVM (€)</th>
          <th>Iš viso su PVM (€)</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(item => this.renderRow(item)).join('')}
      </tbody>
    `;

    return table;
  }

  static renderRow(item) {
    const price = parseFloat(item.price);
    const discounted = InvoiceCalculations.calculateDiscountedPrice(price, item.discount);
    const tax = InvoiceCalculations.calculateTax(discounted);
    const totalWithTax = discounted + tax;

    const discountText = (item.discount && typeof item.discount.value !== 'undefined')
      ? item.discount.value + (item.discount.type === "percentage" ? "%" : "")
      : "";

    return `
      <tr>
        <td>${item.description}</td>
        <td>${item.quantity}</td>
        <td>${price.toFixed(2)}</td>
        <td>${discountText}</td>
        <td>${discounted.toFixed(2)}</td>
        <td>${tax.toFixed(2)}</td>
        <td>${totalWithTax.toFixed(2)}</td>
      </tr>
    `;
  }
}