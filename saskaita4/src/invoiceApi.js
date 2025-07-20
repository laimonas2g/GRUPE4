// invoiceApi.js
// (NOT USED in your current code; all data should go via InvoiceRepository and your backend API)

export default class InvoiceApi {
    static async fetchNewInvoice() {
        // Fetches a new invoice template from a public demo API (not your backend)
        const res = await fetch('https://in3.dev/inv/');
        if (!res.ok) throw new Error('Failed to fetch invoice from API');
        return await res.json();
    }
}