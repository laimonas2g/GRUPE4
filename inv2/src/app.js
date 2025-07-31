import axios from 'axios';
import { v4 } from 'uuid';

const localStorageKey = 'inv';
const apiUrl = 'https://in3.dev/inv/';
let newInvoiceData;

function newInvoice() {

    axios.get(apiUrl)
        .then(res => {
            renderInvoice(res.data);
            newInvoiceData = res.data;
        })
        .catch(error => {
            console.error('Klaida gaunant duomenis:', error);
            const invoiceSection = document.querySelector('[data-invoice]');
            invoiceSection.innerHTML = `<div class="alert alert-danger">Nepavyko gauti duomenų.</div>`;
        })
}

function renderInvoice(data, editMode = false) {
    const invoice = data;

    function formatDiscount(discount) {
        if (!discount || Array.isArray(discount)) return '-';
        if (discount.type === 'fixed') return discount.value.toFixed(2);
        if (discount.type === 'percentage') return discount.value + '%';
        return '-';
    }

    function calcItemTotal(item) {
        let price = item.price * item.quantity;
        if (item.discount && !Array.isArray(item.discount)) {
            if (item.discount.type === 'fixed') price -= item.discount.value;
            if (item.discount.type === 'percentage') price -= price * (item.discount.value / 100);
        }
        return price;
    }

    const itemsHtml = invoice.items.map((item, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${item.description}</td>
                <td>${editMode ? `<input data-quantity type="number" value="${item.quantity}" class="form-control form-control-sm width-70" />` : item.quantity}</td>
                <td>${editMode ? `<input data-price type="number" value="${item.price}" class="form-control form-control-sm width-100" />` : item.price}</td>
                <td>${editMode ? `
                    <input data-discount type="text" value="${item.discount?.value ?? 0}" class="form-control form-control-sm width-70" />
                    <input type="radio" name="discount-type-${i}" value="fixed" ${item.discount?.type === 'fixed' ? 'checked' : ''}> EUR
                    <input type="radio" name="discount-type-${i}" value="percentage" ${item.discount?.type === 'percentage' ? 'checked' : ''}> %
                ` : item.discount ? formatDiscount(item.discount)
                    : formatDiscount(item.discount)}</td>
                <td data-item-total="${i}">${calcItemTotal(item).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
        `).join('');

    let itemsTotal = 0;
    let withShippingTotal = 0;
    let vat = 0;
    let grandTotal = 0;

    const calcTotals = _ => {
        itemsTotal = invoice.items.reduce((sum, item) => sum + calcItemTotal(item), 0);
        withShippingTotal = itemsTotal + (invoice.shippingPrice || 0);
        vat = withShippingTotal * 0.21;
        grandTotal = withShippingTotal + vat;
    }

    function updateTotals() {
        const vatElement = document.querySelector('[data-vat]');
        const grandTotalElement = document.querySelector('[data-total]');
        vatElement.textContent = vat.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        grandTotalElement.textContent = grandTotal.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function updateItemTotal(index) {
        const itemTotalElement = document.querySelector(`[data-item-total="${index}"]`);
        const item = invoice.items[index];
        itemTotalElement.textContent = calcItemTotal(item).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    calcTotals();

    const html = `
        <div class="container my-5">
            <div class="row mb-4">
                <div class="col-md-12 text-md-start mb-3">
                    <h2>Sąskaita faktūra</h2>
                    <p class="mb-0"><strong>Nr.:</strong> ${invoice.number}</p>
                    <p class="mb-0"><strong>Data:</strong> ${invoice.date}</p>
                    <p class="mb-0"><strong>Apmokėti iki:</strong> ${invoice.due_date}</p>
                </div>
                <div class="col-md-6 text-md-start">
                    <h5>Pardavėjas</h5>
                    <p><strong>${invoice.company.seller.name}</strong><br>
                        ${invoice.company.seller.address}<br>
                        Įmonės kodas: ${invoice.company.seller.code}<br>
                        PVM kodas: ${invoice.company.seller.vat}<br>
                        Tel.: ${invoice.company.seller.phone}<br>
                        El. paštas: ${invoice.company.seller.email}
                    </p>
                </div>
                <div class="col-md-6 text-md-start">
                    <h5>Pirkėjas</h5>
                    <p><strong>${invoice.company.buyer.name}</strong><br>
                        ${invoice.company.buyer.address}<br>
                        Įmonės kodas: ${invoice.company.buyer.code}<br>
                        PVM kodas: ${invoice.company.buyer.vat}<br>
                        Tel.: ${invoice.company.buyer.phone}<br>
                        El. paštas: ${invoice.company.buyer.email}
                    </p>
                </div>
            </div>
            <div class="table-responsive mb-4">
                <table class="table table-bordered align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>#</th>
                            <th>Prekės aprašymas</th>
                            <th>Kiekis</th>
                            <th>Kaina (€)</th>
                            <th>Nuolaida</th>
                            <th>Suma (€)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" class="text-end">Pristatymas</td>
                            <td>${(invoice.shippingPrice || 0).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-end">PVM (21%)</td>
                            <td data-vat>${vat.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-end fw-bold">Iš viso</td>
                            <td data-total class="fw-bold">${grandTotal.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p><strong>Pastabos:</strong> Prašome apmokėti iki nurodytos datos.</p>
                </div>
            </div>
        </div>
    `;
    const invoiceSection = document.querySelector('[data-invoice]');
    invoiceSection.innerHTML = html;

    if (editMode) {
        const allQuantities = invoiceSection.querySelectorAll('[data-quantity]');
        allQuantities.forEach((input, i) => {
            input.addEventListener('change', _ => {
                const newQuantity = parseFloat(input.value);
                if (isNaN(newQuantity) || newQuantity < 0) {
                    input.value = invoice.items[i].quantity; // Reset to original if invalid
                    return;
                }
                invoice.items[i].quantity = newQuantity;
                updateItemTotal(i);
                calcTotals();
                updateTotals();
            });
        });
        const allPrices = invoiceSection.querySelectorAll('[data-price]');
        allPrices.forEach((input, i) => {
            input.addEventListener('change', _ => {
                const newPrice = parseFloat(input.value);
                if (isNaN(newPrice) || newPrice < 0) {
                    input.value = invoice.items[i].price; // Reset to original if invalid
                    return;
                }
                invoice.items[i].price = newPrice;
                updateItemTotal(i);
                calcTotals();
                updateTotals();
            });
        });
        const allDiscounts = invoiceSection.querySelectorAll('[data-discount]');
        allDiscounts.forEach((input, i) => {
            input.addEventListener('change', _ => {
                const newDiscountValue = parseFloat(input.value);
                if (isNaN(newDiscountValue) || newDiscountValue < 0) {
                    input.value = invoice.items[i].discount?.value || 0; // Reset to original if invalid
                    return;
                }
                const discountType = document.querySelector(`input[name="discount-type-${i}"]:checked`);
                if (!discountType) {
                    const fixedRadio = invoiceSection.querySelector(`input[name="discount-type-${i}"][value="fixed"]`);
                    fixedRadio.checked = true;
                }
                invoice.items[i].discount = {
                    value: newDiscountValue,
                    type: discountType ? discountType.value : 'fixed'
                };
                updateItemTotal(i);
                calcTotals();
                updateTotals();
            });
        });
        const allDiscountTypes = invoiceSection.querySelectorAll('input[type="radio"]');
        allDiscountTypes.forEach(radio => {
            radio.addEventListener('change', _ => {
                const index = parseInt(radio.name.split('-')[2]);
                invoice.items[index].discount = {
                    value: invoice.items[index].discount?.value || 0,
                    type: radio.value
                };
                console.log(`Radio changed for item ${index}: ${radio.value}`, invoice.items[index].discount);
                updateItemTotal(index);
                calcTotals();
                updateTotals();
            });
        });

        const updateButtonSection = document.querySelector('[data-update-button]');
        if (updateButtonSection) {
            const updateButton = updateButtonSection.querySelector('button');
            updateButton.addEventListener('click', _ => {
                updateInvoice(invoice);
            });
        }
    }
}

function createInvoice(data) {
    const invoiceId = v4();
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoiceToSave = { id: invoiceId, ...data };
    storedInvoices.push(invoiceToSave);
    localStorage.setItem(localStorageKey, JSON.stringify(storedInvoices));
}

function updateInvoice(data) {
    const invoiceId = data.id;
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoicesToSave = storedInvoices.map(inv => {
        if (inv.id === invoiceId) {
            return { ...inv, ...data };
        }
        return inv;
    });
    localStorage.setItem(localStorageKey, JSON.stringify(invoicesToSave));
}

function invoicesList() {
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoiceListSection = document.querySelector('[data-invoices-list]');
    if (storedInvoices.length === 0) {
        invoiceListSection.innerHTML = `<div class="alert alert-info">Nėra sąskaitų faktūrų.</div>`;
        return;
    }

    const html = `
        ${storedInvoices.map(invoice => `
            <tr>
                <td>${invoice.number}</td>
                <td>${invoice.date}</td>
                <td>${invoice.company?.buyer?.name || '-'}</td>
                <td>${(invoice.items
                    ? invoice.items.reduce((sum, item) => {
                        let price = item.price * item.quantity;
                        if (item.discount && !Array.isArray(item.discount)) {
                            if (item.discount.type === 'fixed') price -= item.discount.value;
                            if (item.discount.type === 'percentage') price -= price * (item.discount.value / 100);
                        }
                        return sum + price;
                    }, 0) + (invoice.shippingPrice || 0)
                    : 0
                ).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>
                    <a href="http://127.0.0.1:5500/inv/view.html#${invoice.id}" class="btn btn-primary btn-sm">Peržiūrėti</a>
                    <a href="http://127.0.0.1:5500/inv/edit.html#${invoice.id}" class="btn btn-secondary btn-sm">Redaguoti</a>
                </td>
            </tr>
        `).join('')}
    `;
    invoiceListSection.innerHTML = html;
}

function viewInvoice(editMode = false) {
    const invoiceId = window.location.hash.slice(1);
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoice = storedInvoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        const invoiceSection = document.querySelector('[data-invoice]');
        invoiceSection.innerHTML = `<div class="alert alert-danger">Sąskaita faktūra nerasta.</div>`;
        return;
    }
    renderInvoice(invoice, editMode);
}

if (document.body.dataset.hasOwnProperty('new')) {
    newInvoice();
}

if (document.body.dataset.hasOwnProperty('list')) {
    invoicesList();
}

if (document.body.dataset.hasOwnProperty('view')) {
    viewInvoice();
}

if (document.body.dataset.hasOwnProperty('edit')) {
    viewInvoice(true);
}

const createButtonSection = document.querySelector('[data-create-button]');
if (createButtonSection) {
    const createButton = createButtonSection.querySelector('[data-save]');
    createButton.addEventListener('click', _ => {
        createInvoice(newInvoiceData);
        window.location.href = "http://127.0.0.1:5500/inv/list.html";
    });
}