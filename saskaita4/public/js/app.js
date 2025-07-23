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



class CreateInvoicePage {
  constructor() {
    this.invoice = null;
    this.loadInvoiceFromApi(); // load fresh invoice template from the API

    if (document.querySelector("#googleTranslateElement")) {
      // LANGUAGE Translate
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.onload = () => {
        window.googleTranslateElementInit = () => {
          new google.translate.TranslateElement({
            pageLanguage: "lt",
            includedLanguages: "lt,en,de,it,ru,be,lv,et,es,nl,fr,pl"
          }, "googleTranslateElement");
        };
      };
      document.head.appendChild(script); // adding the translation script to the DOM
    }
  }

  // Fetch a template invoice from external API (for populating form with example data)
  async loadInvoiceFromApi() {
    try {
      const res = await fetch('https://in3.dev/inv/'); // atlieka HTTP uzklausa i API
      const data = await res.json(); // gauta atsakyma konvertuoja i JSON objekta.
      this.invoice = new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data); // Wrap Invoice klase, kad butu galima naudoti jos metodus
      this.renderForm();
      this.setupEventListeners();
    } catch (e) {
      this.showMessage('Failed to fetch invoice from API', true);
    }
  }

  // // metodas, kuris atvaizduoja saskaitos laukus formoje (read only)
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
    /* kiekvienam sąskaitos produktui sukuria naują eilutę lentelėje */
    this.invoice.items.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${this.renderDiscountCell(item.discount)}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
      tbody.appendChild(tr); // Prideda eilutę prie lentelės
    });

    /// atvaizduoja pristatymo kaina
    document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
    document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
    document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
    document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
    document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
  }

  // Metodas, kuris suformatuoja nuolaidos langelį rodymui
  renderDiscountCell(discount) {
    // Jei nuolaidos nėra arba ji lygi 0, grąžina tuščią tekstą
    if (!discount || discount.type === 'none' || discount.value === 0) return ''; // Jei nuolaida procentinė, grąžina procentus
    if (discount.type === 'percentage') return discount.value + '%';
    if (discount.type === 'fixed') return discount.value + ' €';
    return '';
  }

  // Hook up button event listeners for saving, refreshing, and canceling
  setupEventListeners() {
    document.getElementById('save-btn').onclick = async () => {
      // Priskiria išsaugojimo mygtuko paspaudimo įvykį
      await this.saveInvoice();
    };
    document.getElementById('update-btn').onclick = async () => {
      await this.loadInvoiceFromApi();
    }; // Priskiria atšaukimo mygtuko paspaudimo įvykį
    document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
  }

  // Asinchroninis metodas, kuris išsaugo sąskaitą per POST užklausą į backend API
  async saveInvoice() {
    if (!this.invoice.id) {
      // Jei sąskaita neturi ID, sugeneruoja naują unikalų ID
      this.invoice.id = (0,_uuid_js__WEBPACK_IMPORTED_MODULE_2__.uuidv4)(); // Ensure unique ID
    } // Išsaugo sąskaitą per InvoiceRepository
    await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].save(this.invoice); // Save to backend
    this.showMessage('Invoice saved!', false);
    setTimeout(() => window.location.href = 'read.html', 500); // Po trumpo laiko nukreipia į sąskaitų peržiūros puslapį
  }

  // Display a user message on the page
  showMessage(msg, isError = false) {
    const el = document.getElementById('message');
    el.textContent = msg;
    el.style.color = isError ? 'red' : 'green'; // Nustato žinutės spalvą pagal klaidos tipą
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

class DeleteInvoicePage {
  constructor() {
    this.invoice = null;
    this.init();
  }

  // Initialize the page: load the invoice and prepare UI
  async init() {
    const params = new URLSearchParams(window.location.search);
    // paimamas 'id' parametras is URL
    const id = params.get('id');

    // Jei nėra id = rodo klaidos zinute ir nutraukia veikla.
    if (!id) return this.showMessage('No invoice ID provided', true);
    /* bando uzkrauti saskaita pagal id is API */
    this.invoice = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    if (!this.invoice) return this.showMessage('Saskaita nerasta', true);
    this.renderConfirmation();
    this.setupEventListeners();
  }

  // saskaitos informacija patvirtinimui
  renderConfirmation() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    //Parodo pirkėjo pavadinimą (jei yra)
    document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
    document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
  }

  // set up confirm and cancel buttons
  setupEventListeners() {
    const deleteBtn = document.getElementById('confirm-delete-btn');
    const cancelBtn = document.getElementById('cancel-delete-btn');
    /* Jei yra trynimo mygtukas, priskiria jam paspaudimo įvykį */
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
    this.showMessage('Sąskaita ištrinta!');
    setTimeout(() => window.location.href = 'read.html', 500);
  }

  // rodo vartotojui zinute
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


class EditInvoicePage {
  constructor() {
    this.invoice = null;
    this.init(); /// iskviecia pradini metoda.
  }

  // load the invoice to edit from backend
  async init() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return this.showMessage('No invoice ID provided', true);
    this.invoice = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(id);
    // console.log('Loaded invoice payload:', this.invoice); // payload
    if (!this.invoice) return this.showMessage('Sąskaitos nera', true);
    this.renderForm();
    this.setupEventListeners();
  }

  // atvaizduoja visus saskaitos laukus kaip redaguojamus formos laukus
  renderForm() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    console.log(this.invoice.number);
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
    const tbody = document.getElementById('products-body'); // Gauna prekių lenteles body.
    tbody.innerHTML = '';
    this.invoice.items.forEach((item, idx) => {
      const discountType = item.discount?.type || 'none';
      console.log(item.discount);
      // nuolaidos reiksme
      const discountValue = item.discount?.value || 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description || ''}"></td>
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity || 1}"></td>
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price || 0}" readonly></td>
                <td>
                    <select name="discountType${idx}">
                        <option value="none"${discountType === 'none' ? ' selected' : ''}>Be nuolaidos</option>
                        <option value="percentage"${discountType === 'percentage' ? ' selected' : ''}>%</option>
                        <option value="fixed"${discountType === 'fixed' ? ' selected' : ''}>€</option>
                    </select>
                    <input type="number" min="0" step="0.01" name="discountValue${idx}" value="${discountValue}">
                </td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
                <td><button type="button" style="color: red" class="remove-item-btn" data-idx="${idx}">Trinti</button></td>
            `;
      tbody.appendChild(tr);
    });

    //// Po eiluciu atvaizdavimo priskiriam trynimo mygtuku ivykius
    this.attachRemoveHandlers();
  }

  // setup event listeners for saving || canceling
  setupEventListeners() {
    document.getElementById('edit-form').onsubmit = async e => {
      e.preventDefault();
      this.updateInvoiceFromForm();
      await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.invoice);
      this.showMessage('Invoice updated!');
      setTimeout(() => window.location.href = 'read.html', 500);
    };
    document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
  }

  // Attach remove handlers to all "Remove" buttons
  attachRemoveHandlers() {
    const tbody = document.getElementById('products-body');
    tbody.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.onclick = async e => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        // Remove the item from the invoice data
        this.invoice.items.splice(idx, 1);
        // Update the backend immediately after removal
        await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.invoice);
        // Re-render the form to update UI and re-attach handlers
        this.renderForm();
        this.showMessage('Line removed and invoice updated.');
      };
    });
  }
  updateInvoiceFromForm() {
    // upd. shipping
    this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0;

    // upd. items
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

  // status message
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
class Invoice {
  constructor(data) {
    this.id = data.id || Date.now(); /* priskiria saskaitos ID arba sugeneruoja nauja pagal laika */
    // console.log(data.id);
    this.number = data.number || '';
    this.date = data.date || '';
    this.due_date = data.due_date || '';
    this.company = data.company || {};
    // normalizuoja items and discounts
    this.items = Array.isArray(data.items) ? data.items.map(item => ({
      description: item.description || '',
      quantity: Number(item.quantity) || 1,
      price: Number(item.price) || 0,
      // normalizuoja nuolaida naudojant parseDiscount metoda
      discount: this.parseDiscount(item.discount)
    })) : [];
    this.shippingPrice = Number(data.shippingPrice) || 0;
    this.vatRate = 0.21;
  }

  // Normalize discount input to standard object
  parseDiscount(discount) {
    // Jei nuolaidos nėra arba ji tuščia, grąžina 'none' tipo nuolaidą su 0 vertę
    if (!discount || Array.isArray(discount) && discount.length === 0) {
      return {
        type: 'none',
        value: 0
      };
    }
    console.log(discount);
    if (typeof discount === 'number') {
      return {
        type: 'fixed',
        value: discount
      };
    }
    // Jei nuolaida yra objektas su 'type' ir 'value', normalizuoja vertę
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

  // calculate discount amount for a line item
  getLineDiscount(item) {
    if (!item.discount || !item.discount.type || !item.discount.value) return 0;
    if (item.discount.type === 'percentage') {
      // percent of price * qty
      return item.price * item.quantity * (item.discount.value / 100);
    }
    console.log(item);
    // jei nuolaida fiksuota suma, grazina jos verte.
    if (item.discount.type === 'fixed') {
      return item.discount.value;
    }
    return 0;
  }

  // Apskaičiuoja eilutės sumą po nuolaidos
  getLineTotal(item) {
    return item.price * item.quantity - this.getLineDiscount(item);
  }

  // Calculate subtotal (sum of all lines, after discount, before VAT)
  getSubtotal() {
    return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
  }

  // Apskaiciuoja bendranuolaidu suma
  getTotalDiscount() {
    return this.items.reduce((acc, item) => acc + this.getLineDiscount(item), 0);
  }
  getVat() {
    const taxable = this.getSubtotal() + this.shippingPrice;
    return taxable * this.vatRate;
  }

  //  totalas
  getTotal() {
    return this.getSubtotal() + this.shippingPrice + this.getVat();
  }

  // check if invoice is valid 
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

const API = '/api/invoices';
class InvoiceRepository {
  static async getAll() {
    // Retrieve all invoices from the server
    const res = await fetch(API); // GET /api/invoices
    if (!res.ok) return [];
    const arr = await res.json();
    // // kiekvienas objektas paverciamas Invoice klases egzemplioriumi
    return arr.map(inv => new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](inv));
  }

  // Retrieve a specific invoice by ID from the server
  static async get(id) {
    // Siunčiamas GET užklausimas į /api/invoices/:id.
    const res = await fetch(`${API}/${id}`); // GET /api/invoices/:id
    if (!res.ok) return null;
    const data = await res.json();
    // objektas paverciamas Invoice klases egzemplioriumi
    return new _Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](data);
  }

  // Save a new invoice to the server.
  static async save(invoice) {
    /* Siunčiamas POST užklausimas su sąskaitos duomenimis į /api/invoices */
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
    // Siunčiamas PUT užklausimas su atnaujintais duomenimis į /api/invoices/:id
    const res = await fetch(`${API}/${invoice.id}`, {
      method: 'PUT',
      // PUT /api/invoices/:id
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoice)
    });
    // Grąžinamas serverio atsakymas (atnaujintos sąskaitos duomenys)
    return await res.json();
  }

  // Delete an invoice from server
  static async delete(id) {
    // Siunčiamas DELETE užklausimas į /api/invoices/:id.
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

class ListInvoicesPage {
  constructor() {
    this.renderList(); // konstruktorius iskviecia saskaitu listo atvaizdavimo funkcija
  }

  // load and atvaizduoja all invoices
  async renderList() {
    /* asinchroniskai gauna visas saskaitas is API per InvoiceRepository */
    const invoices = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].getAll(); // Fetch all invoices from API.
    const tbody = document.getElementById('invoice-list');
    tbody.innerHTML = '';
    // forEach kiekviena saskaita ir sukuria nauja lenteles eilute
    invoices.forEach(inv => {
      const tr = document.createElement('tr');
      /* uzpildo eilute saskaitos duomenimis */
      tr.innerHTML = `
                <td>${inv.number}</td>
                <td>${inv.date}</td>
                <td>${inv.due_date}</td>
                <td>${inv.company?.buyer?.name || ''}</td>
                <td>${inv.company?.seller?.name || ''}</td>
                <td>${inv.getTotal ? inv.getTotal().toFixed(2) : ''}</td>
                <td>
                    <a href="show.html?id=${inv.id}" class="btn">Žiūrėti</a>
                    <a href="edit.html?id=${inv.id}" class="btn primary">Redaguoti</a>
                    <a href="delete.html?id=${inv.id}" class="btn danger">Trinti</a>
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


