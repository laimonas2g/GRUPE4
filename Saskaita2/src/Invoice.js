// Handles all calculations and validation for an invoice object structure

export default class Invoice {
    constructor(data) {
        this.id = data.id ?? (Date.now().toString() + Math.random().toString(16).slice(2));
        this.number = data.number || '';
        this.date = data.date || '';
        this.due_date = data.due_date || '';
        this.company = data.company || {};
        this.items = data.items || [];
        this.shippingPrice = data.shippingPrice || 0;
        this.vatRate = 0.21; // 21% VAT, adapt as needed
        // Discounts and other fields can be managed here if needed
    }

    getSubtotal() {
        return this.items.reduce((acc, item) =>
            acc + (item.price * item.quantity), 0);
    }

    getTotalDiscount() {
        // If item discount is implemented, sum here
        return this.items.reduce((acc, item) => {
            if (Array.isArray(item.discount) && item.discount.length > 0) {
                // Implement discount calculation if needed (currently none)
                // Assume discount is an array of percentage numbers, e.g., [10] for 10%
                let lineDiscount = 0;
                item.discount.forEach(disc => {
                    lineDiscount += (item.price * item.quantity) * (disc / 100);
                });
                return acc + lineDiscount;
            }
            return acc;
        }, 0);
    }

    getVat() {
        // You may want to calculate VAT on (subtotal - discount) + shipping
        let taxable = this.getSubtotal() - this.getTotalDiscount() + this.shippingPrice;
        return taxable * this.vatRate;
    }

    getTotal() {
        return this.getSubtotal() - this.getTotalDiscount() + this.shippingPrice + this.getVat();
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