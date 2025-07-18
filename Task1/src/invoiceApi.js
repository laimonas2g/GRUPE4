async function fetchInvoiceFromApi() {
  const res = await fetch('/api/invoice');
  if (!res.ok) throw new Error('Failed to fetch invoice');
  return await res.json();
}