class ShowInvoicePage {
  constructor() {
    this.init(); // inicializuoja puslapi iskarto sukurus objekta
  }

  // load invoice by ID and render viska
  async init() {
    const params = new URLSearchParams(window.location.search);
    /* Išgauna 'id' parametrą iš URL */
    const id = params.get('id');
    // gauna sąskaitos duomenis pagal ID iš API
    const data = await _InvoiceRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(id);
    // Jei duomenys gauti, sukuria naują Invoice objektą, kitaip priskiria null
    this.invoice = data ? new _Invoice_js__WEBPACK_IMPORTED_MODULE_1__["default"](data) : null;
    if (!this.invoice) {
      document.getElementById('message').textContent = 'Sąskaita nerasta';
      return;
    }
    this.renderFields();
  }

  // Atvaizduoja visus sąskaitos laukus puslapyje.
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
    /* kiekvienai prekei sąskaitoje */
    this.invoice.items.forEach(item => {
      let discountStr = '';
      if (item.discount) {
        if (item.discount.type === 'percentage') discountStr = item.discount.value + '%';else if (item.discount.type === 'fixed') discountStr = item.discount.value + ' €';
      }
      const tr = document.createElement('tr');
      // Uzpildo eilute prekes duomenimis
      tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${discountStr}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
      tbody.appendChild(tr);
    });
    // Atvaizduoja pristatymo kainą
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ReadInvoicePage.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _EditInvoicePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditInvoicePage.js */ "./src/EditInvoicePage.js");
/* harmony import */ var _ListInvoicesPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListInvoicesPage.js */ "./src/ListInvoicesPage.js");
/* harmony import */ var _ShowInvoicePage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowInvoicePage.js */ "./src/ShowInvoicePage.js");
/* harmony import */ var _DeleteInvoicePage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteInvoicePage.js */ "./src/DeleteInvoicePage.js");






const page = window.location.pathname.split('/').pop(); // get the current HTML file name from the URL path

switch (page) {
  // pagal puslapio pavadinima sukuria atitinkamos klases egzemplioriu

  case 'create.html':
    // jei atidarytas create.html => CreateInvoicePage klase
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
    break;
  // jei puslapio pavadinimas neatpazintas = nieko nedaro
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
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
  // sugeneruoja RFC4122 4 versijos UUID
  /[xy]/g,
  // suranda visus simbolius 'x' ir 'y' shablone
  function (c) {
    // sugeneruoja atsitiktini skaiciu nuo 0 iki 15
    const r = Math.random() * 16 | 0,
      // jei simbolis 'x', naudoja r; jei 'y', uztikrina, kad pirmi bitai būtų 8, 9, A arba B
      v = c === 'x' ? r : r & 0x3 | 8;
    return v.toString(16); // konvertuoja skaiciu i sesioliktaini simboli
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