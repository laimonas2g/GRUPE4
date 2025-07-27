fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    document.getElementById('toggle-dark-mode').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

    const saskaitosNumeris = json.number;
    const saskaitosData = json.date;
    const saskaitosApmokejimoData = json.due_date;
    console.log(saskaitosNumeris);
    console.log(saskaitosData);
    
    const numberEl = document.querySelector('.number');
    if (numberEl) numberEl.textContent = saskaitosNumeris;
    const dateEl = document.querySelector('.date');
    if (dateEl) dateEl.textContent = saskaitosData;
    const dueDateEl = document.querySelector('.due_date');
    if (dueDateEl) dueDateEl.textContent = saskaitosApmokejimoData;
    console.log(saskaitosApmokejimoData);

    const pardavejas = json.company.seller;
    const pardavejoSekcija = document.querySelectorAll('.sectionas')[0];
    if (pardavejoSekcija) {
      pardavejoSekcija.querySelector('.name').textContent = pardavejas.name;
      pardavejoSekcija.querySelector('.address').textContent = pardavejas.address;
      pardavejoSekcija.querySelector('.code').textContent = pardavejas.code;
      pardavejoSekcija.querySelector('.vat').textContent = pardavejas.vat;
      pardavejoSekcija.querySelector('.phone').textContent = pardavejas.phone;
      pardavejoSekcija.querySelector('.email').textContent = pardavejas.email;
    } else {
      console.warn('Pardavejo sekcija (.sectionas[0]) nerasta DOMe');
    }
    console.log(pardavejas);

    const pirkejas = json.company.buyer;
    const pirkejoSekcija = document.querySelectorAll('.sectionas')[1];
    if (pirkejoSekcija) {
      pirkejoSekcija.querySelector('.name').textContent = pirkejas.name;
      pirkejoSekcija.querySelector('.address').textContent = pirkejas.address;
      pirkejoSekcija.querySelector('.code').textContent = pirkejas.code;
      pirkejoSekcija.querySelector('.vat').textContent = pirkejas.vat;
      pirkejoSekcija.querySelector('.phone').textContent = pirkejas.phone;
      pirkejoSekcija.querySelector('.email').textContent = pirkejas.email;
    } else {
      console.warn('Pirkejo sekcija (.sectionas[1]) nerasta DOMe');
    }
    console.log(pirkejas);

    spausdintiPrekes(json.items);
    setTimeout(() => {
      skaiciuotiVisus(json);
    }, 0);
  });

