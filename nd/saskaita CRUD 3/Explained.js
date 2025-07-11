// Fetch invoice data from the API when the page loads
fetch('https://in3.dev/inv/')
  .then(response => response.json()) // Parse the response as JSON
  .then(json => {
    // Log the fetched invoice data for debugging
    console.log(json);

    // Set up the dark mode toggle button
    document.getElementById('toggle-dark-mode').onclick = function() {
      // Toggle the 'dark-mode' class on the body element
      document.body.classList.toggle('dark-mode');
    };

    // Extract invoice number, date, and due date from the JSON
    const saskaitosNumeris = json.number;
    const saskaitosData = json.date;
    const saskaitosApmokejimoData = json.due_date;
    // Log invoice number and date for debugging
    console.log(saskaitosNumeris);
    console.log(saskaitosData);

    // Display invoice number in the DOM if the element exists
    const numberEl = document.querySelector('.number');
    if (numberEl) numberEl.textContent = saskaitosNumeris;
    // Display invoice date in the DOM if the element exists
    const dateEl = document.querySelector('.date');
    if (dateEl) dateEl.textContent = saskaitosData;
    // Display due date in the DOM if the element exists
    const dueDateEl = document.querySelector('.due_date');
    if (dueDateEl) dueDateEl.textContent = saskaitosApmokejimoData;
    // Log due date for debugging
    console.log(saskaitosApmokejimoData);

    // Get seller information from the JSON
    const pardavejas = json.company.seller;
    // Find the seller section in the DOM
    const pardavejoSekcija = document.querySelectorAll('.sectionas')[0];
    if (pardavejoSekcija) {
      // Fill in seller details in the DOM
      pardavejoSekcija.querySelector('.name').textContent = pardavejas.name;
      pardavejoSekcija.querySelector('.address').textContent = pardavejas.address;
      pardavejoSekcija.querySelector('.code').textContent = pardavejas.code;
      pardavejoSekcija.querySelector('.vat').textContent = pardavejas.vat;
      pardavejoSekcija.querySelector('.phone').textContent = pardavejas.phone;
      pardavejoSekcija.querySelector('.email').textContent = pardavejas.email;
    } else {
      // Warn if the seller section is missing
      console.warn('Pardavejo sekcija (.sectionas[0]) nerasta DOMe');
    }
    // Log seller info for debugging
    console.log(pardavejas);

    // Get buyer information from the JSON
    const pirkejas = json.company.buyer;
    // Find the buyer section in the DOM
    const pirkejoSekcija = document.querySelectorAll('.sectionas')[1];
    if (pirkejoSekcija) {
      // Fill in buyer details in the DOM
      pirkejoSekcija.querySelector('.name').textContent = pirkejas.name;
      pirkejoSekcija.querySelector('.address').textContent = pirkejas.address;
      pirkejoSekcija.querySelector('.code').textContent = pirkejas.code;
      pirkejoSekcija.querySelector('.vat').textContent = pirkejas.vat;
      pirkejoSekcija.querySelector('.phone').textContent = pirkejas.phone;
      pirkejoSekcija.querySelector('.email').textContent = pirkejas.email;
    } else {
      // Warn if the buyer section is missing
      console.warn('Pirkejo sekcija (.sectionas[1]) nerasta DOMe');
    }
    // Log buyer info for debugging
    console.log(pirkejas);

    // Render the list of items in the invoice
    spausdintiPrekes(json.items);
    // After rendering, calculate totals (using setTimeout to ensure DOM is updated)
    setTimeout(() => {
      skaiciuotiVisus(json);
    }, 0);
  });

