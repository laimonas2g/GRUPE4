// src/pages/CreateInvoice.jsx
import { useEffect, useState } from 'react';
import { createInv } from '../api/invoices';
import { useNavigate } from 'react-router-dom';
import InvoiceLayout from '../components/InvoiceLayout';
import './CreateInvoice.css';

export default function CreateInvoice() {
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  // 1) Fetch from in3.dev on mount (or on refresh)
  const fetchExternal = async () => {
    setLoading(true);
    setErr('');
    try {
      const res = await fetch('https://in3.dev/inv/');
      const data = await res.json();
      console.log('Raw API invoice:', data);

      // 2) Normalize into our internal shape:
      const normalized = {
        number: data.number,
        date: data.date,
        paymentDue: data.due_date,
        buyer: {
          company: data.company.buyer.name,
          address: data.company.buyer.address,
          code: data.company.buyer.code,
          country: '',            // (no country in API—fill or leave blank)
          vat: data.company.buyer.vat,
          phone: data.company.buyer.phone,
          email: data.company.buyer.email
        },
        seller: {
          company: data.company.seller.name,
          address: data.company.seller.address,
          code: data.company.seller.code,
          vat: data.company.seller.vat,
          phone: data.company.seller.phone,
          email: data.company.seller.email
        },
        lines: data.items.map(item => ({
          description:   item.description,
          quantity:      item.quantity,
          price:         item.price,
          discountFixed:   item.discount?.type === 'fixed'   ? item.discount.value : 0,
          discountPercent: item.discount?.type === 'percent' ? item.discount.value : 0
        })),
        transport: data.shippingPrice
      };

      console.log('Normalized invoice:', normalized);
      setInvoice(normalized);
    } catch (e) {
      console.error(e);
      setErr('Klaida gaunant duomenis iš API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExternal();
  }, []);

  // 3) Save into our back‑end
  const handleSave = async () => {
    if (!invoice) return;
    try {
      await createInv(invoice);
      navigate('/list');
    } catch (e) {
      console.error('Save error:', e.response || e.message);
      alert('Klaida išsaugant sąskaitą.');
    }
  };

  if (loading) return <p>Įkeliama…</p>;
  if (err)     return <p className="error">{err}</p>;

  return (
    <div className="create-page">
      
      <div className="buttons">
        <button onClick={handleSave}>Išsaugoti</button>
        <button onClick={fetchExternal}>Atnaujinti</button>
        <button onClick={() => navigate('/list')}>Atšaukti</button>
      </div>


      <InvoiceLayout invoice={invoice} editable={false} />
    </div>
  );
}