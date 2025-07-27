
// pure data model class for Invoice, provides calculations and validation

// Eksportuoja Invoice klasę kaip numatytąjį modulį
export default class Invoice {
    // Konstruktorius inicializuoja Invoice objektą su perduotais duomenimis
    constructor(data) {
        // Priskiria sąskaitos ID arba sugeneruoja naują pagal laiką
        this.id = data.id || Date.now();
        // Priskiria sąskaitos numerį arba tuščią eilutę
        this.number = data.number || '';
        // Priskiria sąskaitos datą arba tuščią eilutę
        this.date = data.date || '';
        // Priskiria sąskaitos apmokėjimo terminą arba tuščią eilutę
        this.due_date = data.due_date || '';
        // Priskiria įmonės duomenis arba tuščią objektą
        this.company = data.company || {};
        // Normalizuoja prekių sąrašą ir nuolaidas
        this.items = Array.isArray(data.items) ? data.items.map(item => ({
            // Priskiria prekės aprašymą arba tuščią eilutę
            description: item.description || '',
            // Priskiria kiekį arba 1
            quantity: Number(item.quantity) || 1,
            // Priskiria kainą arba 0
            price: Number(item.price) || 0,
            // Normalizuoja nuolaidą naudojant parseDiscount metodą
            discount: this.parseDiscount(item.discount)
        })) : [];
        // Priskiria pristatymo kainą arba 0
        this.shippingPrice = Number(data.shippingPrice) || 0;
        // Nustato PVM tarifą (21%)
        this.vatRate = 0.21; 
    }

    // Normalizuoja nuolaidos įvestį į standartinį objektą
    parseDiscount(discount) {
        // Jei nuolaidos nėra arba ji tuščia, grąžina 'none' tipo nuolaidą su 0 verte
        if (!discount || (Array.isArray(discount) && discount.length === 0)) {
            return { type: 'none', value: 0 };
        }
        // Jei nuolaida yra skaičius, laikoma fiksuota suma
        if (typeof discount === 'number') {
            return { type: 'fixed', value: discount };
        }
        // Jei nuolaida yra objektas su 'type' ir 'value', normalizuoja vertę
        if (typeof discount === 'object' && 'type' in discount && 'value' in discount) {
            return { type: discount.type, value: Number(discount.value) || 0 };
        }
        // Kitais atvejais grąžina 'none' tipo nuolaidą su 0 verte
        return { type: 'none', value: 0 };
    }

    // Apskaičiuoja nuolaidos sumą vienai eilutei
    getLineDiscount(item) {
        // Jei nėra nuolaidos arba jos reikšmė 0, grąžina 0
        if (!item.discount || !item.discount.type || !item.discount.value) return 0;
        // Jei nuolaida procentinė, apskaičiuoja procentą nuo kainos * kiekio
        if (item.discount.type === 'percentage') {
            // procentas nuo kainos * kiekio
            return (item.price * item.quantity) * (item.discount.value / 100);
        }
        // Jei nuolaida fiksuota suma, grąžina jos vertę
        if (item.discount.type === 'fixed') {
            return item.discount.value;
        }
        // Kitais atvejais grąžina 0
        return 0;
    }

    // Apskaičiuoja eilutės sumą po nuolaidos
    getLineTotal(item) {
        // Kaina * kiekis minus nuolaida
        return (item.price * item.quantity) - this.getLineDiscount(item);
    }

    // Apskaičiuoja tarpines sumas (po nuolaidų, prieš PVM)
    getSubtotal() {
        // Sudeda visų eilučių sumas
        return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
    }

    // Apskaičiuoja bendrą nuolaidų sumą visai sąskaitai
    getTotalDiscount() {
        // Sudeda visų eilučių nuolaidas
        return this.items.reduce((acc, item) => acc + this.getLineDiscount(item), 0);
    }

    // Apskaičiuoja PVM nuo tarpinės sumos ir pristatymo kainos
    getVat() {
        // Prideda tarpinę sumą ir pristatymo kainą
        const taxable = this.getSubtotal() + this.shippingPrice;
        // Apskaičiuoja PVM
        return taxable * this.vatRate;
    }

    // Apskaičiuoja galutinę sumą (tarpinė suma + pristatymas + PVM)
    getTotal() {
        return this.getSubtotal() + this.shippingPrice + this.getVat();
    }

    // Patikrina ar sąskaita galioja (pagrindinė validacija)
    isValid() {
        return (
            // Patikrina ar suma yra skaičius
            !isNaN(this.getTotal()) &&
            // Patikrina ar prekių sąrašas yra masyvas
            Array.isArray(this.items) &&
            // Patikrina ar yra bent viena prekė
            this.items.length > 0 &&
            // Patikrina ar kiekvienos prekės kiekis > 0 ir kaina >= 0
            this.items.every(p => p.quantity > 0 && p.price >= 0)
        );
    }
}