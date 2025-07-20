// Invoice.js
// Pure data model class for Invoice, provides calculations and validation

export default class Invoice {
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
        if (!discount || (Array.isArray(discount) && discount.length === 0)) {
            return { type: 'none', value: 0 };
        }
        if (typeof discount === 'number') {
            return { type: 'fixed', value: discount };
        }
        if (typeof discount === 'object' && 'type' in discount && 'value' in discount) {
            return { type: discount.type, value: Number(discount.value) || 0 };
        }
        return { type: 'none', value: 0 };
    }

    // Calculate discount amount for a line item
    getLineDiscount(item) {
        if (!item.discount || !item.discount.type || !item.discount.value) return 0;
        if (item.discount.type === 'percentage') {
            // percent of price * qty
            return (item.price * item.quantity) * (item.discount.value / 100);
        }
        if (item.discount.type === 'fixed') {
            return item.discount.value;
        }
        return 0;
    }

    // Calculate line total after discount
    getLineTotal(item) {
        return (item.price * item.quantity) - this.getLineDiscount(item);
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
        return (
            !isNaN(this.getTotal()) &&
            Array.isArray(this.items) &&
            this.items.length > 0 &&
            this.items.every(p => p.quantity > 0 && p.price >= 0)
        );
    }
}