export class Update {
    constructor(container, number) {
        this.container = container;
        this.invoice = LocalStorage.findInvoiceByNumber(number);
        if (!this.invoice) {
            this.container.innerHTML = '<div>Invoice not found</div>';
            return;
        }
        this.render();
    }
    render() {
        const inv = this.invoice;
        this.container.innerHTML = `
            <h1>Edit Invoice</h1>
            <form id="edit-form">
                <div><b>Number:</b> ${inv.number}</div>
                <div><b>Date:</b> ${inv.date}</div>
                <div><b>Due Date:</b> ${inv.due_date}</div>
                <div><b>Seller:</b> ${inv.company.seller.name}, ${inv.company.seller.address}</div>
                <div><b>Buyer:</b> ${inv.company.buyer.name}, ${inv.company.buyer.address}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price (€)</th>
                            <th>Discount</th>
                            <th>Total (€)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${inv.items.map((item, idx) => `
                            <tr>
                                <td>${item.description}</td>
                                <td><input type="number" min="0" name="quantity-${idx}" value="${item.quantity}"></td>
                                <td>${item.price.toFixed(2)}</td>
                                <td><input type="text" name="discount-${idx}" value="${
                                    item.discount 
                                        ? (item.discount.type === 'percentage' 
                                                ? item.discount.value + '%' 
                                                : item.discount.value)
                                        : ''
                                }" placeholder="e.g. 10 or 5%"></td>
                                <td>${(item.quantity * item.price - (item.discount ? (item.discount.type === 'percentage' ? (item.quantity * item.price) * item.discount.value / 100 : item.discount.value) : 0)).toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <button type="submit">Save</button>
                <button type="button" id="cancel-btn">Cancel</button>
            </form>
            <div id="message"></div>
        `;
        this.container.querySelector('#cancel-btn').onclick = () => window.location.hash = '';
        this.container.querySelector('#edit-form').onsubmit = e => {
            e.preventDefault();
            const form = e.target;
            const items = inv.items.map((item, idx) => {
                const quantity = parseFloat(form[`quantity-${idx}`].value);
                let discountInput = form[`discount-${idx}`].value.trim();
                let discount = null;
                if (discountInput === '') {
                    discount = null;
                } else if (discountInput.endsWith('%')) {
                    const percentValue = parseFloat(discountInput.slice(0, -1));
                    if (!isNaN(percentValue)) {
                        discount = { type: 'percentage', value: percentValue };
                    } else {
                        this.showMessage('Invalid discount percentage', 'error');
                        return null;
                    }
                } else {
                    const fixedValue = parseFloat(discountInput);
                    if (!isNaN(fixedValue)) {
                        discount = { type: 'fixed', value: fixedValue };
                    } else {
                        this.showMessage('Invalid discount value', 'error');
                        return null;
                    }
                }
                if (isNaN(quantity) || quantity < 0) {
                    this.showMessage('Invalid quantity', 'error');
                    return null;
                }
                return { ...item, quantity, discount };
            });
            if (items.includes(null)) return;
            inv.items = items;
            const totals = this.calculateTotals(inv);
            Object.assign(inv, totals);
            LocalStorage.updateInvoice(inv.number, inv);
            this.showMessage('Invoice updated', 'success');
            setTimeout(() => window.location.hash = `#edit/${inv.number}`, 1000);
        };
    }
    calculateTotals(json) {
        const isVIso = json.items.reduce((sum, item) => {
            let discountKiekis = 0;
            if (
                item.discount &&
                typeof item.discount === 'object' &&
                !Array.isArray(item.discount) &&
                item.discount.type &&
                item.discount.value !== undefined
            ) {
                if (item.discount.type === 'fixed') {
                    discountKiekis = item.discount.value;
                } else if (item.discount.type === 'percentage') {
                    discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
                }
            }
            return sum + ((item.quantity * item.price) - discountKiekis);
        }, 0);
        const shipping = json.shippingPrice || 0;
        const isVIsoSuTransportavimas = isVIso + shipping;
        const vatPercent = 21;
        const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
        const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
        return {
            sumOfAllWithoutPVM21: isVIsoSuTransportavimas,
            vatAmount,
            totalPriceWithPVM21: totalWithVAT
        };
    }
    showMessage(msg, type = 'info') {
        const div = this.container.querySelector('#message');
        div.textContent = msg;
        div.className = type;
        setTimeout(() => div.textContent = '', 2000);
    }
}