const spausdintiPrekes = items => {

  const itemsList = document.querySelector('.items-listas');

  itemsList.innerHTML = '';
  items.forEach(item => {
    const template = document.querySelector('#buyer-template4');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.description').textContent = item.description;
    console.log(item.description);
    clone.querySelector('.quantity').textContent = item.quantity;
    clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);

    let discountText = '';
    let discountKiekis = 0;

    if (item.discount && typeof item.discount === 'object') {
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} `;
        discountKiekis = item.discount.value;
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    } else {
      discountText = '0';
      discountKiekis = 0;
    }

    clone.querySelector('.discount').textContent = discountText;
    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;
    clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);
    itemsList.appendChild(clone);
    console.log(priceWithDiscount)
  });
};

const skaiciuotiVisus = json => {
  const isVIso = json.items.reduce((sum, item) => {
    let discountKiekis = 0;
    if (
      item.discount &&
      typeof item.discount === 'object' &&
      !Array.isArray(item.discount) &&
      item.discount.type &&
      item.discount.value !== undefined
    ) {
      if (item.discount.type === 'fixed') {
        discountKiekis = item.discount.value;
      } else if (item.discount.type === 'percentage') {
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    }
    return sum + ((item.quantity * item.price) - discountKiekis);
  }, 0);
  console.log(isVIso)

  document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

  const isVIsoSuTransportavimas = isVIso + json.shippingPrice;
  document.querySelector('.sumOfAllWithoutPVM21').textContent = isVIsoSuTransportavimas.toFixed(2);
  console.log(isVIsoSuTransportavimas);

  const vatPercent = 21;
  document.querySelector('.PVM21').textContent = `${vatPercent}%`;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
  document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);
  console.log(vatPercent)
  console.log(vatAmount);

  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
  document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);
  console.log(totalWithVAT);
  console.log(json.items);
};

function showMessage(msg, type = 'info') {
  const oldMsg = document.querySelector('.crud-message');
  if (oldMsg) oldMsg.remove();
  const div = document.createElement('div');
  div.className = `crud-message ${type}`;
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
}

function getInvoices() {
  return JSON.parse(localStorage.getItem('invoices') || '[]');
}

function saveInvoices(invoices) {
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

function findInvoice(number) {
  return getInvoices().find(inv => inv.number === number);
}

function generateInvoiceNumber() {
  return 'INV-' + Date.now();
}

function renderInvoiceList() {
  const main = document.getElementById('main');
  main.innerHTML = `<h2>VAT Invoices</h2>
    <button id="create-invoice">Create New Invoice</button>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>Final Amount (€)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="invoice-list"></tbody>
    </table>
  `;
  const invoices = getInvoices();
  const tbody = document.getElementById('invoice-list');
  invoices.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${inv.number}</td>
      <td>${inv.date}</td>
      <td>${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</td>
      <td>
        <button class="view-invoice" data-id="${inv.number}">View</button>
        <button class="edit-invoice" data-id="${inv.number}">Edit</button>
        <button class="delete-invoice" data-id="${inv.number}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('create-invoice').onclick = () => renderCreateInvoice();

  tbody.onclick = e => {
    if (e.target.classList.contains('view-invoice')) {
      renderViewInvoice(e.target.dataset.id);
    }
    if (e.target.classList.contains('edit-invoice')) {
      renderEditInvoice(e.target.dataset.id);
    }
    if (e.target.classList.contains('delete-invoice')) {
      if (confirm('Delete this invoice?')) {
        let invoices = getInvoices();
        invoices = invoices.filter(inv => inv.number !== e.target.dataset.id);
        saveInvoices(invoices);
        showMessage('Invoice deleted', 'success');
        renderInvoiceList();
      }
    }
  };
}

function renderCreateInvoice() {
  const main = document.getElementById('main');
  main.innerHTML = `<h2>Create VAT Invoice</h2>
    <div id="invoice-form">Loading...</div>
    <div>
      <button id="save-invoice">Save</button>
      <button id="update-invoice">New Invoice</button>
      <button id="cancel-invoice">Back to List</button>
    </div>
  `;

  let currentInvoice = null;
  function fetchAndRender() {
    document.getElementById('invoice-form').textContent = 'Loading...';
    fetch('https://in3.dev/inv/')
      .then(res => res.json())
      .then(json => {
        const totals = calculateTotals(json);
        Object.assign(json, totals);
        currentInvoice = json;
        renderInvoiceView(json, 'invoice-form', false);
      });
  }
  fetchAndRender();

  document.getElementById('save-invoice').onclick = () => {
    if (!currentInvoice) return;
    const totals = calculateTotals(currentInvoice);
    Object.assign(currentInvoice, totals);
    const invoices = getInvoices();
    invoices.push(currentInvoice);
    saveInvoices(invoices);
    showMessage('Invoice saved', 'success');
    renderInvoiceList();
  };

  document.getElementById('update-invoice').onclick = () => {
    fetchAndRender();
    showMessage('Fetched new invoice', 'info');
  };

  document.getElementById('cancel-invoice').onclick = () => {
    renderInvoiceList();
  };
}

function renderViewInvoice(number) {
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  const main = document.getElementById('main');
  main.innerHTML = `<h2>VAT Invoice</h2>
    <div id="invoice-form"></div>
    <button id="back-list">Back to List</button>
  `;
  renderInvoiceView(invoice, 'invoice-form', false);
  document.getElementById('back-list').onclick = () => renderInvoiceList();
}

function renderEditInvoice(number) {
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  const main = document.getElementById('main');
  main.innerHTML = `<h2>Edit Invoice</h2>
    <form id="edit-invoice-form"></form>
    <button id="save-edit">Save</button>
    <button id="cancel-edit">Back to List</button>
  `;
  renderInvoiceView(invoice, 'edit-invoice-form', true);

  document.getElementById('save-edit').onclick = () => {
    const form = document.getElementById('edit-invoice-form');
    const items = invoice.items.map((item, idx) => {
      const quantity = parseFloat(form.querySelector(`[name="quantity-${idx}"]`).value);
      let discountInput = form.querySelector(`[name="discount-${idx}"]`).value.trim();
      let discount = null;

      if (discountInput === '') {
        discount = null;
      }
      else if (discountInput.endsWith('%')) {
        const percentValue = parseFloat(discountInput.slice(0, -1));
        if (!isNaN(percentValue)) {
          discount = { type: 'percentage', value: percentValue };
        } else {
          showMessage('Invalid discount percentage', 'error');
          return null;
        }
      }
      else {
        const fixedValue = parseFloat(discountInput);
        if (!isNaN(fixedValue)) {
          discount = { type: 'fixed', value: fixedValue };
        } else {
          showMessage('Invalid discount value', 'error');
          return null;
        }
      }

      if (isNaN(quantity) || quantity < 0) {
        showMessage('Invalid quantity', 'error');
        return null;
      }

      return {
        ...item,
        quantity,
        discount
      };
    });

    if (items.includes(null)) return;

    invoice.items = items;
    const totals = calculateTotals(invoice);
    Object.assign(invoice, totals);

    let invoices = getInvoices();
    invoices = invoices.map(inv => inv.number === invoice.number ? invoice : inv);
    saveInvoices(invoices);
    showMessage('Invoice updated', 'success');
    renderEditInvoice(invoice.number);
  };

  document.getElementById('cancel-edit').onclick = () => renderInvoiceList();
}

function renderInvoiceView(invoice, containerId, editable = false) {
  const container = document.getElementById(containerId);
  let html = `
    <div><b>Number:</b> ${invoice.number}</div>
    <div><b>Date:</b> ${invoice.date}</div>
    <div><b>Due Date:</b> ${invoice.due_date}</div>
    <div><b>Seller:</b> ${invoice.company.seller.name}, ${invoice.company.seller.address}</div>
    <div><b>Buyer:</b> ${invoice.company.buyer.name}, ${invoice.company.buyer.address}</div>
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price (€)</th>
          <th>Discount</th>
          <th>Total (€)</th>
        </tr>
      </thead>
      <tbody>
  `;
  invoice.items.forEach((item, idx) => {
    let discountText = '';
    let discountKiekis = 0;

    if (item.discount && typeof item.discount === 'object') {
      if (item.discount.type === 'fixed') {
        discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}`;
        discountKiekis = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
      } else if (item.discount.type === 'percentage') {
        discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}%`;
        discountKiekis = (item.quantity * item.price) * (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) / 100;
      }
    } else {
      discountText = '0';
      discountKiekis = 0;
    }

    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;

    html += `<tr>
      <td>${item.description}</td>
      <td>${editable 
        ? `<input type="number" min="0" name="quantity-${idx}" value="${item.quantity}">` 
        : item.quantity}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${editable 
        ? `<input type="text" name="discount-${idx}" value="${
            item.discount 
              ? (item.discount.type === 'percentage' 
                  ? (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) + '%' 
                  : (typeof item.discount.value !== 'undefined' ? item.discount.value : 0)
                ) 
              : 0
          }" placeholder="e.g. 10 or 5%">`
        : discountText
      }</td>
      <td>${priceWithDiscount.toFixed(2)}</td>
    </tr>`;
  });
  html += `</tbody></table>
    <div><b>Shipping (€):</b> ${invoice.shippingPrice ? invoice.shippingPrice.toFixed(2) : '0.00'}</div>
    <div><b>Sum without VAT (€):</b> ${(invoice.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
    <div><b>VAT (21%):</b> ${(invoice.vatAmount || 0).toFixed(2)}</div>
    <div><b>Total with VAT (€):</b> ${(invoice.totalPriceWithPVM21 || 0).toFixed(2)}</div>
  `;
  container.innerHTML = html;
}

function calculateTotals(json) {
  const isVIso = json.items.reduce((sum, item) => {
    let discountKiekis = 0;
    if (
      item.discount &&
      typeof item.discount === 'object' &&
      !Array.isArray(item.discount) &&
      item.discount.type &&
      item.discount.value !== undefined
    ) {
      if (item.discount.type === 'fixed') {
        discountKiekis = item.discount.value;
      } else if (item.discount.type === 'percentage') {
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    }
    return sum + ((item.quantity * item.price) - discountKiekis);
  }, 0);

  const shipping = json.shippingPrice || 0;
  const isVIsoSuTransportavimas = isVIso + shipping;

  const vatPercent = 21;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;

  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;

  return {
    sumOfAllWithoutPVM21: isVIsoSuTransportavimas,
    vatAmount,
    totalPriceWithPVM21: totalWithVAT
  };
}

window.onload = () => {
  if (!document.getElementById('main')) {
    const div = document.createElement('div');
    div.id = 'main';
    document.body.appendChild(div);
  }
  renderInvoiceList();

  
};

/* --- Print Button and Print Styles for Invoice View --- */

// Add print button and print-specific CSS when viewing an invoice
(function setupPrintButtonAndStyles() {
  // Delegate to run after each renderViewInvoice call
  const origRenderViewInvoice = renderViewInvoice;
  renderViewInvoice = function(invoice, containerId, editable = false) {
    origRenderViewInvoice(invoice, containerId, editable);

    // Only add print button if not editable (i.e., in view mode)
    if (!editable) {
      const main = document.getElementById('main');
      // Avoid duplicate print button
      if (!document.getElementById('print-invoice-btn')) {
        const printBtn = document.createElement('button');
        printBtn.id = 'print-invoice-btn';
        printBtn.textContent = 'Print';
        printBtn.style.marginRight = '10px';
        // Insert before "Back to List" button if present, else at end
        const backBtn = document.getElementById('back-list');
        if (backBtn) {
          main.insertBefore(printBtn, backBtn);
        } else {
          main.appendChild(printBtn);
        }
        printBtn.onclick = () => window.print();
      }
    }
  };

  // Add print-specific CSS to hide unwanted buttons
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      #toggle-dark-mode,
      #back-list,
      #print-invoice-btn {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
})();



