
export default class Invoice {
    
    constructor(data) {
        
        this.id = data.id || Date.now(); /* priskiria saskaitos ID arba sugeneruoja nauja pagal laika */
        console.log(data.id);
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
        // Jei nuolaidos nėra arba ji tuščia, grąžina 'none' tipo nuolaidą su 0 verte
        if (!discount || (Array.isArray(discount) && discount.length === 0)) {
            return { type: 'none', value: 0 };
        } console.log(discount);
        if (typeof discount === 'number') {
            return { type: 'fixed', value: discount };
        }
         // Jei nuolaida yra objektas su 'type' ir 'value', normalizuoja vertę
        if (typeof discount === 'object' && 'type' in discount && 'value' in discount) {
            return { type: discount.type, value: Number(discount.value) || 0 };
        } 
        return { type: 'none', value: 0 };
    }   

    // calculate discount amount for a line item
    getLineDiscount(item) {
        if (!item.discount || !item.discount.type || !item.discount.value) return 0;
        if (item.discount.type === 'percentage') {
            // percent of price * qty
            return (item.price * item.quantity) * (item.discount.value / 100);
        } console.log(item);
          // jei nuolaida fiksuota suma, grazina jos verte.
        if (item.discount.type === 'fixed') {
            return item.discount.value;
        }
        return 0;
    }

    // Apskaičiuoja eilutės sumą po nuolaidos
    getLineTotal(item) {
        return (item.price * item.quantity) - this.getLineDiscount(item);
        
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
        return (
            !isNaN(this.getTotal()) &&
            Array.isArray(this.items) &&
            this.items.length > 0 &&
            this.items.every(p => p.quantity > 0 && p.price >= 0)
        );
    }
}