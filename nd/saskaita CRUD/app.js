// HTML:
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

Task_1 CRUD.

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
Elegant & Dynamic CSS for Task_1 CRUD (style.css)
================================================================================
*/

// .css for CRUD
// body {
//   font-family: 'Segoe UI', Arial, sans-serif;
//   background: #f7f9fb;
//   margin: 0;
//   padding: 0;
//   color: #222;
// }

// #main {
//   max-width: 900px;
//   margin: 40px auto 0 auto;
//   background: #fff;
//   border-radius: 12px;
//   box-shadow: 0 6px 32px rgba(0,0,0,0.07);
//   padding: 32px 36px 36px 36px;
//   min-height: 400px;
// }

// h2 {
//   margin-top: 0;
//   font-weight: 600;
//   color: #2d5be3;
//   letter-spacing: 1px;
// }

// button, input[type="button"] {
//   background: linear-gradient(90deg, #2d5be3 60%, #4e8cff 100%);
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   padding: 8px 20px;
//   font-size: 1em;
//   margin: 4px 6px 4px 0;
//   cursor: pointer;
//   transition: background 0.2s, box-shadow 0.2s;
//   box-shadow: 0 2px 8px rgba(45,91,227,0.08);
// }
// button:hover, input[type="button"]:hover {
//   background: linear-gradient(90deg, #1a3c8b 60%, #2d5be3 100%);
// }

// table {
//   width: 100%;
//   border-collapse: collapse;
//   margin: 18px 0 24px 0;
//   background: #f9fbff;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 1px 6px rgba(45,91,227,0.04);
// }

// th, td {
//   padding: 12px 10px;
//   text-align: left;
// }

// th {
//   background: #eaf1ff;
//   color: #2d5be3;
//   font-weight: 600;
//   border-bottom: 2px solid #d0e1ff;
// }

// tr:nth-child(even) {
//   background: #f4f8ff;
// }

// tr:hover {
//   background: #e6f0ff;
//   transition: background 0.2s;
// }

// input[type="number"], input[type="text"] {
//   padding: 6px 8px;
//   border: 1px solid #bcd0ee;
//   border-radius: 4px;
//   font-size: 1em;
//   width: 80px;
//   background: #f7faff;
//   transition: border 0.2s;
// }
// input[type="number"]:focus, input[type="text"]:focus {
//   border: 1.5px solid #2d5be3;
//   outline: none;
//   background: #fff;
// }

// .crud-message {
//   position: fixed;
//   top: 24px;
//   right: 32px;
//   z-index: 9999;
//   padding: 14px 28px;
//   border-radius: 8px;
//   font-size: 1.1em;
//   font-weight: 500;
//   box-shadow: 0 4px 18px rgba(45,91,227,0.13);
//   background: #eaf1ff;
//   color: #2d5be3;
//   opacity: 0.97;
//   animation: fadeIn 0.3s;
// }
// .crud-message.success {
//   background: #e6fbe7;
//   color: #1a8b2d;
//   border-left: 6px solid #1a8b2d;
// }
// .crud-message.error {
//   background: #ffeaea;
//   color: #d32f2f;
//   border-left: 6px solid #d32f2f;
// }
// .crud-message.info {
//   background: #eaf1ff;
//   color: #2d5be3;
//   border-left: 6px solid #2d5be3;
// }
// @keyframes fadeIn {
//   from { opacity: 0; right: 0; }
//   to { opacity: 0.97; right: 32px; }
// }

// div > b {
//   color: #2d5be3;
// }

// #invoice-form, #edit-invoice-form {
//   margin-bottom: 18px;
// }

// @media (max-width: 700px) {
//   #main {
//     padding: 12px 4vw;
//   }
//   table, th, td {
//     font-size: 0.97em;
//   }
//   button {
//     padding: 7px 12px;
//     font-size: 0.97em;
//   }
// }