// Function to render invoice items in the DOM
const spausdintiPrekes = items => {
  // Find the container for the item list
  const itemsList = document.querySelector('.items-listas');
  // Clear any previous items
  itemsList.innerHTML = '';
  // Loop through each item in the invoice
  items.forEach(item => {
    // Find the template for displaying an item
    const template = document.querySelector('#buyer-template4');
    // Clone the template content
    const clone = template.content.cloneNode(true);
    // Fill in item description
    clone.querySelector('.description').textContent = item.description;
    // Log description for debugging
    console.log(item.description);
    // Fill in item quantity
    clone.querySelector('.quantity').textContent = item.quantity;
    // Fill in item price (without discount)
    clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);

    // Prepare discount display and calculation
    let discountText = '';
    let discountKiekis = 0;

    // Check if the item has a discount object
    if (item.discount && typeof item.discount === 'object') {
      // If discount is fixed, show the value and calculate
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} `;
        discountKiekis = item.discount.value;
      // If discount is percentage, show as percent and calculate
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    } else {
      // If no discount, show 0
      discountText = '0';
      discountKiekis = 0;
    }

    // Display discount in the DOM
    clone.querySelector('.discount').textContent = discountText;
    // Calculate price after discount
    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;
    // Display price after discount
    clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);
    // Add the item row to the list
    itemsList.appendChild(clone);
    // Log price with discount for debugging
    console.log(priceWithDiscount)
  });
};

// Function to calculate and display invoice totals
const skaiciuotiVisus = json => {
  // Calculate the sum of all items (quantity * price - discount)
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
  // Log subtotal for debugging
  console.log(isVIso)

  // Display shipping price
  document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

  // Calculate and display sum without VAT (subtotal + shipping)
  const isVIsoSuTransportavimas = isVIso + json.shippingPrice;
  document.querySelector('.sumOfAllWithoutPVM21').textContent = isVIsoSuTransportavimas.toFixed(2);
  console.log(isVIsoSuTransportavimas);

  // Set VAT percent and display it
  const vatPercent = 21;
  document.querySelector('.PVM21').textContent = `${vatPercent}%`;
  // Calculate VAT amount
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
  // Display VAT amount
  document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);
  console.log(vatPercent)
  console.log(vatAmount);

  // Calculate and display total with VAT
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
  document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);
  console.log(totalWithVAT);
  // Log items for debugging
  console.log(json.items);
};

// Utility function to show a message to the user
function showMessage(msg, type = 'info') {
  // Remove any old message
  const oldMsg = document.querySelector('.crud-message');
  if (oldMsg) oldMsg.remove();
  // Create a new message div
  const div = document.createElement('div');
  div.className = `crud-message ${type}`;
  div.textContent = msg;
  // Add the message to the body
  document.body.appendChild(div);
  // Remove the message after 2.5 seconds
  setTimeout(() => div.remove(), 2500);
}

// Utility function to get all invoices from localStorage
function getInvoices() {
  // Parse the 'invoices' array from localStorage, or return an empty array if not found
  return JSON.parse(localStorage.getItem('invoices') || '[]');
}

// Utility function to save all invoices to localStorage
function saveInvoices(invoices) {
  // Store the invoices array as a JSON string
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

// Utility function to find an invoice by its number
function findInvoice(number) {
  // Search for the invoice with the matching number
  return getInvoices().find(inv => inv.number === number);
}

// Utility function to generate a unique invoice number (if needed)
function generateInvoiceNumber() {
  // Use the current timestamp to ensure uniqueness
  return 'INV-' + Date.now();
}

// Render the main list of invoices
function renderInvoiceList() {
  // Get the main container
  const main = document.getElementById('main');
  // Set up the HTML structure for the invoice list
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
  // Get all invoices from storage
  const invoices = getInvoices();
  // Find the table body for the invoice list
  const tbody = document.getElementById('invoice-list');
  // Add each invoice as a row in the table
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

  // Set up the event handler for creating a new invoice
  document.getElementById('create-invoice').onclick = () => renderCreateInvoice();

  // Set up event delegation for view, edit, and delete buttons
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

// Render the page for creating a new invoice (fetches from API)
function renderCreateInvoice() {
  // Get the main container
  const main = document.getElementById('main');
  // Set up the HTML structure for the create invoice form
  main.innerHTML = `<h2>Create VAT Invoice</h2>
    <div id="invoice-form">Loading...</div>
    <div>
      <button id="save-invoice">Save</button>
      <button id="update-invoice">New Invoice</button>
      <button id="cancel-invoice">Cancel</button>
    </div>
  `;

  // Variable to hold the current invoice data
  let currentInvoice = null;
  // Function to fetch a new invoice from the API and render it
  function fetchAndRender() {
    // Show loading message
    document.getElementById('invoice-form').textContent = 'Loading...';
    // Fetch invoice data from the API
    fetch('https://in3.dev/inv/')
      .then(res => res.json())
      .then(json => {
        // Store the fetched invoice
        currentInvoice = json;
        // Render the invoice in view mode (not editable)
        renderInvoiceView(json, 'invoice-form', false);
      });
  }
  // Fetch and render the invoice when the form loads
  fetchAndRender();

  // Set up the save button to store the invoice in localStorage
  document.getElementById('save-invoice').onclick = () => {
    if (!currentInvoice) return;
    // Calculate totals before saving
    const totals = calculateTotals(currentInvoice);
    Object.assign(currentInvoice, totals);
    // Get all invoices and add the new one
    const invoices = getInvoices();
    invoices.push(currentInvoice);
    // Save the updated list
    saveInvoices(invoices);
    // Show a success message
    showMessage('Invoice saved', 'success');
    // Return to the invoice list
    renderInvoiceList();
  };

  // Set up the update button to fetch a new invoice from the API
  document.getElementById('update-invoice').onclick = () => {
    fetchAndRender();
    showMessage('Fetched new invoice', 'info');
  };

  // Set up the cancel button to return to the invoice list
  document.getElementById('cancel-invoice').onclick = () => {
    renderInvoiceList();
  };
}

// Render the page for viewing an invoice (read-only)
function renderViewInvoice(number) {
  // Find the invoice by its number
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  // Get the main container
  const main = document.getElementById('main');
  // Set up the HTML structure for viewing the invoice
  main.innerHTML = `<h2>View Invoice</h2>
    <div id="invoice-form"></div>
    <button id="back-list">Back to List</button>
  `;
  // Render the invoice in view mode
  renderInvoiceView(invoice, 'invoice-form', false);
  // Set up the back button to return to the invoice list
  document.getElementById('back-list').onclick = () => renderInvoiceList();
}

// Render the page for editing an invoice (quantity and discount only)
function renderEditInvoice(number) {
  // Find the invoice by its number
  const invoice = findInvoice(number);
  if (!invoice) return showMessage('Invoice not found', 'error');
  // Get the main container
  const main = document.getElementById('main');
  // Set up the HTML structure for editing the invoice
  main.innerHTML = `<h2>Edit Invoice</h2>
    <form id="edit-invoice-form"></form>
    <button id="save-edit">Save</button>
    <button id="cancel-edit">Cancel</button>
  `;
  // Render the invoice in edit mode (inputs enabled)
  renderInvoiceView(invoice, 'edit-invoice-form', true);

  // Set up the save button to update the invoice
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

  // Set up the cancel button to return to the invoice list
  document.getElementById('cancel-edit').onclick = () => renderInvoiceList();
}

// Helper function to render an invoice (either read-only or editable)
function renderInvoiceView(invoice, containerId, editable = false) {
  // Find the container element by its ID
  const container = document.getElementById(containerId);
  // Start building the HTML for the invoice
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
  // Loop through each item in the invoice
  invoice.items.forEach((item, idx) => {
    let discountText = '';
    let discountKiekis = 0;

    // Prepare discount display and calculation
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

    // Calculate price after discount
    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;

    // Add a row for this item, with inputs if editable
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
  // Close the table and add totals
  html += `</tbody></table>
    <div><b>Shipping (€):</b> ${invoice.shippingPrice ? invoice.shippingPrice.toFixed(2) : '0.00'}</div>
    <div><b>Sum without VAT (€):</b> ${(invoice.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
    <div><b>VAT (21%):</b> ${(invoice.vatAmount || 0).toFixed(2)}</div>
    <div><b>Total with VAT (€):</b> ${(invoice.totalPriceWithPVM21 || 0).toFixed(2)}</div>
  `;
  // Set the container's HTML
  container.innerHTML = html;
}

// Helper function to calculate invoice totals
function calculateTotals(json) {
  // Calculate the sum of all items (quantity * price - discount)
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

  // Add shipping price (default to 0 if missing)
  const shipping = json.shippingPrice || 0;
  const isVIsoSuTransportavimas = isVIso + shipping;

  // Calculate VAT (21%)
  const vatPercent = 21;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;

  // Calculate total with VAT
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;

  // Return all calculated totals
  return {
    sumOfAllWithoutPVM21: isVIsoSuTransportavimas,
    vatAmount,
    totalPriceWithPVM21: totalWithVAT
  };
}

// When the window finishes loading
window.onload = () => {
  // Check if the main container exists
  if (!document.getElementById('main')) {
    // If not, create a new div with id 'main'
    const div = document.createElement('div');
    div.id = 'main';
    // Append the new div to the document body
    document.body.appendChild(div);
  }
  // Call the function to render the invoice list on the page
  renderInvoiceList()
}