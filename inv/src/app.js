import axios from 'axios';

const apiUrl = 'https://in3.dev/inv/';

function renderInvoice() {

    axios.get(apiUrl)
        .then(res => {
            const invoice = res.data;

            function formatDiscount(discount) {
                if (!discount || Array.isArray(discount)) return '-';
                if (discount.type === 'fixed') return discount.value.toFixed(2);
                if (discount.type === 'percentage') return discount.value + '%';
                return '-';
            }

            function calcItemTotal(item) {
                let price = item.price * item.quantity;
                if (item.discount && !Array.isArray(item.discount)) {
                    if (item.discount.type === 'fixed') price -= item.discount.value;
                    if (item.discount.type === 'percentage') price -= price * (item.discount.value / 100);
                }
                return price;
            }

            const itemsHtml = invoice.items.map((item, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${formatDiscount(item.discount)}</td>
                <td>${calcItemTotal(item).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
        `).join('');

            const itemsTotal = invoice.items.reduce((sum, item) => sum + calcItemTotal(item), 0);
            const withShippingTotal = itemsTotal + (invoice.shippingPrice || 0);
            const vat = withShippingTotal * 0.21;
            const grandTotal = withShippingTotal + vat;

            const html = `
            <div class="container my-5">
                <div class="row mb-4">
                    <div class="col-md-12 text-md-start mb-3">
                        <h2>Sąskaita faktūra</h2>
                        <p class="mb-0"><strong>Nr.:</strong> ${invoice.number}</p>
                        <p class="mb-0"><strong>Data:</strong> ${invoice.date}</p>
                        <p class="mb-0"><strong>Apmokėti iki:</strong> ${invoice.due_date}</p>
                    </div>
                    <div class="col-md-6 text-md-start">
                        <h5>Pardavėjas</h5>
                        <p><strong>${invoice.company.seller.name}</strong><br>
                            ${invoice.company.seller.address}<br>
                            Įmonės kodas: ${invoice.company.seller.code}<br>
                            PVM kodas: ${invoice.company.seller.vat}<br>
                            Tel.: ${invoice.company.seller.phone}<br>
                            El. paštas: ${invoice.company.seller.email}
                        </p>
                    </div>
                    <div class="col-md-6 text-md-start">
                        <h5>Pirkėjas</h5>
                        <p><strong>${invoice.company.buyer.name}</strong><br>
                            ${invoice.company.buyer.address}<br>
                            Įmonės kodas: ${invoice.company.buyer.code}<br>
                            PVM kodas: ${invoice.company.buyer.vat}<br>
                            Tel.: ${invoice.company.buyer.phone}<br>
                            El. paštas: ${invoice.company.buyer.email}
                        </p>
                    </div>
                </div>
                <div class="table-responsive mb-4">
                    <table class="table table-bordered align-middle">
                        <thead class="table-light">
                            <tr>
                                <th>#</th>
                                <th>Prekės aprašymas</th>
                                <th>Kiekis</th>
                                <th>Kaina (€)</th>
                                <th>Nuolaida</th>
                                <th>Suma (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="5" class="text-end">Pristatymas</td>
                                <td>${(invoice.shippingPrice || 0).toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-end">PVM (21%)</td>
                                <td>${vat.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-end fw-bold">Iš viso</td>
                                <td class="fw-bold">${grandTotal.toLocaleString('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <p><strong>Pastabos:</strong> Prašome apmokėti iki nurodytos datos.</p>
                    </div>
                </div>
            </div>
        `;

            document.body.innerHTML = html;

        })
        .catch(error => {
            console.error('Klaida gaunant duomenis:', error);
            document.body.innerHTML = `<div class="container my-5"><div class="alert alert-danger">Nepavyko gauti duomenų.</div></div>`;
        })

}

renderInvoice();