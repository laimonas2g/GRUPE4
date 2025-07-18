import InvoiceRepository from '../storage/InvoiceRepository.js';
import Invoice from '../models/Invoice.js';

export default class CreateController {
  constructor() {
    this.form = document.getElementById('create-form');
    this.loadFromAPI();
    this.bindEvents();
  }

  async loadFromAPI() {
    const res = await fetch('https://in3.dev/inv/');
    const data = await res.json();
    this.currentInvoice = Invoice.fromAPI(data);
    this.render();
  }

  render() {
    document.getElementById('invoice-number').textContent = this.currentInvoice.number;
    document.getElementById('invoice-date').textContent = this.currentInvoice.date;
    // Render products table, etc.
  }

  bindEvents() {
    document.getElementById('save-btn').onclick = () => {
      InvoiceRepository.save(this.currentInvoice);
      alert('Saved!');
      window.location = 'list.html';
    };
    document.getElementById('update-btn').onclick = () => this.loadFromAPI();
    document.getElementById('cancel-btn').onclick = () => window.location = 'list.html';
  }
}