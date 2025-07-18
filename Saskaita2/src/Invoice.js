// Handles all calculations and validation for an invoice object structure

export default class Invoice {
    constructor(data) {
        this.id = data.id || Date.now();
        this.number = data.number || '';
        this.date = data.date || '';
        this.due_date = data.due_date || '';
        this.company = data.company || {};
        // Each item: { description, quantity, price, discount }
        this.items = Array.isArray(data.items) ? data.items.map(item => ({
            description: item.description || '',
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0,
            discount: Number(item.discount) || 0
        })) : [];
        this.shippingPrice = Number(data.shippingPrice) || 0;
        this.vatRate = 0.21; // 21% VAT, adapt as needed
    }

    getSubtotal() {
        return this.items.reduce((acc, item) =>
            acc + (item.price * item.quantity), 0);
    }

    getTotalDiscount() {
        return this.items.reduce((acc, item) =>
            acc + (item.discount || 0), 0);
    }

    getVat() {
        const taxable = this.getSubtotal() - this.getTotalDiscount() + this.shippingPrice;
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