
/* displaying and saving a new invoice via the backend API */

/* Importuoja puslapių logikos klases */
import Invoice from './Invoice.js';
import InvoiceRepository from './InvoiceRepository.js';
import { uuidv4 } from './uuid.js';

// Eksportuoja CreateInvoicePage klasę kaip numatytąjį modulį
export default class CreateInvoicePage {
    // Konstruktorius, kuris inicijuoja klasės objektą
    constructor() {
        // Pradinė invoice reikšmė - null
        this.invoice = null;
        // Iškviečia metodą, kuris užkrauna naują sąskaitos šabloną iš API
        this.loadInvoiceFromApi(); // Užkrauna naują sąskaitos šabloną iš API
    }

    // Asinchroninis metodas, kuris užkrauna sąskaitos šabloną iš išorinio API
    async loadInvoiceFromApi() {
        try {
            // Atlieka HTTP užklausą į API
            const res = await fetch('https://in3.dev/inv/');
            // Gautą atsakymą konvertuoja į JSON objektą
            const data = await res.json();
            // Sukuria naują Invoice objektą su gautais duomenimis
            this.invoice = new Invoice(data); // Apgaubia Invoice klase, kad būtų galima naudoti jos metodus
            // Atvaizduoja formą su sąskaitos duomenimis
            this.renderForm();
            // Priskiria mygtukų įvykių klausytojus
            this.setupEventListeners();
        } catch (e) {
            // Jei įvyksta klaida, parodo klaidos žinutę vartotojui
            this.showMessage('Failed to fetch invoice from API', true);
        }
    }

    // Metodas, kuris atvaizduoja sąskaitos laukus formoje (tik skaitymui)
    renderForm() {
        // Atvaizduoja sąskaitos numerį
        document.getElementById('invoice-number').textContent = this.invoice.number;
        // Atvaizduoja sąskaitos datą
        document.getElementById('invoice-date').textContent = this.invoice.date;
        // Atvaizduoja sąskaitos apmokėjimo terminą
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date;
        // Atvaizduoja pardavėjo pavadinimą
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || '';
        // Atvaizduoja pardavėjo adresą
        document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || '';
        // Atvaizduoja pardavėjo kodą
        document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || '';
        // Atvaizduoja pardavėjo PVM kodą
        document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || '';
        // Atvaizduoja pardavėjo telefono numerį
        document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || '';
        // Atvaizduoja pardavėjo el. paštą
        document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || '';
        // Atvaizduoja pirkėjo pavadinimą
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || '';
        // Atvaizduoja pirkėjo adresą
        document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || '';
        // Atvaizduoja pirkėjo kodą
        document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || '';
        // Atvaizduoja pirkėjo PVM kodą
        document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || '';
        // Atvaizduoja pirkėjo telefono numerį
        document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || '';
        // Atvaizduoja pirkėjo el. paštą
        document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || '';

        // Suranda produktų lentelės kūną
        const tbody = document.getElementById('products-body');
        // Išvalo ankstesnius produktų įrašus
        tbody.innerHTML = '';
        // Kiekvienam sąskaitos produktui sukuria naują eilutę lentelėje
        this.invoice.items.forEach(item => {
            // Sukuria naują <tr> elementą
            const tr = document.createElement('tr');
            // Užpildo eilutę produkto duomenimis
            tr.innerHTML = `
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${this.renderDiscountCell(item.discount)}</td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td>
            `;
            // Prideda eilutę prie lentelės
            tbody.appendChild(tr);
        });

        // Atvaizduoja pristatymo kainą
        document.getElementById('shipping').textContent = this.invoice.shippingPrice?.toFixed(2) || '0.00';
        // Atvaizduoja tarpines sumas
        document.getElementById('subtotal').textContent = this.invoice.getSubtotal().toFixed(2);
        // Atvaizduoja PVM sumą
        document.getElementById('vat').textContent = this.invoice.getVat().toFixed(2);
        // Atvaizduoja bendrą nuolaidą
        document.getElementById('discount').textContent = this.invoice.getTotalDiscount().toFixed(2);
        // Atvaizduoja galutinę sumą
        document.getElementById('total').textContent = this.invoice.getTotal().toFixed(2);
    }

    // Metodas, kuris suformatuoja nuolaidos langelį rodymui
    renderDiscountCell(discount) {
        // Jei nuolaidos nėra arba ji lygi 0, grąžina tuščią tekstą
        if (!discount || discount.type === 'none' || discount.value === 0) return '';
        // Jei nuolaida procentinė, grąžina procentus
        if (discount.type === 'percentage') return discount.value + '%';
        // Jei nuolaida fiksuota, grąžina sumą su valiuta
        if (discount.type === 'fixed') return discount.value + ' €';
        // Kitais atvejais grąžina tuščią tekstą
        return '';
    }

    // Metodas, kuris priskiria mygtukų įvykių klausytojus
    setupEventListeners() {
        // Priskiria išsaugojimo mygtuko paspaudimo įvykį
        document.getElementById('save-btn').onclick = async () => {
            await this.saveInvoice();
        };
        // Priskiria atnaujinimo mygtuko paspaudimo įvykį
        document.getElementById('update-btn').onclick = async () => {
            await this.loadInvoiceFromApi();
        };
        // Priskiria atšaukimo mygtuko paspaudimo įvykį
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html';
    }

    // Asinchroninis metodas, kuris išsaugo sąskaitą per POST užklausą į backend API
    async saveInvoice() {
        // Jei sąskaita neturi ID, sugeneruoja naują unikalų ID
        if (!this.invoice.id) {
            this.invoice.id = uuidv4(); // Užtikrina unikalų ID
        }
        // Išsaugo sąskaitą per InvoiceRepository
        await InvoiceRepository.save(this.invoice); // Išsaugo backend'e
        // Parodo sėkmės žinutę vartotojui
        this.showMessage('Invoice saved!', false);
        // Po trumpo laiko nukreipia į sąskaitų peržiūros puslapį
        setTimeout(() => window.location.href = 'read.html', 500);
    }

    // Metodas, kuris parodo vartotojui žinutę puslapyje
    showMessage(msg, isError = false) {
        // Suranda žinutės elementą puslapyje
        const el = document.getElementById('message');
        // Nustato žinutės tekstą
        el.textContent = msg;
        // Nustato žinutės spalvą pagal klaidos tipą
        el.style.color = isError ? 'red' : 'green';
    }
}