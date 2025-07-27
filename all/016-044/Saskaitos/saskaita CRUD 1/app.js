import { Main } from '../src/Main.js';
import { Create } from '../src/Create.js';
import { View } from '../src/View.js';
import { Update } from '../src/Update.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';

// index1.html:

// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <script src="app.js" defer></script>
//   <link rel="stylesheet" href="style.css">
//   <title>Main page</title>
// </head>

// <body>

// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <script src="app1.js" defer></script>
//   <link rel="stylesheet" href="style1.css">
//   <title>nd-04</title>
// </head>

// <body>

//   <div class="saskaita">
//     <h1><img src="/nd/saskaita/beaver-2.svg" alt="Bebras" class="beaver">PVM SĄSKAITA FAKTŪRA</h1>
//     <div class="saskaita-info">
//       <span>Sąskaitos Nr.: <span class="number"></span></span>
//       <span>Sąskaitos data: <span class="date"></span></span>
//       <span>Mokėjimo terminas: <span class="due_date"></span></span>
//     </div>
//     <div class="flexas1">
//       <div class="sectionas">
//         <div class="sectionas-title"><u>Pardavėjas:</u></div>
//         <div><b>Įmonė:</b> <span class="name"></span></div>
//         <div><b>Adresas:</b> <span class="address"></span></div>
//         <div><b>Įmonės kodas:</b> <span class="code"></span></div>
//         <div><b>PVM kodas:</b> <span class="vat"></span></div>
//         <div><b>Tel.:</b> <span class="phone"></span></div>
//         <div><b>E-mail:</b> <span class="email"></span></div>
//       </div>
//       <div class="sectionas">
//         <div class="sectionas-title"><u>Pirkėjas:</u></div>
//         <div><b>Įmonė:</b> <span class="name"></span></div>
//         <div><b>Adresas:</b> <span class="address"></span></div>
//         <div><b>Įmonės kodas:</b> <span class="code"></span></div>
//         <div><b>PVM kodas:</b> <span class="vat"></span></div>
//         <div><b>Tel.:</b> <span class="phone"></span></div>
//         <div><b>E-mail:</b> <span class="email"></span></div>
//       </div>
//     </div>
//     <table>
//       <thead>
//         <tr>
//           <th>Prekė</th>
//           <th>Kiekis</th>
//           <th>Kaina (be PVM) (€)</th>
//           <th>Nuolaida</th>
//           <th>Suma (be PVM) (€)</th>
//         </tr>
//       </thead>
//       <tbody class="items-listas"></tbody>
//     </table>
//     <table class="galutine">
//       <tr>
//         <td class="tekstas1">Transportavimo išlaidos (€):</td>
//         <td class="tekstas2 shippingPrice"></td>
//       </tr>
//       <tr>
//         <td class="tekstas1">Suma be PVM (€):</td>
//         <td class="tekstas2 sumOfAllWithoutPVM21"></td>
//       </tr>
//       <tr>
//         <td class="tekstas1">PVM (<span class="PVM21"></span>):</td>
//         <td class="tekstas2 vatAmount"></td>
//       </tr>
//       <tr>
//         <td class="tekstas1" style="font-size:1.15em;">Galutinė suma su PVM (€):</td>
//         <td class="tekstas2 totalPriceWithPVM21" style="font-size:1.2em;"></td>
//       </tr>
//     </table>
//   </div>

// </body>

