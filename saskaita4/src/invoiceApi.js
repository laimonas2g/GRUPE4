export default class InvoiceApi {
    static async fetchNewInvoice() {
        const res = await fetch('https://in3.dev/inv/');
        if (!res.ok) throw new Error('Failed to fetch invoice from API');
        return await res.json();
    }
}