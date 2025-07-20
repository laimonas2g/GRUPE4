/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CreateInvoicePage.js":
/*!**********************************!*\
  !*** ./src/CreateInvoicePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateInvoicePage)
/* harmony export */ });
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.js */ "./src/Invoice.js");
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uuid.js */ "./src/uuid.js");
// CreateInvoicePage.js
// Handles displaying and saving a new invoice via the backend API




class CreateInvoicePage {
  constructor() {
    this.invoice = null;
    this.loadInvoiceFromApi(); // Load a fresh invoice template from the API
  }

  // Fetch a template invoice from external API (for populating form with example data)
  async loadInvoiceFromApi() {
    try {
      const res = await fetch('https://in3.dev/inv/');
      const data = await res.json();
      this.invoice = new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data); // Wrap in Invoice class for methods
      this.renderForm();
      this.setupEventListeners();
    } catch (e) {
      this.showMessage('Failed to fetch invoice from API', true);
    }
  }

  // Render invoice fields to the form (readonly in this example)
  renderForm() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
    document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
    document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
    document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
    document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
    document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
    document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
    document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
    document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
    document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
    document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
    document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';

    // Render each product/item as a row in the invoice
    const tbody = document.getElementById('products-body');
    tbody.innerHTML = '';
    this.invoice.items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${this.renderDiscountCell(item.discount)}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
      tbody.appendChild(tr);
    });

    // Render totals and calculations
    document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
    document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
    document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
    document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
    document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
  }

  // Format the discount cell for display
  renderDiscountCell(discount) {
    if (!discount || discount.type === 'none' || discount.value === 0) return '';
    if (discount.type === 'percentage') return discount.value + '%';
    if (discount.type === 'fixed') return discount.value + ' €';
    return '';
  }

  // Hook up button event listeners for saving, refreshing, and canceling
  setupEventListeners() {
    document.getElementById('save-btn').onclick = async () => {
      await this.saveInvoice();
    };
    document.getElementById('update-btn').onclick = async () => {
      await this.loadInvoiceFromApi();
    };
    document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
  }

  // Save the invoice via POST to the backend API
  async saveInvoice() {
    if (!this.invoice.id) {
      this.invoice.id = (0,_uuid_js__WEBPACK_IMPORTED_MODULE_2__.uuidv4)(); // Ensure unique ID
    }
    await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].save(this.invoice); // Save to backend
    this.showMessage('Invoice saved!', false);
    setTimeout(() => window.location.href = 'read.html', 500);
  }

  // Display a user message on the page
  showMessage(msg, isError = false) {
    const el = document.getElementById('message');
    el.textContent = msg;
    el.style.color = isError ? 'red' : 'green';
  }
}

/***/ }),

/***/ "./src/DeleteInvoicePage.js":
/*!**********************************!*\
  !*** ./src/DeleteInvoicePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteInvoicePage)
/* harmony export */ });
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
// DeleteInvoicePage.js
// Handles showing a confirmation to delete an invoice and then deleting via the API


class DeleteInvoicePage {
  constructor() {
    this.invoice = null;
    this.init();
  }

  // Initialize the page: load the invoice and prepare UI
  async init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return this.showMessage('No invoice ID provided', true);
    this.invoice = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    if (!this.invoice) return this.showMessage('Invoice not found', true);
    this.renderConfirmation();
    this.setupEventListeners();
  }

  // Display the invoice info for confirmation
  renderConfirmation() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
    document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
  }

  // Set up confirm and cancel buttons
  setupEventListeners() {
    const deleteBtn = document.getElementById('confirm-delete-btn');
    const cancelBtn = document.getElementById('cancel-delete-btn');
    if (deleteBtn) {
      deleteBtn.onclick = async () => await this.handleDelete();
    }
    if (cancelBtn) {
      cancelBtn.onclick = () => window.location.href = 'read.html';
    }
  }

  // Perform the delete via backend API and show result
  async handleDelete() {
    await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].delete(this.invoice.id);
    this.showMessage('Invoice deleted!');
    setTimeout(() => window.location.href = 'read.html', 500);
  }

  // Show a user message
  showMessage(msg, isError = false) {
    const el = document.getElementById('message');
    el.textContent = msg;
    el.style.color = isError ? 'red' : 'green';
  }
}

/***/ }),

