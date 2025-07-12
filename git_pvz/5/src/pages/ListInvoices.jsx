import { useEffect, useState } from 'react';
import { fetchAll, deleteInv } from '../api/invoices';
import { useNavigate } from 'react-router-dom';
import './ListInvoices.css';

export default function ListInvoices() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

      // Helper to format an ISO date to YYYY‑MM‑DD
      const fmt = iso => iso?.slice(0, 10) ?? ''; //if the left of coalescing operator ?? is null or undefined, returns what is on the right '' 


  // Calculate total for a single invoice
  const calcTotal = invoice => {
    const sub = invoice.lines.reduce((sum, line) => {
      const base = line.quantity * line.price;
      let discount = 0;
      if (Array.isArray(line.discount) && line.discount.length === 0) {
        discount = 0;
      } else if (line.discount?.type === 'fixed') {
        discount = line.discount.value;
      } else if (line.discount?.type === 'percent') {
        discount = base * (line.discount.value / 100);
      }
      return sum + (base - discount);
    }, 0);
    const transport = invoice.shippingPrice ?? 0;
    const vat = 0.21 * (sub + transport);
    return sub + transport + vat;
  };

  // Load all invoices
  const loadInvoices = async () => {
    setLoading(true);
    setMsg('');
    try {
      const res = await fetchAll();
      setList(res.data.list);
    } catch (err) {
      console.error(err);
      setMsg('Klaida kraunant sąskaitas.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  // Delete handler
  const handleDelete = async id => {
    if (!confirm('Ar tikrai norite ištrinti šią sąskaitą?')) return;
    try {
      await deleteInv(id);
      setMsg('Sąskaita ištrinta.');
      loadInvoices();
    } catch (err) {
      console.error(err);
      setMsg('Ištrynimas nepavyko.');
    }
  };

  if (loading) return <p>Įkeliama…</p>;

  return (
    <div className="list-container">
      <h2>Visos Sąskaitos</h2>
      {msg && <div className="message">{msg}</div>}
      <table className="list-table">
        <thead>
          <tr>
            <th>Nr</th>
            <th>Data</th>
            <th>Iš viso</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {list.map(inv => (
            <tr key={inv.id}>
              <td>{inv.number}</td>
              <td>{fmt(inv.date)}</td>
              <td>{calcTotal(inv).toFixed(2)}</td>
              <td className="actions">
                <button onClick={() => navigate(`/view/${inv.id}`)}>
                  Žiūrėti
                </button>
                <button onClick={() => navigate(`/edit/${inv.id}`)}>
                  Redaguoti
                </button>
                <button onClick={() => handleDelete(inv.id)}>
                  Trinti
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}