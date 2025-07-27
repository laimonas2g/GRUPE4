export default class Invoice {
    constructor(data) {
        this.id = data.id || Date.now();
        this.number = data.number || '';
        this.date = data.date || '';
        this.due_date = data.due_date || '';
        this.company = data.company || {};
        // Accept API discount as {type, value} or []
        this.items = Array.isArray(data.items) ? data.items.map(item => ({
            description: item.description || '',
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
            discount: this.parseDiscount(item.discount)
        })) : [];
        this.shippingPrice = Number(data.shippingPrice) || 0;
        this.vatRate = 0.21;
    }

    parseDiscount(discount) {
        // Accept {type, value}, [], number, or null
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

    getLineTotal(item) {
        // Discount is subtracted
        return (item.price * item.quantity) - this.getLineDiscount(item);
    }

    getSubtotal() {
        // Sum of line totals (before VAT, after discount)
        return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
    }

    getTotalDiscount() {
        // Total discount is sum of all line discounts
        return this.items.reduce((acc, item) => acc + this.getLineDiscount(item), 0);
    }

    getVat() {
        // VAT is on (subtotal + shipping)
        const taxable = this.getSubtotal() + this.shippingPrice;
        return taxable * this.vatRate;
    }

    getTotal() {
        return this.getSubtotal() + this.shippingPrice + this.getVat();
    }

    isValid() {
        return (
            !isNaN(this.getTotal()) &&
            Array.isArray(this.items) &&
            this.items.length > 0 &&
            this.items.every(p => p.quantity > 0 && p.price >= 0)
        );
    }
}