/***/ "./src/EditInvoicePage.js":
/*!********************************!*\
  !*** ./src/EditInvoicePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditInvoicePage)
/* harmony export */ });
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.js */ "./src/Invoice.js");
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
// EditInvoicePage.js
// Handles displaying and updating an invoice via the backend API



class EditInvoicePage {
  constructor() {
    this.invoice = null;
    this.init();
  }

  // Load the invoice to edit from the backend
  async init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return this.showMessage('No invoice ID provided', true);
    this.invoice = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(id);
    if (!this.invoice) return this.showMessage('Invoice not found', true);
    this.renderForm();
    this.setupEventListeners();
  }

  // Render all invoice fields as editable form fields
  renderForm() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
    document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
    document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
    document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
    document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
    document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
    document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
    document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
    document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
    document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
    document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
    document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';
    document.getElementById('shipping').value = this.invoice.shippingPrice || 0;

    // Render each invoice item as editable row
    const tbody = document.getElementById('products-body');
    tbody.innerHTML = '';
    this.invoice.items.forEach((item, idx) => {
      const discountType = item.discount?.type || 'none';
      const discountValue = item.discount?.value || 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description || ''}"></td>
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity || 1}"></td>
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price || 0}" readonly></td>
                <td>
                    <select name="discountType${idx}">
                        <option value="none"${discountType === 'none' ? ' selected' : ''}>No discount</option>
                        <option value="percentage"${discountType === 'percentage' ? ' selected' : ''}>%</option>
                        <option value="fixed"${discountType === 'fixed' ? ' selected' : ''}>€</option>
                    </select>
                    <input type="number" min="0" step="0.01" name="discountValue${idx}" value="${discountValue}">
                </td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
                <td><button type="button" class="remove-item-btn" data-idx="${idx}">Remove</button></td>
            `;
      tbody.appendChild(tr);
    });

    // You can keep extra logic for adding/removing items if needed
  }

  // Set up event listeners for saving or canceling
  setupEventListeners() {
    document.getElementById('edit-form').onsubmit = async e => {
      e.preventDefault();
      this.updateInvoiceFromForm(); // <-- Add this line!
      await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.invoice);
      this.showMessage('Invoice updated!');
      setTimeout(() => window.location.href = 'read.html', 500);
    };
    document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
  }
  updateInvoiceFromForm() {
    // Update basic fields if editable (if not, skip)
    // this.invoice.number = document.getElementById('invoice-number').textContent; // If editable

    // Update shipping
    this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;

    // Update items
    const tbody = document.getElementById('products-body');
    const rows = tbody.querySelectorAll('tr');
    this.invoice.items = Array.from(rows).map((tr, idx) => {
      return {
        description: tr.querySelector(`[name=desc${idx}]`).value,
        quantity: parseInt(tr.querySelector(`[name=qty${idx}]`).value, 10),
        price: parseFloat(tr.querySelector(`[name=price${idx}]`).value),
        discount: {
          type: tr.querySelector(`[name=discountType${idx}]`).value,
          value: parseFloat(tr.querySelector(`[name=discountValue${idx}]`).value) || 0
        }
      };
    });
  }

  // Show a status message
  showMessage(msg, isError = false) {
    const el = document.getElementById('message');
    el.textContent = msg;
    el.style.color = isError ? 'red' : 'green';
  }
}

/***/ }),

/***/ "./src/Invoice.js":
/*!************************!*\
  !*** ./src/Invoice.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invoice)
/* harmony export */ });
// Invoice.js
// Pure data model class for Invoice, provides calculations and validation

class Invoice {
  constructor(data) {
    this.id = data.id || Date.now();
    this.number = data.number || '';
    this.date = data.date || '';
    this.due_date = data.due_date || '';
    this.company = data.company || {};
    // Normalize items and discounts
    this.items = Array.isArray(data.items) ? data.items.map(item => ({
      description: item.description || '',
      quantity: Number(item.quantity) || 1,
      price: Number(item.price) || 0,
      discount: this.parseDiscount(item.discount)
    })) : [];
    this.shippingPrice = Number(data.shippingPrice) || 0;
    this.vatRate = 0.21; // VAT rate (21%)
  }

  // Normalize discount input to standard object
  parseDiscount(discount) {
    if (!discount || Array.isArray(discount) && discount.length === 0) {
      return {
        type: 'none',
        value: 0
      };
    }
    if (typeof discount === 'number') {
      return {
        type: 'fixed',
        value: discount
      };
    }
    if (typeof discount === 'object' && 'type' in discount && 'value' in discount) {
      return {
        type: discount.type,
        value: Number(discount.value) || 0
      };
    }
    return {
      type: 'none',
      value: 0
    };
  }

  // Calculate discount amount for a line item
  getLineDiscount(item) {
    if (!item.discount || !item.discount.type || !item.discount.value) return 0;
    if (item.discount.type === 'percentage') {
      // percent of price * qty
      return item.price * item.quantity * (item.discount.value / 100);
    }
    if (item.discount.type === 'fixed') {
      return item.discount.value;
    }
    return 0;
  }

  // Calculate line total after discount
  getLineTotal(item) {
    return item.price * item.quantity - this.getLineDiscount(item);
  }

  // Calculate subtotal (sum of all lines, after discount, before VAT)
  getSubtotal() {
    return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
  }

  // Calculate total discount for the invoice
  getTotalDiscount() {
    return this.items.reduce((acc, item) => acc + this.getLineDiscount(item), 0);
  }

  // Calculate VAT on subtotal + shipping
  getVat() {
    const taxable = this.getSubtotal() + this.shippingPrice;
    return taxable * this.vatRate;
  }

  // Calculate grand total
  getTotal() {
    return this.getSubtotal() + this.shippingPrice + this.getVat();
  }

  // Check if invoice is valid (basic validation)
  isValid() {
    return !isNaN(this.getTotal()) && Array.isArray(this.items) && this.items.length > 0 && this.items.every(p => p.quantity > 0 && p.price >= 0);
  }
}

/***/ }),

/***/ "./src/InvoiceRepository.js":
/*!**********************************!*\
  !*** ./src/InvoiceRepository.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvoiceRepository)
/* harmony export */ });
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.js */ "./src/Invoice.js");
// InvoiceRepository.js
// This class provides methods to interact with the server-side invoice storage via REST API.
// All invoice data is persisted in a server-side file (e.g. data.json) through the backend API.



// The base API endpoint for invoice CRUD operations.
const API = '/api/invoices';
class InvoiceRepository {
  // Retrieve all invoices from the server.
  static async getAll() {
    const res = await fetch(API); // GET /api/invoices
    if (!res.ok) return [];
    const arr = await res.json();
    // Convert each plain object to an Invoice instance.
    return arr.map(inv => new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](inv));
  }

  // Retrieve a specific invoice by ID from the server.
  static async get(id) {
    const res = await fetch(`${API}/${id}`); // GET /api/invoices/:id
    if (!res.ok) return null;
    const data = await res.json();
    return new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  }

  // Save a new invoice to the server.
  static async save(invoice) {
    const res = await fetch(API, {
      method: 'POST',
      // POST /api/invoices
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoice)
    });
    return await res.json();
  }

  // Update an existing invoice on the server.
  static async update(invoice) {
    const res = await fetch(`${API}/${invoice.id}`, {
      method: 'PUT',
      // PUT /api/invoices/:id
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoice)
    });
    return await res.json();
  }

  // Delete an invoice from the server.
  static async delete(id) {
    const res = await fetch(`${API}/${id}`, {
      method: 'DELETE'
    }); // DELETE /api/invoices/:id
    return await res.json();
  }
}

/***/ }),

/***/ "./src/ListInvoicesPage.js":
/*!*********************************!*\
  !*** ./src/ListInvoicesPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListInvoicesPage)
/* harmony export */ });
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
// ListInvoicesPage.js
// Fetches and displays all invoices from the backend API in a table


class ListInvoicesPage {
  constructor() {
    this.renderList();
  }

  // Load and render all invoices
  async renderList() {
    const invoices = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); // Fetch all invoices from API
    const tbody = document.getElementById('invoice-list');
    tbody.innerHTML = '';
    invoices.forEach(inv => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.due_date}</td>
                <td>${inv.company?.buyer?.name || ''}</td>
                <td>${inv.company?.seller?.name || ''}</td>
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td>
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">View</a>
                    <a href="edit.html?id=${inv.id}" class="btn primary">Edit</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Delete</a>
                </td>
            `;
      tbody.appendChild(tr);
    });
  }
}

