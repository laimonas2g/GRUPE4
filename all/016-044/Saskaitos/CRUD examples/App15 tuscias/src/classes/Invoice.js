// /src/classes/Invoice.js

import InvoiceTable from './InvoiceTable.js';
import InvoiceCalculations from './InvoiceCalculations.js';

export default class Invoice {
  constructor(data, index, app) {
    this.data = data;
    this.index = index;
    this.app = app;
  }

  renderDisplay(container) {
    const div = document.createElement('div');
    div.className = 'invoice-card';
    const data = this.data;

    const totals = InvoiceCalculations.totals(data.items);

    div.innerHTML = `
      <h2>Sąskaita #<span>${data.number}</span></h2>
      <p>Išrašyta: <span>${data.date}</span></p>
      <p>Apmokėti iki: <span>${data.due_date}</span></p>
      <div class="seller-buyer-wrapper">
        <div class="seller-buyer-block">
          <h3>Pardavėjas</h3>
          <p>${data.company.seller.name}</p>
          <p>Kodas: ${data.company.seller.code}</p>
          <p>PVM: ${data.company.seller.vat}</p>
          <p>Adresas: ${data.company.seller.address}</p>
          <p>El. paštas: ${data.company.seller.email}</p>
          <p>Tel: ${data.company.seller.phone}</p>
        </div>
        <div class="seller-buyer-block">
          <h3>Pirkėjas</h3>
          <p>${data.company.buyer.name}</p>
          <p>Kodas: ${data.company.buyer.code}</p>
          <p>PVM: ${data.company.buyer.vat}</p>
          <p>Adresas: ${data.company.buyer.address}</p>
          <p>El. paštas: ${data.company.buyer.email}</p>
          <p>Tel: ${data.company.buyer.phone}</p>
        </div>
      </div>
      <h3>Prekės</h3>
      <div class="products-table-wrapper"></div>
      <div class="invoice-totals"></div>
      <button class="edit-invoice-btn">Redaguoti</button>
    `;

    // Produktų lentelė
    const productsTable = InvoiceTable.render(data.items);
    div.querySelector('.products-table-wrapper').appendChild(productsTable);

    // Totals
    const totalsDiv = div.querySelector('.invoice-totals');
    totalsDiv.innerHTML = `
      <p>Pristatymas: €${parseFloat(data.shippingPrice).toFixed(2)}</p>
      <p>Viso: €${totals.viso.toFixed(2)}</p>
      <p>PVM: €${totals.pvm.toFixed(2)}</p>
      <p>Iš viso su PVM ir pristatymu: €${(totals.isViso + parseFloat(data.shippingPrice)).toFixed(2)}</p>
    `;

    // Redaguoti mygtukas
    div.querySelector('.edit-invoice-btn').addEventListener('click', () => {
      this.app.editInvoice(this.index);
    });

    container.innerHTML = '';
    container.appendChild(div);
  }
}