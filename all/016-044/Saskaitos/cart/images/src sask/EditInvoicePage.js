
// Handles displaying and updating an invoice via the backend API



import Invoice from './Invoice.js'; // Importuoja Invoice klasę
import InvoiceRepository from './InvoiceRepository.js'; // Importuoja InvoiceRepository klasę

export default class EditInvoicePage { // Eksportuoja EditInvoicePage klasę
    constructor() {
        this.invoice = null; // Pradinė invoice reikšmė - null
        this.init(); // Iškviečia pradinį metodą
    }

    // Įkelia sąskaitą-faktūrą redagavimui iš serverio
    async init() {
        const params = new URLSearchParams(window.location.search); // Sukuria URL parametrų objektą
        const id = params.get('id'); // Paimamas sąskaitos ID iš URL
        if (!id) return this.showMessage('No invoice ID provided', true); // Jei ID nėra, rodo klaidos žinutę
        this.invoice = await InvoiceRepository.get(id); // Gauna sąskaitą pagal ID iš serverio
        if (!this.invoice) return this.showMessage('Invoice not found', true); // Jei neranda, rodo klaidos žinutę
        this.renderForm(); // Atvaizduoja redagavimo formą
        this.setupEventListeners(); // Priskiria įvykių klausytojus
    }

    // Atvaizduoja visus sąskaitos laukus kaip redaguojamus formos laukus
    renderForm() {
        document.getElementById('invoice-number').textContent = this.invoice.number; // Parodo sąskaitos numerį
        document.getElementById('invoice-date').textContent = this.invoice.date; // Parodo sąskaitos datą
        document.getElementById('invoice-due-date').textContent = this.invoice.due_date; // Parodo apmokėjimo datą
        document.getElementById('seller-name').textContent = this.invoice.company?.seller?.name || ''; // Pardavėjo vardas
        document.getElementById('seller-address').textContent = this.invoice.company?.seller?.address || ''; // Pardavėjo adresas
        document.getElementById('seller-code').textContent = this.invoice.company?.seller?.code || ''; // Pardavėjo kodas
        document.getElementById('seller-vat').textContent = this.invoice.company?.seller?.vat || ''; // Pardavėjo PVM kodas
        document.getElementById('seller-phone').textContent = this.invoice.company?.seller?.phone || ''; // Pardavėjo telefonas
        document.getElementById('seller-email').textContent = this.invoice.company?.seller?.email || ''; // Pardavėjo el. paštas
        document.getElementById('buyer-name').textContent = this.invoice.company?.buyer?.name || ''; // Pirkėjo vardas
        document.getElementById('buyer-address').textContent = this.invoice.company?.buyer?.address || ''; // Pirkėjo adresas
        document.getElementById('buyer-code').textContent = this.invoice.company?.buyer?.code || ''; // Pirkėjo kodas
        document.getElementById('buyer-vat').textContent = this.invoice.company?.buyer?.vat || ''; // Pirkėjo PVM kodas
        document.getElementById('buyer-phone').textContent = this.invoice.company?.buyer?.phone || ''; // Pirkėjo telefonas
        document.getElementById('buyer-email').textContent = this.invoice.company?.buyer?.email || ''; // Pirkėjo el. paštas
        document.getElementById('shipping').value = this.invoice.shippingPrice || 0; // Pristatymo kaina

        // Atvaizduoja kiekvieną sąskaitos prekę kaip redaguojamą eilutę
        const tbody = document.getElementById('products-body'); // Gauna prekių lentelės kūną
        tbody.innerHTML = ''; // Išvalo lentelę
        this.invoice.items.forEach((item, idx) => { // Kiekvienai prekei
            const discountType = item.discount?.type || 'none'; // Nuolaidos tipas
            const discountValue = item.discount?.value || 0; // Nuolaidos reikšmė
            const tr = document.createElement('tr'); // Sukuria naują eilutę
            tr.innerHTML = `
                <td><input type="text" name="desc${idx}" value="${item.description || ''}"></td> <!-- Prekės aprašymas -->
                <td><input type="number" min="1" name="qty${idx}" value="${item.quantity || 1}"></td> <!-- Kiekis -->
                <td><input type="number" min="0" step="0.01" name="price${idx}" value="${item.price || 0}" readonly></td> <!-- Kaina -->
                <td>
                    <select name="discountType${idx}"> <!-- Nuolaidos tipas -->
                        <option value="none"${discountType === 'none' ? ' selected' : ''}>Be nuolaidos</option>
                        <option value="percentage"${discountType === 'percentage' ? ' selected' : ''}>%</option>
                        <option value="fixed"${discountType === 'fixed' ? ' selected' : ''}>€</option>
                    </select>
                    <input type="number" min="0" step="0.01" name="discountValue${idx}" value="${discountValue}"> <!-- Nuolaidos reikšmė -->
                </td>
                <td>${this.invoice.getLineTotal(item).toFixed(2)}</td> <!-- Eilutės suma -->
                <td><button type="button" style="color: red" class="remove-item-btn" data-idx="${idx}">Trinti</button></td> <!-- Trinti mygtukas -->
            `;
            tbody.appendChild(tr); // Prideda eilutę į lentelę
        });

        // Po eilučių atvaizdavimo priskiria trynimo mygtukų įvykius
        this.attachRemoveHandlers();
    }

