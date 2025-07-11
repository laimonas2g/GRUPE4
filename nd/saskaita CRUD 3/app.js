/*

Užduotis CRUD.

C Sukurti puslapį kuriame galima suformuoti PVM Sąskaitą Faktūrą iš duomenų gautų iš API https://in3.dev/inv/ 
Puslapyje suformuotą PVM Sąskaitą Faktūrą išsaugoti LocalStorage faile. 
Turi būti galimybė saugoti neribotą kiekį sąskaitų.

R Sukurti puslapį kuriame būtų rodomas visos PVM Sąskaitos Faktūros sąrašo pavidalu,
 atvaizduojant sąskaitos numerį, datą ir galutinę sumą.
Prie kiekvienos sąskaitos sąraše taip pat turi būti mygtukai 
“Redaguoti”, “Žiūrėti” ir “Trinti”. 
Mygtukas “Žiūrėti” yra skirtas sąskaitos peržiūrai be redagavimo.

U Mygtukas “Redaguoti” turi atidaryti puslapį, kuriame galima redaguoti sąskaitos prekių kiekius ir nuolaidas 
Visos kitos sąskaitos dalys nebūtinai turi būti redaguojamos. 
Po redagavimo turi pasikeisti ir faile išsisaugoti atitinkamos vertės, PVM ir galutinė suma.

D Mygtukas “Trinti” yra skirtas sąskaitai pašalinti.


Paaiškinimai.

Sąskaitos formavimo taisyklės aprašytos užduotyje K2. Redagavimo funkcionalumą galima išplėsti, 
pridedant galimybę redaguoti ir kitus laukelius ir/ar atskiros prekės pašalinimą. 
Padarykite būtinas įvedamų duomenų validacijas. (kad po įvedimo galutinė suma nebūtų NaN) 
Po sąskaitos redagavimo, turi būti rodoma ta pati, jau atnaujinta sąskaita 
(po update, redirect atgal į tos sąskaitos edit) Atidarius create puslapį, 
turi būti iškart rodoma naujai iš API gauta sąskaita, be redagavimo galimybės. 
Apačioje turi būti trys mygtukai: “Išsaugoti” (išsaugo sąskaitą į failą ir rodo sąrašą), 
“Atnaujinti” (rodo naują sąskaitą iš API, prieš tai buvusi neišsaugoma), 
“Atšaukti” (rodomas sąrašas). Po kiekvienos atliktos CRUD operacijos, parodykite atitinkamą pranešimą. 
Galite pridėti savo sugalvotų funkcianalumų, kurie papildo, bet nepakeičia užduotyje nurodytų.

-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------

Task_2 CRUD.

Create a page where you can create a VAT Invoice from data received from the API https://in3.dev/inv/
Save the VAT Invoice created on the page to a LocalStorage file.
It must be possible to store an unlimited number of invoices.

Create a page that displays all VAT Invoices in the form of a list,
displaying the invoice number, date and final amount.
Each invoice must also have the
“Edit”, “View” and “Delete” buttons in the list.
The “View” button is intended for viewing the invoice without editing.

The “Edit” button must open a page where you can edit the invoice's product quantities and discounts
All other parts of the invoice do not necessarily have to be edited.
After editing, the corresponding values, VAT and final amount must change and be saved in the file.

The “Delete” button is intended for deleting the invoice.

Explanations.

The rules for creating an invoice are described in task K2. The editing functionality can be expanded by
adding the ability to edit other fields and/or removing a single item.
Make the necessary validations of the entered data. (so that after entering the final amount is not NaN)
After editing the invoice, the same, already updated invoice must be displayed
(after update, redirect back to the edit of that invoice) When opening the create page,
the invoice newly received from the API must be immediately displayed, without the possibility of editing.
There must be three buttons at the bottom: “Save” (save the invoice to a file and show the list),
“Update” (show a new invoice from the API, the previous one is not saved),
“Cancel” (show the list). After each CRUD operation performed, show the appropriate message.
You can add your own functionality that supplements, but does not replace, those specified in the task.

*/

fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    document.getElementById('toggle-dark-mode').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

    ///////////////////////////////// inventorius //////////////////////////////////////////////////
    const saskaitosNumeris = json.number;
    const saskaitosData = json.date;
    const saskaitosApmokejimoData = json.due_date;
    console.log(saskaitosNumeris);
    console.log(saskaitosData);

    ///////////////////////////////// inventorius/data //////////////////////////////////////////////////
    document.querySelector('.number').textContent = saskaitosNumeris;
    document.querySelector('.date').textContent = saskaitosData;
    document.querySelector('.due_date').textContent = saskaitosApmokejimoData;
    console.log(saskaitosApmokejimoData);

    ///////////////////////////////// Pardavejas //////////////////////////////////////////////////
    const pardavejas = json.company.seller;
    const pardavejoSekcija = document.querySelectorAll('.sectionas')[0];
    pardavejoSekcija.querySelector('.name').textContent = pardavejas.name;
    pardavejoSekcija.querySelector('.address').textContent = pardavejas.address;
    pardavejoSekcija.querySelector('.code').textContent = pardavejas.code;
    pardavejoSekcija.querySelector('.vat').textContent = pardavejas.vat;
    pardavejoSekcija.querySelector('.phone').textContent = pardavejas.phone;
    pardavejoSekcija.querySelector('.email').textContent = pardavejas.email;
    console.log(pardavejas);

    ///////////////////////////////// pirkejas //////////////////////////////////////////////////
    const pirkejas = json.company.buyer;
    const pirkejoSekcija = document.querySelectorAll('.sectionas')[1];
    pirkejoSekcija.querySelector('.name').textContent = pirkejas.name;
    pirkejoSekcija.querySelector('.address').textContent = pirkejas.address;
    pirkejoSekcija.querySelector('.code').textContent = pirkejas.code;
    pirkejoSekcija.querySelector('.vat').textContent = pirkejas.vat;
    pirkejoSekcija.querySelector('.phone').textContent = pirkejas.phone;
    pirkejoSekcija.querySelector('.email').textContent = pirkejas.email;
    console.log(pirkejas);

    ///////////////////////////////// setTimeout //////////////////////////////////////////////////
    /*To fix the issues with calculation and grouping, 
    refactor the code to use a separate function for rendering items, 
    ensure all calculations are done after rendering, and use setTimeout to avoid potential 
    rendering or debugger issues. */

    /// Renderis ///
    spausdintiPrekes(json.items);
    // DOM'as updaitina pries skaiciavimus
    setTimeout(() => {
      skaiciuotiVisus(json);
    }, 0);
  });
///////////////////////////////// itemai //////////////////////////////////////////////////

