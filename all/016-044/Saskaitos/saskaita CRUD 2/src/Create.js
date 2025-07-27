export class Create {
    constructor(container) {
        this.container = container;
        this.invoice = null;
        this.render();
        this.fetchInvoice();
    }
    render() {
        this.container.innerHTML = `
            <h1>Create Invoice</h1>
            <div id="invoice-view">Loading...</div>
            <div>
                <button id="save-btn">Save</button>
                <button id="update-btn">Update</button>
                <button id="cancel-btn">Cancel</button>
            </div>
            <div id="message"></div>
        `;
        this.container.querySelector('#save-btn').onclick = () => this.save();
        this.container.querySelector('#update-btn').onclick = () => this.fetchInvoice();
        this.container.querySelector('#cancel-btn').onclick = () => window.location.hash = '';
    }
    fetchInvoice() {
        this.container.querySelector('#invoice-view').textContent = 'Loading...';
        fetch('https://in3.dev/inv/')
            .then(res => res.json())
            .then(json => {
                this.invoice = json;
                this.renderInvoice(json);
            });
    }
    renderInvoice(inv) {
        this.container.querySelector('#invoice-view').innerHTML = `
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
                    ${inv.items.map(item => `
                        <tr>
                            <td>${item.description}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>${item.discount ? (item.discount.type === 'percentage' ? '-' + item.discount.value + '%' : '-' + item.discount.value) : '0'}</td>
                            <td>${(item.quantity * item.price - (item.discount ? (item.discount.type === 'percentage' ? (item.quantity * item.price) * item.discount.value / 100 : item.discount.value) : 0)).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div><b>Shipping (€):</b> ${inv.shippingPrice ? inv.shippingPrice.toFixed(2) : '0.00'}</div>
            <div><b>Sum without VAT (€):</b> ${(inv.sumOfAllWithoutPVM21 || 0).toFixed(2)}</div>
            <div><b>VAT (21%):</b> ${(inv.vatAmount || 0).toFixed(2)}</div>
            <div><b>Total with VAT (€):</b> ${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</div>
        `;
    }
    save() {
        if (!this.invoice) return;
        // Calculate totals before saving
        const totals = this.calculateTotals(this.invoice);
        Object.assign(this.invoice, totals);
        LocalStorage.addInvoice(this.invoice);
        this.showMessage('Invoice saved', 'success');
        setTimeout(() => window.location.hash = '', 1000);
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