// <ul>
//   <template id="buyer-template1">
//     <li class="buyer-data">
//       <span class="name"></span>
//       <span class="address"></span>
//       <span class="code"></span>
//       <span class="vat"></span>
//       <span class="phone"></span>
//       <span class="email"></span>
//     </li>
//   </template>
//   <template id="buyer-template2">
//     <li class="seller-data">
//       <span class="name"></span>
//       <span class="address"></span>
//       <span class="code"></span>
//       <span class="vat"></span>
//       <span class="phone"></span>
//       <span class="email"></span>
//     </li>
//   </template>
//   <template id="buyer-template3">
//     <li class="saskaita-info-data">
//       <span class="number"></span>
//       <span class="date"></span>
//       <span class="due_date"></span>
//     </li>
//   </template>
//   <template id="buyer-template4">
//     <tr>
//       <td class="description"></td>
//       <td class="quantity"></td>
//       <td class="priceWithoutDiscount"></td>
//       <td class="discount"></td>
//       <td class="priceWithDiscount"></td>
//     </tr>
//   </template>
//   <template id="buyer-template5">
//     <li class="shipping-data">
//       <span class="shippingPrice"></span>
//     </li>
//   </template>
//   <template id="buyer-template6">
//     <li class="galutine-data">
//       <span class="sumOfAllWithoutPVM21"></span>
//       <span class="PVM21"></span>
//       <span class="totalPriceWithPVM21"></span>
//     </li>
//   </template>
// </ul>
// </div>

// </html>
// </body>


// </html>

/*


/*
Task_2 CRUD_lithuanian:

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

Task_2 CRUD_english:

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

/*
Example of Task_1 CRUD, without structure:


================================================================================
Task_1 CRUD Implementation
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
*/


// Create files for Task_2 CRUD: .html, .css, .js, each .js file should have one class (example for structure and logic:
// - public folder should have (can be changed if Copilot logic differs): app.js, create.html. read.html. view.html, style.css;
// - src folder maybe should have (can be changed if Copilot logic differs):  Main.js, localStorage.js for storing invoices, Update.js, Create.js, Delete.js, app.js, style.css).

// Write in comments, what each created file should have inside.
// Use index1.html as example for how to View, or when you import New invoice from JSON API, graphic should look like.

/*
==========================
Folder and File Structure
==========================

public/
    - index.html         // Main entry, shows invoice list (Read)
    - create.html        // Page to create new invoice (Create)
    - view.html          // Page to view invoice (View)
    - edit.html          // Page to edit invoice (Update)
    - style.css          // Main styles for all pages
    - app.js             // Entry point, handles routing/navigation

src/
    - Main.js            // Class for rendering invoice list and navigation
    - LocalStorage.js    // Class for all localStorage CRUD operations
    - Create.js          // Class for creating new invoice (fetch from API, render, save)
    - View.js            // Class for viewing invoice (read-only)
    - Update.js          // Class for editing invoice (quantities, discounts)
    - Delete.js          // Class for deleting invoice (confirmation, remove)
    - style.css          // (optional) Component-specific styles

==========================
File Contents (summaries)
==========================

public/index.html
-----------------
<!--
- Loads app.js
- Has a <div id="app"></div> for rendering
- Looks like invoice list table (see Task_1 example)
-->

public/create.html
------------------
<!--
- Loads app.js
- <div id="app"></div>
- Used for creating new invoice (fetch from API, show, save/cancel/update)
-->

public/view.html
----------------
<!--
- Loads app.js
- <div id="app"></div>
- Used for viewing invoice (read-only)
-->

public/edit.html
----------------
<!--
- Loads app.js
- <div id="app"></div>
- Used for editing invoice (quantities, discounts)
-->

public/style.css
----------------
/* 
- Styles for invoice table, forms, buttons, messages, etc.
- Use index1.html as visual reference
*/

public/app.js
-------------
/*
- Handles SPA-like navigation between pages (list, create, view, edit)
- Imports Main, Create, View, Update classes from src/
- On load, renders Main (invoice list)
- Handles navigation events (buttons/links)
*/

src/LocalStorage.js
-------------------
/*
- Class LocalStorage
- Methods: getInvoices(), saveInvoices(), addInvoice(), updateInvoice(), deleteInvoice(), findInvoiceByNumber()
*/

src/Main.js
-----------
/*
- Class Main
- Renders invoice list (number, date, total)
- Handles "Create", "View", "Edit", "Delete" buttons
- Calls navigation functions from app.js
*/

src/Create.js
-------------
/*
- Class Create
- Fetches new invoice from API
- Renders invoice (readonly)
- Handles "Save", "Update", "Cancel" buttons
- On Save: stores invoice in localStorage via LocalStorage.js
*/

