import { useEffect, useState, useCallback } from 'react';
import { fetchAll, updateInv } from '../api/invoices';
import { useParams, useNavigate } from 'react-router-dom';
import InvoiceLayout from '../components/InvoiceLayout';
import './EditInvoice.css';

export default function EditInvoice() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [invoice, setInvoice]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [msg, setMsg]           = useState('');
  const [error, setError]       = useState('');

  // 1) Load invoice by id
  const loadInvoice = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetchAll();
      const inv = res.data.list.find(i => String(i.id) === id);
      if (!inv) {
        setError('Sąskaita nerasta.');
      } else {
        setInvoice(inv);
      }
    } catch (e) {
      console.error(e);
      setError('Klaida kraunant sąskaitą.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadInvoice();
  }, [loadInvoice]);

  // 2) Handle edits to line items
  const handleLineChange = (idx, field, value) => {
    setInvoice(inv => {
      const lines = [...inv.lines];
      lines[idx] = { ...lines[idx], [field]: value };
      return { ...inv, lines };
    });
  };

  // 3) Save updates
  const handleSave = async () => {
    if (!invoice) return;
    setMsg('');
    try {
      await updateInv(id, invoice);
      setMsg('Atnaujinta!');
      // reload so server‑computed totals sync (optional)
      await loadInvoice();
    } catch (e) {
      console.error(e);
      alert('Klaida atnaujinant sąskaitą.');
    }
  };

  if (loading) return <p>Įkeliama…</p>;
  if (error)   return <p className="error">{error}</p>;

  return (
    <div className="edit-page">
      {msg && <div className="message">{msg}</div>}

      <InvoiceLayout
        invoice={invoice}
        editable={true}
        onChange={handleLineChange}
      />

      <div className="edit-buttons">
        <button onClick={handleSave}>Išsaugoti</button>
        <button onClick={() => navigate('/list')}>Atšaukti</button>
      </div>
    </div>
  );
}