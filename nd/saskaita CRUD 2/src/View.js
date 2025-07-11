export class View {
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
            <h1>View Invoice</h1>
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
            <button id="back-btn">Back</button>
        `;
        this.container.querySelector('#back-btn').onclick = () => window.location.hash = '';
    }
}