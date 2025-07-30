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

function renderInvoice(data) {
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
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${formatDiscount(item.discount)}</td>
                <td>${calcItemTotal(item).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
        `).join('');

    const itemsTotal = invoice.items.reduce((sum, item) => sum + calcItemTotal(item), 0);
    const withShippingTotal = itemsTotal + (invoice.shippingPrice || 0);
    const vat = withShippingTotal * 0.21;
    const grandTotal = withShippingTotal + vat;

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
                            <td>${vat.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        </tr>
                        <tr>
                            <td colspan="5" class="text-end fw-bold">Iš viso</td>
                            <td class="fw-bold">${grandTotal.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
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
}

function createInvoice(data) {
    const invoiceId = v4();
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoiceToSave = { id: invoiceId, ...data };
    storedInvoices.push(invoiceToSave);
    localStorage.setItem(localStorageKey, JSON.stringify(storedInvoices));
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
                </td>
            </tr>
        `).join('')}
    `;
    invoiceListSection.innerHTML = html;
}

function viewInvoice() {
    const invoiceId = window.location.hash.slice(1);
    const storedInvoices = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const invoice = storedInvoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        const invoiceSection = document.querySelector('[data-invoice]');
        invoiceSection.innerHTML = `<div class="alert alert-danger">Sąskaita faktūra nerasta.</div>`;
        return;
    }
    renderInvoice(invoice);
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


const createButtonSection = document.querySelector('[data-create-button]');
if (createButtonSection) {
    const createButton = createButtonSection.querySelector('[data-save]');
    createButton.addEventListener('click', _ => {
        createInvoice(newInvoiceData);
        window.location.href = "http://127.0.0.1:5500/inv/list.html";
    });
}