/*
================================================================================
main.html
================================================================================

This file provides the main UI for the VAT Invoice CRUD app.
It includes a "Create VAT Invoice" button and a list of all invoices.
When "Create VAT Invoice" is pressed, it shows the invoice creation view (like index.html).
When "View" is pressed in the invoice list, it shows the invoice in read-only mode.

================================================================================
*/

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>VAT Invoice Main</title>
//   <link rel="stylesheet" href="style.css">
//   <script defer>
//     // Utility functions (same as in app.js)
//     function getInvoices() {
//       return JSON.parse(localStorage.getItem('invoices') || '[]');
//     }
//     function findInvoice(number) {
//       return getInvoices().find(inv => inv.number === number);
//     }
//     function showMessage(msg, type = 'info') {
//       const oldMsg = document.querySelector('.crud-message');
//       if (oldMsg) oldMsg.remove();
//       const div = document.createElement('div');
//       div.className = `crud-message ${type}`;
//       div.textContent = msg;
//       document.body.appendChild(div);
//       setTimeout(() => div.remove(), 2500);
//     }
//     function calculateTotals(json) {
//       const isVIso = json.items.reduce((sum, item) => {
//         let discountKiekis = 0;
//         if (
//           item.discount &&
//           typeof item.discount === 'object' &&
//           !Array.isArray(item.discount) &&
//           item.discount.type &&
//           item.discount.value !== undefined
//         ) {
//           if (item.discount.type === 'fixed') {
//             discountKiekis = item.discount.value;
//           } else if (item.discount.type === 'percentage') {
//             discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
//           }
//         }
//         return sum + ((item.quantity * item.price) - discountKiekis);
//       }, 0);
//       const shipping = json.shippingPrice || 0;
//       const isVIsoSuTransportavimas = isVIso + shipping;
//       const vatPercent = 21;
//       const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
//       const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
//       return {
//         sumOfAllWithoutPVM21: isVIsoSuTransportavimas,
//         vatAmount,
//         totalPriceWithPVM21: totalWithVAT
//       };
//     }
//     function renderInvoiceView(invoice, containerId, editable = false) {
//       const container = document.getElementById(containerId);
//       let html = `
//         <div><b>Number:</b> ${invoice.number}</div>
//         <div><b>Date:</b> ${invoice.date}</div>
//         <div><b>Due Date:</b> ${invoice.due_date}</div>
//         <div><b>Seller:</b> ${invoice.company.seller.name}, ${invoice.company.seller.address}</div>
//         <div><b>Buyer:</b> ${invoice.company.buyer.name}, ${invoice.company.buyer.address}</div>
//         <table>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Price (€)</th>
//               <th>Discount</th>
//               <th>Total (€)</th>
//             </tr>
//           </thead>
//           <tbody>
//       `;
//       invoice.items.forEach((item, idx) => {
//         let discountText = '';
//         let discountKiekis = 0;
//         if (item.discount && typeof item.discount === 'object') {
//           if (item.discount.type === 'fixed') {
//             discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}`;
//             discountKiekis = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
//           } else if (item.discount.type === 'percentage') {
//             discountText = `-${typeof item.discount.value !== 'undefined' ? item.discount.value : 0}%`;
//             discountKiekis = (item.quantity * item.price) * (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) / 100;
//           }
//         } else {
//           discountText = '0';
//           discountKiekis = 0;
//         }
//         const priceWithDiscount = (item.quantity * item.price) - discountKiekis;
//         html += `<tr>
//           <td>${item.description}</td>
//           <td>${item.quantity}</td>
//           <td>${item.price.toFixed(2)}</td>
//           <td>${discountText}</td>
//           <td>${priceWithDiscount.toFixed(2)}</td>
//         </tr>`;
//       });
//       html += `</tbody></table>
//         <div><b>Shipping (€):</b> ${invoice.shippingPrice ? invoice.shippingPrice.toFixed(2) : '0.00'}</div>
//         <div><b>Sum without VAT (€):</b> ${(invoice.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
//         <div><b>VAT (21%):</b> ${(invoice.vatAmount || 0).toFixed(2)}</div>
//         <div><b>Total with VAT (€):</b> ${(invoice.totalPriceWithPVM21 || 0).toFixed(2)}</div>
//       `;
//       container.innerHTML = html;
//     }

//     // Main rendering functions
//     function renderMainList() {
//       const main = document.getElementById('main');
//       main.innerHTML = `<h2>VAT Invoices</h2>
//         <button id="create-invoice">Create VAT Invoice</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Number</th>
//               <th>Date</th>
//               <th>Final Amount (€)</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody id="invoice-list"></tbody>
//         </table>
//       `;
//       const invoices = getInvoices();
//       const tbody = document.getElementById('invoice-list');
//       invoices.forEach(inv => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//           <td>${inv.number}</td>
//           <td>${inv.date}</td>
//           <td>${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</td>
//           <td>
//             <button class="view-invoice" data-id="${inv.number}">View</button>
//           </td>
//         `;
//         tbody.appendChild(tr);
//       });
//       document.getElementById('create-invoice').onclick = () => renderCreateInvoice();
//       tbody.onclick = e => {
//         if (e.target.classList.contains('view-invoice')) {
//           renderViewInvoice(e.target.dataset.id);
//         }
//       };
//     }

//     function renderCreateInvoice() {
//       const main = document.getElementById('main');
//       main.innerHTML = `<h2>Create VAT Invoice</h2>
//         <div id="invoice-form">Loading...</div>
//         <div>
//           <button id="back-list">Back to List</button>
//         </div>
//       `;
//       fetch('https://in3.dev/inv/')
//         .then(res => res.json())
//         .then(json => {
//           const totals = calculateTotals(json);
//           Object.assign(json, totals);
//           renderInvoiceView(json, 'invoice-form', false);
//         });
//       document.getElementById('back-list').onclick = () => renderMainList();
//     }

//     function renderViewInvoice(number) {
//       const invoice = findInvoice(number);
//       if (!invoice) return showMessage('Invoice not found', 'error');
//       const main = document.getElementById('main');
//       main.innerHTML = `<h2>View Invoice</h2>
//         <div id="invoice-form"></div>
//         <button id="back-list">Back to List</button>
//       `;
//       renderInvoiceView(invoice, 'invoice-form', false);
//       document.getElementById('back-list').onclick = () => renderMainList();
//     }

//     window.onload = () => {
//       if (!document.getElementById('main')) {
//         const div = document.createElement('div');
//         div.id = 'main';
//         document.body.appendChild(div);
//       }
//       renderMainList();
//     };
//   </script>
// </head>
// <body>
//   <div id="main"></div>
// </body>
// </html>