src/View.js
-----------
/*
- Class View
- Renders invoice in read-only mode
- "Back" button to return to list
*/

src/Update.js
-------------
/*
- Class Update
- Renders invoice with editable quantity/discount fields
- Handles "Save", "Cancel"
- Validates input, updates invoice in localStorage
*/

src/Delete.js
-------------
/*
- Class Delete (optional, or just a helper)
- Handles confirmation and removal of invoice
*/

src/style.css
-------------
/*
- (Optional) Component-specific styles
*/

==========================
Example Code for Each File
==========================

public/index.html
-----------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VAT Invoice List</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>

public/create.html
------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Invoice</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>

public/view.html
----------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>View Invoice</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>

public/edit.html
----------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Invoice</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>

public/style.css
----------------
/* 
- Use styles from index1.html as reference
- Table, form, button, message styles
*/

public/app.js
-------------

function route() {
    const hash = window.location.hash;
    const app = document.getElementById('app');
    if (hash.startsWith('#create')) {
        new Create(app);
    } else if (hash.startsWith('#view/')) {
        const number = hash.split('/')[1];
        new View(app, number);
    } else if (hash.startsWith('#edit/')) {
        const number = hash.split('/')[1];
        new Update(app, number);
    } else {
        new Main(app);
    }
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

src/LocalStorage.js
-------------------
export class LocalStorage {
    static getInvoices() {
        return JSON.parse(localStorage.getItem('invoices') || '[]');
    }
    static saveInvoices(invoices) {
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }
    static addInvoice(inv) {
        const invoices = this.getInvoices();
        invoices.push(inv);
        this.saveInvoices(invoices);
    }
    static updateInvoice(number, data) {
        let invoices = this.getInvoices();
        invoices = invoices.map(inv => inv.number === number ? data : inv);
        this.saveInvoices(invoices);
    }
    static deleteInvoice(number) {
        let invoices = this.getInvoices();
        invoices = invoices.filter(inv => inv.number !== number);
        this.saveInvoices(invoices);
    }
    static findInvoiceByNumber(number) {
        return this.getInvoices().find(inv => inv.number === number);
    }
}

src/Main.js
-----------

export class Main {
    constructor(container) {
        this.container = container;
        this.render();
    }
    render() {
        const invoices = LocalStorage.getInvoices();
        this.container.innerHTML = `
            <h1>VAT Invoices</h1>
            <button id="create-btn">Create New Invoice</button>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Date</th>
                        <th>Total (€)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoices.map(inv => `
                        <tr>
                            <td>${inv.number}</td>
                            <td>${inv.date}</td>
                            <td>${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</td>
                            <td>
                                <button class="view-btn" data-id="${inv.number}">View</button>
                                <button class="edit-btn" data-id="${inv.number}">Edit</button>
                                <button class="delete-btn" data-id="${inv.number}">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div id="message"></div>
        `;
        this.container.querySelector('#create-btn').onclick = () => window.location.hash = '#create';
        this.container.querySelectorAll('.view-btn').forEach(btn => {
            btn.onclick = () => window.location.hash = `#view/${btn.dataset.id}`;
        });
        this.container.querySelectorAll('.edit-btn').forEach(btn => {
            btn.onclick = () => window.location.hash = `#edit/${btn.dataset.id}`;
        });
        this.container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.onclick = () => {
                if (confirm('Delete this invoice?')) {
                    LocalStorage.deleteInvoice(btn.dataset.id);
                    this.render();
                    this.showMessage('Invoice deleted', 'success');
                }
            };
        });
    }
    showMessage(msg, type = 'info') {
        const div = this.container.querySelector('#message');
        div.textContent = msg;
        div.className = type;
        setTimeout(() => div.textContent = '', 2000);
    }
}

src/Create.js
-------------

