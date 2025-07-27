export class Main {
    constructor(container) {
        this.container = container;
        this.render();
    }
    render() {
        const invoices = LocalStorage.getInvoices();
        this.container.innerHTML = `
            <h1>VAT Invoices</h1>
            <button id="create-btn">Create New Invoice</button>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Date</th>
                        <th>Total (€)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoices.map(inv => `
                        <tr>
                            <td>${inv.number}</td>
                            <td>${inv.date}</td>
                            <td>${(inv.totalPriceWithPVM21 || 0).toFixed(2)}</td>
                            <td>
                                <button class="view-btn" data-id="${inv.number}">View</button>
                                <button class="edit-btn" data-id="${inv.number}">Edit</button>
                                <button class="delete-btn" data-id="${inv.number}">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div id="message"></div>
        `;
        this.container.querySelector('#create-btn').onclick = () => window.location.hash = '#create';
        this.container.querySelectorAll('.view-btn').forEach(btn => {
            btn.onclick = () => window.location.hash = `#view/${btn.dataset.id}`;
        });
        this.container.querySelectorAll('.edit-btn').forEach(btn => {
            btn.onclick = () => window.location.hash = `#edit/${btn.dataset.id}`;
        });
        this.container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.onclick = () => {
                if (confirm('Delete this invoice?')) {
                    LocalStorage.deleteInvoice(btn.dataset.id);
                    this.render();
                    this.showMessage('Invoice deleted', 'success');
                }
            };
        });
    }
    showMessage(msg, type = 'info') {
        const div = this.container.querySelector('#message');
        div.textContent = msg;
        div.className = type;
        setTimeout(() => div.textContent = '', 2000);
    }
}
