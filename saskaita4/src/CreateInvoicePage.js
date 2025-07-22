
import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';
import { uuidv4 } from './uuid.js';

export default class CreateInvoicePage {

    constructor() {
        this.invoice = null;
        this.loadInvoiceFromApi(); // load fresh invoice template from the API

        if (document.querySelector("#googleTranslateElement")) {  // LANGUAGE Translate
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
                "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

            script.onload = () => {
                window.googleTranslateElementInit = () => {
                    new google.translate.TranslateElement(
                        {
                            pageLanguage: "lt",
                            includedLanguages: "lt,en,de,it,ru,be,lv,et,es,nl,fr,pl",
                        },
                        "googleTranslateElement"
                    );
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
            this.invoice = new Invoice(data); // Wrap Invoice klase, kad butu galima naudoti jos metodus
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
            tbody.appendChild(tr);// Prideda eilutę prie lentelės
        });

        /// atvaizduoja pristatymo kaina
        document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    // Metodas, kuris suformatuoja nuolaidos langelį rodymui
    renderDiscountCell(discount) {// Jei nuolaidos nėra arba ji lygi 0, grąžina tuščią tekstą
        if (!discount || discount.type === 'none' || discount.value === 0) return ''; // Jei nuolaida procentinė, grąžina procentus
        if (discount.type === 'percentage') return discount.value + '%';
        if (discount.type === 'fixed') return discount.value + ' €';
        return '';
    }

    // Hook up button event listeners for saving, refreshing, and canceling
    setupEventListeners() {
        document.getElementById('save-btn').onclick = async () => {// Priskiria išsaugojimo mygtuko paspaudimo įvykį
            await this.saveInvoice();
        };
        document.getElementById('update-btn').onclick = async () => {
            await this.loadInvoiceFromApi();
        }; // Priskiria atšaukimo mygtuko paspaudimo įvykį
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    // Asinchroninis metodas, kuris išsaugo sąskaitą per POST užklausą į backend API
    async saveInvoice() {
        if (!this.invoice.id) { // Jei sąskaita neturi ID, sugeneruoja naują unikalų ID
            this.invoice.id = uuidv4(); // Ensure unique ID
        } // Išsaugo sąskaitą per InvoiceRepository
        await InvoiceRepository.save(this.invoice); // Save to backend
        this.showMessage('Invoice saved!', false);
        setTimeout(() => window.location.href = 'read.html', 500); // Po trumpo laiko nukreipia į sąskaitų peržiūros puslapį
    }

    // Display a user message on the page
    showMessage(msg, isError = false) {
        const el = document.getElementById('message');
        el.textContent = msg;
        el.style.color = isError ? 'red' : 'green';// Nustato žinutės spalvą pagal klaidos tipą
    }
}