export class Create {
    constructor(container) {
        this.container = container;
        this.invoice = null;
        this.render();
        this.fetchInvoice();
    }
    render() {
        this.container.innerHTML = `
            <h1>Create Invoice</h1>
            <div id="invoice-view">Loading...</div>
            <div>
                <button id="save-btn">Save</button>
                <button id="update-btn">Update</button>
                <button id="cancel-btn">Cancel</button>
            </div>
            <div id="message"></div>
        `;
        this.container.querySelector('#save-btn').onclick = () => this.save();
        this.container.querySelector('#update-btn').onclick = () => this.fetchInvoice();
        this.container.querySelector('#cancel-btn').onclick = () => window.location.hash = '';
    }
    fetchInvoice() {
        this.container.querySelector('#invoice-view').textContent = 'Loading...';
        fetch('https://in3.dev/inv/')
            .then(res => res.json())
            .then(json => {
                this.invoice = json;
                this.renderInvoice(json);
            });
    }
    renderInvoice(inv) {
        this.container.querySelector('#invoice-view').innerHTML = `
            <div><b>Number:</b> ${inv.number}</div>
            <div><b>Date:</b> ${inv.date}</div>
            <div><b>Due Date:</b> ${inv.due_date}</div>
            <div><b>Seller:</b> ${inv.company.seller.name}, ${inv.company.seller.address}</div>
            <div><b>Buyer:</b> ${inv.company.buyer.name}, ${inv.company.buyer.address}</div>
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
                    ${inv.items.map(item => `
                        <tr>
                            <td>${item.description}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${item.discount ? (item.discount.type === 'percentage' ? '-' + item.discount.value + '%' : '-' + item.discount.value) : '0'}</td>
                            <td>${(item.quantity * item.price - (item.discount ? (item.discount.type === 'percentage' ? (item.quantity * item.price) * item.discount.value / 100 : item.discount.value) : 0)).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div><b>Shipping (€):</b> ${inv.shippingPrice ? inv.shippingPrice.toFixed(2) : '0.00'}</div>
            <div><b>Sum without VAT (€):</b> ${(inv.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
            <div><b>VAT (21%):</b> ${(inv.vatAmount || 0).toFixed(2)}</div>
            <div><b>Total with VAT (€):</b> ${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</div>
        `;
    }
    save() {
        if (!this.invoice) return;
        // Calculate totals before saving
        const totals = this.calculateTotals(this.invoice);
        Object.assign(this.invoice, totals);
        LocalStorage.addInvoice(this.invoice);
        this.showMessage('Invoice saved', 'success');
        setTimeout(() => window.location.hash = '', 1000);
    }
    calculateTotals(json) {
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
    showMessage(msg, type = 'info') {
        const div = this.container.querySelector('#message');
        div.textContent = msg;
        div.className = type;
        setTimeout(() => div.textContent = '', 2000);
    }
}

src/View.js
-----------

export class View {
    constructor(container, number) {
        this.container = container;
        this.invoice = LocalStorage.findInvoiceByNumber(number);
        if (!this.invoice) {
            this.container.innerHTML = '<div>Invoice not found</div>';
            return;
        }
        this.render();
    }
    render() {
        const inv = this.invoice;
        this.container.innerHTML = `
            <h1>View Invoice</h1>
            <div><b>Number:</b> ${inv.number}</div>
            <div><b>Date:</b> ${inv.date}</div>
            <div><b>Due Date:</b> ${inv.due_date}</div>
            <div><b>Seller:</b> ${inv.company.seller.name}, ${inv.company.seller.address}</div>
            <div><b>Buyer:</b> ${inv.company.buyer.name}, ${inv.company.buyer.address}</div>
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
                    ${inv.items.map(item => `
                        <tr>
                            <td>${item.description}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${item.discount ? (item.discount.type === 'percentage' ? '-' + item.discount.value + '%' : '-' + item.discount.value) : '0'}</td>
                            <td>${(item.quantity * item.price - (item.discount ? (item.discount.type === 'percentage' ? (item.quantity * item.price) * item.discount.value / 100 : item.discount.value) : 0)).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div><b>Shipping (€):</b> ${inv.shippingPrice ? inv.shippingPrice.toFixed(2) : '0.00'}</div>
            <div><b>Sum without VAT (€):</b> ${(inv.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
            <div><b>VAT (21%):</b> ${(inv.vatAmount || 0).toFixed(2)}</div>
            <div><b>Total with VAT (€):</b> ${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</div>
            <button id="back-btn">Back</button>
        `;
        this.container.querySelector('#back-btn').onclick = () => window.location.hash = '';
    }
}

src/Update.js
-------------

export class Update {
    constructor(container, number) {
        this.container = container;
        this.invoice = LocalStorage.findInvoiceByNumber(number);
        if (!this.invoice) {
            this.container.innerHTML = '<div>Invoice not found</div>';
            return;
        }
        this.render();
    }
    render() {
        const inv = this.invoice;
        this.container.innerHTML = `
            <h1>Edit Invoice</h1>
            <form id="edit-form">
                <div><b>Number:</b> ${inv.number}</div>
                <div><b>Date:</b> ${inv.date}</div>
                <div><b>Due Date:</b> ${inv.due_date}</div>
                <div><b>Seller:</b> ${inv.company.seller.name}, ${inv.company.seller.address}</div>
                <div><b>Buyer:</b> ${inv.company.buyer.name}, ${inv.company.buyer.address}</div>
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
                        ${inv.items.map((item, idx) => `
                            <tr>
                                <td>${item.description}</td>
                                <td><input type="number" min="0" name="quantity-${idx}" value="${item.quantity}"></td>
                                <td>${item.price.toFixed(2)}</td>
                                <td><input type="text" name="discount-${idx}" value="${
                                    item.discount 
                                        ? (item.discount.type === 'percentage' 
                                                ? item.discount.value + '%' 
                                                : item.discount.value)
                                        : ''
                                }" placeholder="e.g. 10 or 5%"></td>
                                <td>${(item.quantity * item.price - (item.discount ? (item.discount.type === 'percentage' ? (item.quantity * item.price) * item.discount.value / 100 : item.discount.value) : 0)).toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <button type="submit">Save</button>
                <button type="button" id="cancel-btn">Cancel</button>
            </form>
            <div id="message"></div>
        `;
        this.container.querySelector('#cancel-btn').onclick = () => window.location.hash = '';
        this.container.querySelector('#edit-form').onsubmit = e => {
            e.preventDefault();
            const form = e.target;
            const items = inv.items.map((item, idx) => {
                const quantity = parseFloat(form[`quantity-${idx}`].value);
                let discountInput = form[`discount-${idx}`].value.trim();
                let discount = null;
                if (discountInput === '') {
                    discount = null;
                } else if (discountInput.endsWith('%')) {
                    const percentValue = parseFloat(discountInput.slice(0, -1));
                    if (!isNaN(percentValue)) {
                        discount = { type: 'percentage', value: percentValue };
                    } else {
                        this.showMessage('Invalid discount percentage', 'error');
                        return null;
                    }
                } else {
                    const fixedValue = parseFloat(discountInput);
                    if (!isNaN(fixedValue)) {
                        discount = { type: 'fixed', value: fixedValue };
                    } else {
                        this.showMessage('Invalid discount value', 'error');
                        return null;
                    }
                }
                if (isNaN(quantity) || quantity < 0) {
                    this.showMessage('Invalid quantity', 'error');
                    return null;
                }
                return { ...item, quantity, discount };
            });
            if (items.includes(null)) return;
            inv.items = items;
            const totals = this.calculateTotals(inv);
            Object.assign(inv, totals);
            LocalStorage.updateInvoice(inv.number, inv);
            this.showMessage('Invoice updated', 'success');
            setTimeout(() => window.location.hash = `#edit/${inv.number}`, 1000);
        };
    }
    calculateTotals(json) {
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
    showMessage(msg, type = 'info') {
        const div = this.container.querySelector('#message');
        div.textContent = msg;
        div.className = type;
        setTimeout(() => div.textContent = '', 2000);
    }
}

src/Delete.js
-------------
/*
- Optional: Can be handled inline in Main.js
- If needed, class Delete with static method to confirm and delete invoice
*/

src/style.css
-------------
/* 
- (Optional) Component-specific styles
*/

==========================
How to Use
==========================
- Open public/index.html in browser.
- Navigation is handled by hash (#create, #view/NUMBER, #edit/NUMBER).
- All logic is in JS classes, each in its own file.
- Use index1.html as a visual reference for invoice rendering.

==========================
End of File List
==========================
*/


/*
==========================
public/index.html
==========================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VAT Invoice List</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>

==========================
public/create.html
==========================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Create Invoice</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>

==========================
public/view.html
==========================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>View Invoice</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>

==========================
public/edit.html
==========================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Edit Invoice</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>

==========================
public/style.css
==========================
/* General styles */
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f7f7fa;
  margin: 0;
  padding: 0;
  color: #222;
}

#app {
  max-width: 900px;
  margin: 40px auto 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 36px 36px 36px;
  min-height: 400px;
}

h1, h2 {
  margin-top: 0;
  color: #2d3a4a;
  letter-spacing: 1px;
}

button, input[type="submit"] {
  background: #2d7ff9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 22px;
  font-size: 1em;
  margin: 4px 6px 4px 0;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover, input[type="submit"]:hover {
  background: #1a5fd0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 18px 0 24px 0;
  background: #f9fbfd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
}

th, td {
  padding: 10px 12px;
  text-align: left;
}

th {
  background: #eaf1fb;
  color: #2d3a4a;
  font-weight: 600;
  border-bottom: 2px solid #d3e0f0;
}

tr:nth-child(even) {
  background: #f4f8fc;
}

tr:hover {
  background: #eaf1fb;
}

input[type="number"], input[type="text"] {
  padding: 6px 8px;
  border: 1px solid #bfc9d8;
  border-radius: 4px;
  font-size: 1em;
  width: 80px;
  background: #fff;
}

input[type="number"]:focus, input[type="text"]:focus {
  outline: 2px solid #2d7ff9;
  border-color: #2d7ff9;
}

form {
  margin: 0;
}

#message, .crud-message {
  margin: 18px 0 0 0;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 1em;
  background: #eaf1fb;
  color: #2d7ff9;
  border: 1px solid #bfc9d8;
  min-height: 24px;
  transition: opacity 0.2s;
}
.crud-message.success, #message.success { background: #e6fbe6; color: #1e7e34; border-color: #b2e2b2; }
.crud-message.error, #message.error { background: #fdeaea; color: #c82333; border-color: #f5b7b7; }
.crud-message.info, #message.info { background: #eaf1fb; color: #2d7ff9; border-color: #bfc9d8; }

.saskaita {
  margin: 0 auto;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 24px 30px;
}

.saskaita h1 {
  font-size: 1.6em;
  display: flex;
  align-items: center;
  gap: 12px;
}

.saskaita-info {
  display: flex;
  gap: 32px;
  margin: 18px 0 18px 0;
  font-size: 1.08em;
}

.flexas1 {
  display: flex;
  gap: 40px;
  margin-bottom: 18px;
}

.sectionas {
  flex: 1;
  background: #f4f8fc;
  border-radius: 7px;
  padding: 12px 18px;
  margin-bottom: 8px;
}

.sectionas-title {
  font-weight: 600;
  margin-bottom: 6px;
  color: #2d7ff9;
}

.galutine {
  margin-top: 18px;
  width: 100%;
  background: #f9fbfd;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
}

.galutine td {
  padding: 8px 12px;
  font-size: 1.08em;
}

.tekstas1 {
  color: #2d3a4a;
  font-weight: 500;
}

.tekstas2 {
  text-align: right;
  font-weight: 600;
}

@media (max-width: 700px) {
  #app, .saskaita {
    padding: 12px 4vw;
  }
  .flexas1 {
    flex-direction: column;
    gap: 12px;
  }
  .saskaita-info {
    flex-direction: column;
    gap: 8px;
  }
  table, .galutine {
    font-size: 0.97em;
  }
}

.beaver {
  width: 38px;
  height: 38px;
  vertical-align: middle;
  margin-right: 8px;
}