    // Priskiria įvykių klausytojus išsaugojimui ir atšaukimui
    setupEventListeners() {
        document.getElementById('edit-form').onsubmit = async (e) => { // Formos pateikimo įvykis
            e.preventDefault(); // Neleidžia numatytam veiksmui
            this.updateInvoiceFromForm(); // Atnaujina invoice duomenis iš formos
            await InvoiceRepository.update(this.invoice); // Išsaugo pakeitimus serveryje
            this.showMessage('Invoice updated!'); // Parodo sėkmės žinutę
            setTimeout(() => window.location.href = 'read.html', 500); // Po pusės sekundės grįžta į sąrašą
        };
        document.getElementById('cancel-btn').onclick = () => window.location.href = 'read.html'; // Atšaukimo mygtukas grąžina į sąrašą
    }

    // Priskiria trynimo įvykius visiems "Trinti" mygtukams
    attachRemoveHandlers() {
        const tbody = document.getElementById('products-body'); // Gauna prekių lentelės kūną
        tbody.querySelectorAll('.remove-item-btn').forEach(btn => { // Kiekvienam trynimo mygtukui
            btn.onclick = async (e) => { // Paspaudimo įvykis
                const idx = parseInt(btn.getAttribute('data-idx'), 10); // Gauna eilutės indeksą
                this.invoice.items.splice(idx, 1); // Pašalina prekę iš sąskaitos duomenų
                await InvoiceRepository.update(this.invoice); // Iš karto atnaujina serverį
                this.renderForm(); // Iš naujo atvaizduoja formą
                this.showMessage('Line removed and invoice updated.'); // Parodo žinutę apie sėkmingą trynimą
            };
        });
    }

    // Atnaujina invoice duomenis pagal formos laukus
    updateInvoiceFromForm() {
        this.invoice.shippingPrice = parseFloat(document.getElementById('shipping').value) || 0; // Atnaujina pristatymo kainą

        // Atnaujina prekių sąrašą pagal formos eilučių duomenis
        const tbody = document.getElementById('products-body'); // Gauna lentelės kūną
        const rows = tbody.querySelectorAll('tr'); // Gauna visas eilutes
        this.invoice.items = Array.from(rows).map((tr, idx) => { // Kiekvienai eilutei
            return {
                description: tr.querySelector(`[name=desc${idx}]`).value, // Aprašymas
                quantity: parseInt(tr.querySelector(`[name=qty${idx}]`).value, 10), // Kiekis
                price: parseFloat(tr.querySelector(`[name=price${idx}]`).value), // Kaina
                discount: {
                    type: tr.querySelector(`[name=discountType${idx}]`).value, // Nuolaidos tipas
                    value: parseFloat(tr.querySelector(`[name=discountValue${idx}]`).value) || 0 // Nuolaidos reikšmė
                }
            };
        });
    }

    // Parodo būsenos žinutę
    showMessage(msg, isError = false) {
        const el = document.getElementById('message'); // Gauna žinutės elementą
        el.textContent = msg; // Nustato tekstą
        el.style.color = isError ? 'red' : 'green'; // Nustato spalvą pagal klaidos tipą
    }
}