/***/ }),

/***/ "./src/ReadInvoicePage.js":
/*!********************************!*\
  !*** ./src/ReadInvoicePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReadInvoicePage)
/* harmony export */ });
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
// ReadInvoicePage.js
// Fetches all invoices and displays them in a table (similar to ListInvoicesPage)


class ReadInvoicePage {
  constructor() {
    this.renderList();
  }

  // Load and render all invoices
  async renderList() {
    const invoices = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); // Fetch all invoices from API
    const tbody = document.getElementById('invoice-list');
    tbody.innerHTML = '';
    invoices.forEach(inv => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.due_date}</td>
                <td>${inv.company?.buyer?.name || ''}</td>
                <td>${inv.company?.seller?.name || ''}</td>
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td>
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">View</a>
                    <a href="edit.html?id=${inv.id}" class="btn primary">Edit</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Delete</a>
                </td>
            `;
      tbody.appendChild(tr);
    });
  }
}

/***/ }),

/***/ "./src/ShowInvoicePage.js":
/*!********************************!*\
  !*** ./src/ShowInvoicePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowInvoicePage)
/* harmony export */ });
/* harmony import */ var _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceRepository.js */ "./src/InvoiceRepository.js");
/* harmony import */ var _Invoice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.js */ "./src/Invoice.js");
// ShowInvoicePage.js
// Displays full details of a single invoice, fetched from the API



class ShowInvoicePage {
  constructor() {
    this.init();
  }

  // Load invoice by ID and render fields
  async init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const data = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    this.invoice = data ? new _Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"](data) : null;
    if (!this.invoice) {
      document.getElementById('message').textContent = 'Invoice not found!';
      return;
    }
    this.renderFields();
  }

  // Render all invoice fields to the page
  renderFields() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
    document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
    document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
    document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
    document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
    document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
    document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
    document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
    document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
    document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
    document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
    document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
    document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';

    // Render items table
    const tbody = document.getElementById('products-body');
    tbody.innerHTML = '';
    this.invoice.items.forEach(item => {
      let discountStr = '';
      if (item.discount) {
        if (item.discount.type === 'percentage') discountStr = item.discount.value + '%';else if (item.discount.type === 'fixed') discountStr = item.discount.value + ' €';
      }
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${discountStr}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
      tbody.appendChild(tr);
    });
    document.getElementById('shipping').textContent = this.invoice.shippingPrice.toFixed(2);
    document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
    document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
    document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
    document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
  }
}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateInvoicePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateInvoicePage.js */ "./src/CreateInvoicePage.js");
/* harmony import */ var _ReadInvoicePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadInvoicePage.js */ "./src/ReadInvoicePage.js");
/* harmony import */ var _EditInvoicePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditInvoicePage.js */ "./src/EditInvoicePage.js");
/* harmony import */ var _ListInvoicesPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListInvoicesPage.js */ "./src/ListInvoicesPage.js");
/* harmony import */ var _ShowInvoicePage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowInvoicePage.js */ "./src/ShowInvoicePage.js");
/* harmony import */ var _DeleteInvoicePage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteInvoicePage.js */ "./src/DeleteInvoicePage.js");
// app.js
// Entry point: detects page and instantiates the appropriate class for each page








// Get the current HTML file name from the URL path
const page = window.location.pathname.split('/').pop();

// Instantiate the corresponding page logic class based on the current HTML file
switch (page) {
  case 'create.html':
    new _CreateInvoicePage_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    break;
  case 'edit.html':
    new _EditInvoicePage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    break;
  case 'read.html':
    new _ListInvoicesPage_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    break;
  case 'show.html':
    new _ShowInvoicePage_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    break;
  case 'delete.html':
    new _DeleteInvoicePage_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    break;
  default:
    // Optionally, show an error or redirect if page is not recognized
    break;
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/uuid.js":
/*!*********************!*\
  !*** ./src/uuid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uuidv4: () => (/* binding */ uuidv4)
/* harmony export */ });
// uuid.js
// Utility for generating a RFC4122 version 4 compliant UUID

function uuidv4() {
  // Generates a simple RFC4122 version 4 compliant UUID.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : r & 0x3 | 8;
    return v.toString(16);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksaskaita4"] = self["webpackChunksaskaita4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;