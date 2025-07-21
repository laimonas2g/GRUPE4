export default class Invoice { // Define and export the Invoice class as the default export
    constructor(data) { // Constructor initializes a new Invoice instance with provided data
        this.id = data.id || Date.now(); // Set invoice ID, use current timestamp if not provided
        this.number = data.number || ''; // Set invoice number, default to empty string
        this.date = data.date || ''; // Set invoice date, default to empty string
        this.due_date = data.due_date || ''; // Set due date, default to empty string
        this.company = data.company || {}; // Set company info, default to empty object
        // Initialize items array, mapping each item to a normalized object
        // Accepts API discount as {type, value} or []
        this.items = Array.isArray(data.items) ? data.items.map(item => ({
            description: item.description || '', // Item description, default empty
            quantity: Number(item.quantity) || 1, // Item quantity, default 1
            price: Number(item.price) || 0, // Item price, default 0
            discount: this.parseDiscount(item.discount) // Normalize discount using helper
        })) : [];
        this.shippingPrice = Number(data.shippingPrice) || 0; // Set shipping price, default 0
        this.vatRate = 0.21; // Set VAT rate to 21%
    }

    // Helper to normalize discount input into a standard object
    parseDiscount(discount) {
        // Accepts {type, value}, [], number, or null
        if (!discount || (Array.isArray(discount) && discount.length === 0)) {
            return { type: 'none', value: 0 }; // No discount
        }
        if (typeof discount === 'number') {
            return { type: 'fixed', value: discount }; // Fixed amount discount
        }
        if (typeof discount === 'object' && 'type' in discount && 'value' in discount) {
            return { type: discount.type, value: Number(discount.value) || 0 }; // Use provided type and value
        }
        return { type: 'none', value: 0 }; // Fallback to no discount
    }

    // Calculate the discount amount for a single item
    getLineDiscount(item) {
        // If no valid discount, return 0
        if (!item.discount || !item.discount.type || !item.discount.value) return 0;
        if (item.discount.type === 'percentage') {
            // Calculate percentage discount on (price * quantity)
            return (item.price * item.quantity) * (item.discount.value / 100);
        }
        if (item.discount.type === 'fixed') {
            return item.discount.value; // Fixed discount value
        }
        return 0; // No discount
    }

    // Calculate total for a single item after discount
    getLineTotal(item) {
        // Subtract discount from (price * quantity)
        return (item.price * item.quantity) - this.getLineDiscount(item);
    }

    // Calculate subtotal for all items (after discounts, before VAT and shipping)
    getSubtotal() {
        // Sum all line totals
        return this.items.reduce((acc, item) => acc + this.getLineTotal(item), 0);
    }

    // Calculate total discount for all items
    getTotalDiscount() {
        // Sum all line discounts
        return this.items.reduce((acc, item) => acc + this.getLineDiscount(item), 0);
    }

    // Calculate VAT on subtotal plus shipping
    getVat() {
        // VAT is applied to (subtotal + shipping)
        const taxable = this.getSubtotal() + this.shippingPrice;
        return taxable * this.vatRate;
    }

    // Calculate grand total (subtotal + shipping + VAT)
    getTotal() {
        return this.getSubtotal() + this.shippingPrice + this.getVat();
    }

    // Validate invoice data
    isValid() {
        return (
            !isNaN(this.getTotal()) && // Total must be a valid number
            Array.isArray(this.items) && // Items must be an array
            this.items.length > 0 && // Must have at least one item
            this.items.every(p => p.quantity > 0 && p.price >= 0) // All items must have positive quantity and non-negative price
        );
    }
}