const spausdintiPrekes = items => {

  const itemsList = document.querySelector('.items-listas');

  ///////////////////////////////// Loop'as itemu //////////////////////////////////////////////////
  itemsList.innerHTML = '';
  items.forEach(item => {
    const template = document.querySelector('#buyer-template4');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.description').textContent = item.description;
    console.log(item.description);
    clone.querySelector('.quantity').textContent = item.quantity;
    clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);


    ///////////////////////////////// nuolaida //////////////////////////////////////////////////
    let discountText = '';
    let discountKiekis = 0;

    //// ar objektas?
    if (item.discount && typeof item.discount === 'object') {
      // jei fixed, rodyk ir skaiciuok
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} `;
        discountKiekis = item.discount.value;
        /// jei %, rodyk % ir skaiciuok
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    } else {
      /// jei nera nuolaidos tai 0
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
///////////////////////////////////// galutines ///////////////////////////////////////////////////////////

const skaiciuotiVisus = json => {
  // suma (quantity * price - discount)
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

  // Transportavimo išlaidos 
  document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

  // suma be PVM
  const isVIsoSuTransportavimas = isVIso + json.shippingPrice;
  document.querySelector('.sumOfAllWithoutPVM21').textContent = isVIsoSuTransportavimas.toFixed(2);
  console.log(isVIsoSuTransportavimas);

  // PVM
  const vatPercent = 21;
  document.querySelector('.PVM21').textContent = `${vatPercent}%`;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
  document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);
  console.log(vatPercent)
  console.log(vatAmount);

  // galutinė suma su PVM
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
  document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);
  console.log(totalWithVAT);
  console.log(json.items);

};



/*
================================================================================
Task_2 CRUD Implementation
================================================================================

Below is the code for the CRUD operations for VAT Invoices. 
Each section is commented to explain its purpose and logic.

================================================================================
HTML FILE (index.html)
================================================================================

<!--
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="app.js" defer></script>
  <link rel="stylesheet" href="style.css">
  <title>VAT Invoice CRUD</title>
</head>
<body>
  <div id="main"></div>
</body>
</html>
-->

================================================================================
JAVASCRIPT CODE1 (app.js)
================================================================================
*/

// Utility: Show a message to the user
function showMessage(msg, type = 'info') {
  // Remove old message
  const oldMsg = document.querySelector('.crud-message');
  if (oldMsg) oldMsg.remove();
  // Create new message
  const div = document.createElement('div');
  div.className = `crud-message ${type}`;
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
}

// Utility: Get all invoices from localStorage
function getInvoices() {
  return JSON.parse(localStorage.getItem('invoices') || '[]');
}

// Utility: Save all invoices to localStorage
function saveInvoices(invoices) {
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

// Utility: Find invoice by number
function findInvoice(number) {
  return getInvoices().find(inv => inv.number === number);
}

// Utility: Generate unique invoice number (if needed)
function generateInvoiceNumber() {
  return 'INV-' + Date.now();
}

// Render: Main list of invoices
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

  // Event: Create new invoice
  document.getElementById('create-invoice').onclick = () => renderCreateInvoice();

  // Event: View/Edit/Delete
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

// Render: Create new invoice (fetch from API)
function renderCreateInvoice() {
  const main = document.getElementById('main');
  main.innerHTML = `<h2>Create VAT Invoice</h2>
    <div id="invoice-form">Loading...</div>
    <div>
      <button id="save-invoice">Save</button>
      <button id="update-invoice">Update</button>
      <button id="cancel-invoice">Cancel</button>
    </div>
  `;

  // Fetch new invoice from API
  let currentInvoice = null;
  function fetchAndRender() {
    document.getElementById('invoice-form').textContent = 'Loading...';
    fetch('https://in3.dev/inv/')
      .then(res => res.json())
      .then(json => {
        currentInvoice = json;
        renderInvoiceView(json, 'invoice-form', false);
      });
  }
  fetchAndRender();

  // Save: Add to localStorage
  document.getElementById('save-invoice').onclick = () => {
    if (!currentInvoice) return;
    // Calculate totals before saving
    const totals = calculateTotals(currentInvoice);
    Object.assign(currentInvoice, totals);
    const invoices = getInvoices();
    invoices.push(currentInvoice);
    saveInvoices(invoices);
    showMessage('Invoice saved', 'success');
    renderInvoiceList();
  };

  // Update: Fetch new invoice from API
  document.getElementById('update-invoice').onclick = () => {
    fetchAndRender();
    showMessage('Fetched new invoice', 'info');
  };

  // Cancel: Go back to list
  document.getElementById('cancel-invoice').onclick = () => {
    renderInvoiceList();
  };
}

// Render: View invoice (read-only)
function renderViewInvoice(number) {
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  const main = document.getElementById('main');
  main.innerHTML = `<h2>View Invoice</h2>
    <div id="invoice-form"></div>
    <button id="back-list">Back to List</button>
  `;
  renderInvoiceView(invoice, 'invoice-form', false);
  document.getElementById('back-list').onclick = () => renderInvoiceList();
}

// Render: Edit invoice (only quantity and discount)
function renderEditInvoice(number) {
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  const main = document.getElementById('main');
  main.innerHTML = `<h2>Edit Invoice</h2>
    <form id="edit-invoice-form"></form>
    <button id="save-edit">Save</button>
    <button id="cancel-edit">Cancel</button>
  `;
  renderInvoiceView(invoice, 'edit-invoice-form', true);

  // Save edited invoice
  document.getElementById('save-edit').onclick = () => {
    // Get the edit form element
    const form = document.getElementById('edit-invoice-form');
    // Map over each item to read and update quantity and discount
    const items = invoice.items.map((item, idx) => {
      // Parse the quantity input as a float
      const quantity = parseFloat(form.querySelector(`[name="quantity-${idx}"]`).value);
      // Get the discount input value as a string and trim whitespace
      let discountInput = form.querySelector(`[name="discount-${idx}"]`).value.trim();
      let discount = null;

      // If discount input is empty, set discount to null (no discount)
      if (discountInput === '') {
        discount = null;
      }
      // If discount input ends with '%', treat as percentage discount
      else if (discountInput.endsWith('%')) {
        // Remove '%' and parse the number
        const percentValue = parseFloat(discountInput.slice(0, -1));
        // If valid number, set as percentage discount object
        if (!isNaN(percentValue)) {
          discount = { type: 'percentage', value: percentValue };
        } else {
          // Show error if not a valid number
          showMessage('Invalid discount percentage', 'error');
          return null;
        }
      }
      // Otherwise, treat as fixed discount
      else {
        const fixedValue = parseFloat(discountInput);
        // If valid number, set as fixed discount object
        if (!isNaN(fixedValue)) {
          discount = { type: 'fixed', value: fixedValue };
        } else {
          // Show error if not a valid number
          showMessage('Invalid discount value', 'error');
          return null;
        }
      }

      // Validate quantity (must be a non-negative number)
      if (isNaN(quantity) || quantity < 0) {
        showMessage('Invalid quantity', 'error');
        return null;
      }

      // Return the updated item with new quantity and discount
      return {
        ...item,
        quantity,
        discount
      };
    });

    // If any validation failed, stop processing
    if (items.includes(null)) return;

    // Update invoice items with edited values
    invoice.items = items;
    // Recalculate invoice totals based on new items
    const totals = calculateTotals(invoice);
    Object.assign(invoice, totals);

    // Save updated invoice list to localStorage
    let invoices = getInvoices();
    invoices = invoices.map(inv => inv.number === invoice.number ? invoice : inv);
    saveInvoices(invoices);
    showMessage('Invoice updated', 'success');
    // Stay on edit page with updated data
    renderEditInvoice(invoice.number);
  };

  // Cancel edit
  document.getElementById('cancel-edit').onclick = () => renderInvoiceList();
}

// Helper: Render invoice view (readonly or editable)
function renderInvoiceView(invoice, containerId, editable = false) {
  const container = document.getElementById(containerId);
  // Header info
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
  // Loop through each invoice item to render its row in the table
  invoice.items.forEach((item, idx) => {
    // Initialize discount display text and discount amount
    let discountText = '';
    let discountKiekis = 0;

    // If the item has a discount object, determine its type and value
    if (item.discount && typeof item.discount === 'object') {
      if (item.discount.type === 'fixed') {
        // If fixed discount, show value or 0 if undefined
        discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}`;
        discountKiekis = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
      } else if (item.discount.type === 'percentage') {
        // If percentage discount, show value with % or 0% if undefined
        discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}%`;
        discountKiekis = (item.quantity * item.price) * (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) / 100;
      }
    } else {
      // If no discount, show 0
      discountText = '0';
      discountKiekis = 0;
    }

    // Calculate the price with discount applied
    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;

    // Render the table row for this item
    html += `<tr>
      <td>${item.description}</td>
      <td>${editable 
        // If editable, show input for quantity, else show value
        ? `<input type="number" min="0" name="quantity-${idx}" value="${item.quantity}">` 
        : item.quantity}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${editable 
        // If editable, show input for discount, else show discount text
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

// Helper: Calculate invoice totals
function calculateTotals(json) {
  // Sum of items (quantity * price - discount)
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

  // Shipping
  const shipping = json.shippingPrice || 0;
  const isVIsoSuTransportavimas = isVIso + shipping;

  // VAT
  const vatPercent = 21;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;

  // Total with VAT
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;

  return {
    sumOfAllWithoutPVM21: isVIsoSuTransportavimas,
    vatAmount,
    totalPriceWithPVM21: totalWithVAT
  };
}

// On page load, show invoice list
window.onload = () => {
  // Create main container if not present
  if (!document.getElementById('main')) {
    const div = document.createElement('div');
    div.id = 'main';
    document.body.appendChild(div);
  }
  renderInvoiceList();
};

/*
================================================================================
END OF CRUD IMPLEMENTATION
================================================================================
*/

/*
================================================================================
Serious/Elegant & Dynamic CSS Style for Task_2 CRUD (style1.css)
================================================================================


================================================================================
Playful/Fun & Dynamic CSS Style for Task_2 CRUD (style1.css)
================================================================================



================================================================================
Serious/Elegant & Dynamic CSS Style for Task_2 CRUD (style2.css)
================================================================================


================================================================================
Playful/Fun & Dynamic CSS Style for Task_2 CRUD (style2.css)
================================================================================


*/

/* =========================
  style2.css (main.html)
  Serious/Elegant & Dynamic
  ========================= */

/* Root variables for light/dark mode */

/*
:root {
  --bg: #f6f7fa;
  --fg: #23272f;
  --primary: #2d7ff9;
  --secondary: #e5e9f2;
  --accent: #1e2532;
  --border: #d1d5db;
  --success: #2ecc40;
  --error: #e74c3c;
  --info: #3498db;
  --table-row: #f3f4f6;
  --table-row-alt: #e5e9f2;
  --shadow: 0 2px 8px rgba(30,37,50,0.08);
  --radius: 8px;
  --transition: 0.2s cubic-bezier(.4,0,.2,1);
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
  transition: background var(--transition), color var(--transition);
}

#main {
  max-width: 900px;
  margin: 40px auto;
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px 36px 36px 36px;
}

h2 {
  margin-top: 0;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--primary);
}

button {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  padding: 8px 20px;
  font-size: 1rem;
  margin: 0 6px 10px 0;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(30,37,50,0.04);
  transition: background var(--transition), color var(--transition), box-shadow var(--transition);
}
button:hover, button:focus {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 2px 8px rgba(30,37,50,0.10);
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 24px 0 16px 0;
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

th, td {
  padding: 12px 14px;
  text-align: left;
}

th {
  background: var(--secondary);
  color: var(--accent);
  font-weight: 600;
  border-bottom: 2px solid var(--border);
}

tr:nth-child(even) {
  background: var(--table-row-alt);
}
tr:nth-child(odd) {
  background: var(--table-row);
}

input[type="number"], input[type="text"] {
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 1rem;
  width: 80px;
  background: #f9fafb;
  color: var(--fg);
  transition: border var(--transition), background var(--transition);
}
input[type="number"]:focus, input[type="text"]:focus {
  border-color: var(--primary);
  background: #fff;
  outline: none;
}

.crud-message {
  position: fixed;
  top: 24px;
  right: 32px;
  min-width: 180px;
  padding: 12px 24px;
  border-radius: var(--radius);
  font-weight: 500;
  font-size: 1rem;
  box-shadow: var(--shadow);
  z-index: 1000;
  background: var(--info);
  color: #fff;
  opacity: 0.97;
  transition: opacity var(--transition);
}
.crud-message.success { background: var(--success); }
.crud-message.error { background: var(--error); }
.crud-message.info { background: var(--info); }

@media (max-width: 700px) {
  #main { padding: 16px 4vw; }
  table, th, td { font-size: 0.97rem; }
  th, td { padding: 8px 6px; }
}

/* Dark mode styles */
/*
body.dark-mode {
  --bg: #181c23;
  --fg: #e5e9f2;
  --primary: #4b8cff;
  --secondary: #23272f;
  --accent: #b3c6f7;
  --border: #23272f;
  --table-row: #23272f;
  --table-row-alt: #1e222a;
  background: var(--bg);
  color: var(--fg);
}
body.dark-mode #main {
  background: #23272f;
  box-shadow: 0 2px 12px rgba(30,37,50,0.25);
}
body.dark-mode table {
  background: #23272f;
}
body.dark-mode th {
  background: #181c23;
  color: var(--primary);
  border-bottom: 2px solid #23272f;
}
body.dark-mode input[type="number"], 
body.dark-mode input[type="text"] {
  background: #23272f;
  color: var(--fg);
  border-color: #23272f;
}
body.dark-mode .crud-message {
  color: #fff;
  box-shadow: 0 2px 12px rgba(30,37,50,0.25);
}

/* =========================
  style1.css (index.html)
  Playful/Fun & Dynamic
  ========================= */
/*
:root {
  --bg: #fffbe7;
  --fg: #3a2d1a;
  --primary: #ffb400;
  --secondary: #ffe7a0;
  --accent: #ff6f61;
  --border: #ffd36b;
  --success: #4dd599;
  --error: #ff6f61;
  --info: #4db6e2;
  --table-row: #fff6c1;
  --table-row-alt: #ffe7a0;
  --radius: 18px;
  --shadow: 0 4px 16px rgba(255,180,0,0.10);
  --transition: 0.18s cubic-bezier(.4,0,.2,1);
}

body {
  background: var(--bg);
  color: var(--fg);
  font-family: 'Comic Neue', 'Comic Sans MS', 'Segoe UI', Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
  transition: background var(--transition), color var(--transition);
}

#main {
  max-width: 900px;
  margin: 36px auto;
  background: #fffde7;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px 28px 32px 28px;
  border: 3px dashed var(--primary);
  position: relative;
  overflow: hidden;
}

h2 {
  margin-top: 0;
  font-family: 'Luckiest Guy', 'Comic Neue', cursive, sans-serif;
  font-size: 2.2rem;
  color: var(--primary);
  letter-spacing: 0.04em;
  text-shadow: 1px 2px 0 #ffe7a0, 0 2px 8px #ffd36b44;
}

button {
  background: linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 10px 28px;
  font-size: 1.1rem;
  margin: 0 8px 12px 0;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 8px #ffd36b55;
  transition: background var(--transition), color var(--transition), box-shadow var(--transition), transform var(--transition);
  outline: none;
}
button:hover, button:focus {
  background: linear-gradient(90deg, var(--accent) 60%, var(--primary) 100%);
  color: #fffbe7;
  transform: scale(1.07) rotate(-2deg);
  box-shadow: 0 4px 16px #ffb40033;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 22px 0 14px 0;
  background: #fffbe7;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 2px solid var(--primary);
}

th, td {
  padding: 13px 12px;
  text-align: left;
  font-size: 1.05rem;
}

th {
  background: var(--secondary);
  color: var(--accent);
  font-family: 'Luckiest Guy', 'Comic Neue', cursive, sans-serif;
  font-size: 1.1rem;
  border-bottom: 2px solid var(--border);
  letter-spacing: 0.03em;
}

tr:nth-child(even) {
  background: var(--table-row-alt);
}
tr:nth-child(odd) {
  background: var(--table-row);
}

input[type="number"], input[type="text"] {
  padding: 7px 12px;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  width: 80px;
  background: #fffbe7;
  color: var(--fg);
  font-family: inherit;
  transition: border var(--transition), background var(--transition), box-shadow var(--transition);
}
input[type="number"]:focus, input[type="text"]:focus {
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 2px 8px #ffd36b44;
  outline: none;
}

.crud-message {
  position: fixed;
  top: 24px;
  right: 32px;
  min-width: 180px;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Comic Neue', 'Comic Sans MS', cursive, sans-serif;
  box-shadow: 0 4px 16px #ffd36b55;
  z-index: 1000;
  background: var(--info);
  color: #fff;
  opacity: 0.97;
  animation: bounceIn 0.5s;
  transition: opacity var(--transition);
}
.crud-message.success { background: var(--success); }
.crud-message.error { background: var(--error); }
.crud-message.info { background: var(--info); }

@keyframes bounceIn {
  0% { transform: scale(0.7); opacity: 0.2; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}

@media (max-width: 700px) {
  #main { padding: 12px 2vw; }
  table, th, td { font-size: 0.99rem; }
  th, td { padding: 8px 6px; }
}

/* Fun doodle background for playful style */
/*
#main::before {
  content: '';
  position: absolute;
  top: -60px; left: -60px;
  width: 180px; height: 180px;
  background: radial-gradient(circle at 60% 40%, #ffe7a0 60%, transparent 100%);
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}
#main::after {
  content: '';
  position: absolute;
  bottom: -40px; right: -40px;
  width: 120px; height: 120px;
  background: radial-gradient(circle at 40% 60%, #ffb400 60%, transparent 100%);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

/* Dark mode styles */
/*
body.dark-mode {
  --bg: #2d1a3a;
  --fg: #ffe7a0;
  --primary: #ffb400;
  --secondary: #3a2d1a;
  --accent: #ff6f61;
  --border: #ffb400;
  --table-row: #3a2d1a;
  --table-row-alt: #2d1a3a;
  background: var(--bg);
  color: var(--fg);
}
body.dark-mode #main {
  background: #3a2d1a;
  border-color: #ffb400;
  box-shadow: 0 4px 24px #ffb40033;
}
body.dark-mode table {
  background: #3a2d1a;
  border-color: #ffb400;
}
body.dark-mode th {
  background: #2d1a3a;
  color: #ffb400;
  border-bottom: 2px solid #ffb400;
}
body.dark-mode input[type="number"], 
body.dark-mode input[type="text"] {
  background: #2d1a3a;
  color: var(--fg);
  border-color: #ffb400;
}
body.dark-mode .crud-message {
  color: #fffbe7;
  box-shadow: 0 4px 24px #ffb40033;
}
body.dark-mode #main::before {
  background: radial-gradient(circle at 60% 40%, #ffb400 60%, transparent 100%);
}
body.dark-mode #main::after {
  background: radial-gradient(circle at 40% 60%, #ff6f61 60%, transparent 100%);
} */