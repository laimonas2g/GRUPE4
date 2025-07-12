import React from 'react';
import './InvoiceLayout.css';

export default function InvoiceLayout({
    invoice,
    editable = false,
    onChange = () => { }
}) {
    // Helper to format an ISO date to YYYY‑MM‑DD
    const fmt = iso => iso?.slice(0, 10) ?? ''; //if the left of coalescing operator ?? is null or undefined, returns what is on the right '' 

    // Calculate per‑line total
    const calcLineTotal = line => {
        const base = (Number(line.quantity) || 0) * (Number(line.price) || 0);
        let discount = 0;
        if (line.discountPercent) {
            discount = base * (line.discountPercent / 100);
        } else if (line.discountFixed) {
            discount = line.discountFixed;
        }
        return base - discount;
    };

    const subTotal = invoice.lines.reduce((sum, l) => sum + calcLineTotal(l), 0);
    const transport = Number(invoice.transport) || 0;
    const vatTotal = 0.21 * (subTotal + transport);
    const grandTotal = subTotal + transport + vatTotal;

    return (
        <div className="invoice-container">
            <h1>PVM SĄSKAITA FAKTŪRA</h1>

            {/* Invoice meta */}
            <div className="invoice-meta">
                <div><strong>Nr:</strong> {invoice.number}</div>
                <div><strong>Data:</strong> {fmt(invoice.date)}</div>
                <div><strong>Mok. iki:</strong> {fmt(invoice.paymentDue)}</div>
            </div>

            {/* Seller & Buyer */}
            <div className="buyer-seller">
                <div className="block">
                    <h4><strong>Pardavėjas</strong></h4>
                    <div><strong>Įmonė:</strong> {invoice.seller.company}</div>
                    <div><strong>Adresas:</strong> {invoice.seller.address}</div>
                    <div><strong>Kodas:</strong> {invoice.seller.code}</div>
                    <div><strong>PVM:</strong> {invoice.seller.vat}</div>
                    <div><strong>Tel.:</strong> {invoice.seller.phone}</div>
                    <div><strong>Email:</strong> {invoice.seller.email}</div>
                </div>
                <div className="block">
                    <h4><strong>Pirkėjas</strong></h4>
                    <div><strong>Įmonė:</strong> {invoice.buyer.company}</div>
                    <div><strong>Adresas:</strong> {invoice.buyer.address}</div>
                    <div><strong>Kodas:</strong> {invoice.buyer.code}</div>
                    <div><strong>PVM:</strong> {invoice.buyer.vat}</div>
                    <div><strong>Tel.:</strong> {invoice.buyer.phone}</div>
                    <div><strong>Email:</strong> {invoice.buyer.email}</div>
                </div>
            </div>

            {/* Line items */}
            <table className="lines-table">

                <colgroup>
                    <col style={{ width: '45%' }} />  {/* Prekė */}
                    <col style={{ width: '15%' }} />  {/* Kiekis */}
                    <col style={{ width: '15%' }} />  {/* Kaina */}
                    <col style={{ width: '10%' }} />  {/* Nuolaida */}
                    <col style={{ width: '15%' }} />  {/* Iš viso */}
                </colgroup>

                <thead>
                    <tr>
                        <th>Prekė</th>
                        <th>Kiekis</th>
                        <th>Kaina</th>
                        <th>Nuolaida</th>
                        <th>Iš viso</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.lines.map((line, idx) => (
                        <tr key={idx}>
                            {/* Editable description */}
                            <td>
                                {editable ? (
                                    <input
                                        type="text"
                                        value={line.description}
                                        onChange={e => onChange(idx, 'description', e.target.value)}
                                    />
                                ) : (
                                    line.description
                                )}
                            </td>

                            {/* Editable quantity, no negatives, allow empty */}
                            <td>
                                {editable ? (
                                    <input
                                        type="number"
                                        min="0"
                                        value={line.quantity === '' ? '' : line.quantity}
                                        onChange={e => {
                                            const v = e.target.value;
                                            const num = v === '' ? '' : Math.max(0, +v);
                                            onChange(idx, 'quantity', num);
                                        }}
                                    />
                                ) : (
                                    line.quantity
                                )}
                            </td>

                            {/* Editable price, no negatives */}
                            <td>
                                {editable ? (
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        value={line.price === '' ? '' : line.price}
                                        onChange={e => {
                                            const v = e.target.value;
                                            const num = v === '' ? '' : Math.max(0, +v);
                                            onChange(idx, 'price', num);
                                        }}
                                    />
                                ) : (
                                    parseFloat(line.price).toFixed(2)
                                )}
                            </td>

                            {/* Discount input unchanged */}
                            <td>
                                {editable ? (
                                    <input
                                        type="text"
                                        value={line.discountPercent ?? line.discountFixed ?? ''}
                                        onChange={e => {
                                            const v = +e.target.value;
                                            const field = isNaN(v) ? 'discountFixed' : 'discountPercent';
                                            onChange(idx, field, v);
                                        }}
                                    />
                                ) : line.discountPercent ? (
                                    `-${line.discountPercent}%`
                                ) : line.discountFixed ? (
                                    `-${line.discountFixed}`
                                ) : (
                                    '-'
                                )}
                            </td>

                            {/* Line total */}
                            <td>{calcLineTotal(line).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Totals */}
            <div className="totals">
                <div>Tarifas: {subTotal.toFixed(2)}</div>
                <div>Transportas: {transport.toFixed(2)}</div>
                <div>PVM (21%): {vatTotal.toFixed(2)}</div>
                <div><strong>Iš viso:</strong> {grandTotal.toFixed(2)}</div>
            </div>
        </div>
    );
}