import { useEffect, useState } from 'react';
import { fetchAll } from '../api/invoices';
import { useParams, useNavigate } from 'react-router-dom';
import InvoiceLayout from '../components/InvoiceLayout';
import './ViewInvoice.css';

export default function ViewInvoice() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [invoice, setInvoice] = useState(null);
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetchAll();
                const found = res.data.list.find(inv => String(inv.id) === id);
                if (!found) {
                    setMsg('Sąskaita rasta.');
                } else {
                    setInvoice(found);
                }
            } catch (err) {
                console.error(err);
                setMsg('Klaida kraunant sąskaitą.');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [id]);

    if (loading) return <p>Įkeliama…</p>;
    if (msg) return <p className="error">{msg}</p>;

    return (
        <div className="view-page">
            <InvoiceLayout invoice={invoice} editable={false} />
            <div className="view-buttons">

                <button onClick={() => window.print()}>
                    Spausdinti
                </button>

                <button onClick={() => navigate('/list')}>Atgal į sąrašą</button>
            </div>
        </div>
    );
}