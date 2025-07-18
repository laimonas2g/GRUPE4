export default class Invoice {
    constructor(data) {
        this.id = data.id || Date.now();
        this.number = data.number || '';
        this.date = data.date || '';
        this.due_date = data.due_date || '';
        this.company = data.company || {};
        this.items = Array.isArray(data.items) ? data.items.map(item => ({
            description: item.description || '',
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
            discount: Number(item.discount) || 0
        })) : [];
        this.shippingPrice = Number(data.shippingPrice) || 0;
        this.vatRate = 0.21;
    }

    getLineTotal(item) {
        // Discount is per line, not per unit!
        return (item.quantity * item.price) - item.discount;
    }

    getSubtotal() {
        // Subtotal is sum of line totals (before VAT)
        return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
    }

    getTotalDiscount() {
        // Total discount is sum of discounts per line
        return this.items.reduce((acc, item) => acc + (item.discount || 0), 0);
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