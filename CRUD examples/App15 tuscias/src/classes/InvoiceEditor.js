// /src/classes/InvoiceEditor.js

export default class InvoiceEditor {
  constructor(app) {
    this.app = app;
    this.container = document.getElementById('invoice-display');
  }

  render(invoice, index) {
    this.container.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'invoice-editor';

    div.innerHTML = `
      <h2>Redaguoti sąskaitą #${invoice.number}</h2>
      <label>
        Numeris:
        <input type="text" id="edit-number" value="${invoice.number}">
      </label>
      <label>
        Data:
        <input type="date" id="edit-date" value="${invoice.date}">
      </label>
      <label>
        Apmokėti iki:
        <input type="date" id="edit-due" value="${invoice.due_date}">
      </label>

      <h3>Prekės</h3>
      <div id="edit-products"></div>

      <button id="save-invoice-btn">Išsaugoti</button>
      <button id="cancel-edit-btn">Atšaukti</button>
    `;

    this.container.appendChild(div);

    this.renderProducts(invoice.items);

    // Event listeners
    document.getElementById('save-invoice-btn').addEventListener('click', () => {
      const newNumber = document.getElementById('edit-number').value;
      const newDate = document.getElementById('edit-date').value;
      const newDue = document.getElementById('edit-due').value;

      invoice.number = newNumber;
      invoice.date = newDate;
      invoice.due_date = newDue;

      // Atnaujinti prekes
      invoice.items = this.getUpdatedProducts(invoice.items);

      this.app.saveInvoiceChanges(index, invoice);
    });

    document.getElementById('cancel-edit-btn').addEventListener('click', () => {
      this.app.renderInvoice(index);
    });
  }

  renderProducts(items) {
    const container = document.getElementById('edit-products');
    container.innerHTML = '';

    items.forEach((item, i) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'edit-product-item';

      const discountValue = (item.discount && typeof item.discount.value !== 'undefined')
        ? item.discount.value
        : "-";

      const discountType = (item.discount && item.discount.type)
        ? item.discount.type
        : 'percentage'; // arba 'fixed' pagal tavo sistemą

      productDiv.innerHTML = `
        <p><strong>${item.description}</strong></p>
        <label>
          Kiekis:
          <input type="number" min="1" id="edit-qty-${i}" value="${item.quantity}">
        </label>
        <label>
          Kaina (€):
          <input type="number" step="0.01" min="0" id="edit-price-${i}" value="${item.price}">
        </label>
        <label>
          Nuolaida:
          <input type="number" step="0.01" min="0" id="edit-discount-${i}" value="${discountValue}">
          <select id="edit-discount-type-${i}">
            <option value="percentage" ${discountType === 'percentage' ? 'selected' : ''}>%</option>
            <option value="fixed" ${discountType === 'fixed' ? 'selected' : ''}>€</option>
          </select>
        </label>
        <hr>
      `;

      container.appendChild(productDiv);
    });
  }

  getUpdatedProducts(items) {
    return items.map((item, i) => {
      const qty = parseInt(document.getElementById(`edit-qty-${i}`).value) || item.quantity;
      const price = parseFloat(document.getElementById(`edit-price-${i}`).value) || item.price;

      const discountInput = document.getElementById(`edit-discount-${i}`);
      const discountValue = discountInput.value === '' ? null : parseFloat(discountInput.value);

      const discountType = document.getElementById(`edit-discount-type-${i}`).value;

      return {
        ...item,
        quantity: qty,
        price: price,
        discount: discountValue !== null ? { value: discountValue, type: discountType } : null
      };
    });
  }
}