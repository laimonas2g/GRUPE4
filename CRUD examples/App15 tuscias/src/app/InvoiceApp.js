// /src/app/InvoiceApp.js

import Invoice from '../classes/Invoice.js';
import Sidebar from '../classes/Sidebar.js';

import InvoiceEditor from '../classes/InvoiceEditor.js';


export default class InvoiceApp {
  constructor() {
    this.invoices = JSON.parse(localStorage.getItem('invoices')) || [];
    this.sidebar = new Sidebar(this);
    this.container = document.getElementById('invoice-display');

    this.invoiceEditor = new InvoiceEditor(this);


    this.init();
  }

  init() {
    this.sidebar.render(this.invoices);
    if (this.invoices.length > 0) {
      this.renderInvoice(0);
    }
  }

  async fetchInvoiceFromAPI() {
    try {
      const response = await fetch('https://in3.dev/inv/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Klaida gaunant sąskaitą iš API:", error);
    }
  }

  addInvoice(invoiceData) {
    this.invoices.push(invoiceData);
    this.saveInvoicesToLocalStorage();
    this.sidebar.render(this.invoices, this.invoices.length - 1);
    this.renderInvoice(this.invoices.length - 1);
  }

  deleteInvoice(index) {
    this.invoices.splice(index, 1);
    this.saveInvoicesToLocalStorage();
    this.sidebar.render(this.invoices, 0);

    if (this.invoices.length > 0) {
      this.renderInvoice(0);
    } else {
      this.container.innerHTML = '';
    }
  }

  renderInvoice(index) {
    const invoice = new Invoice(this.invoices[index], index, this);
    invoice.renderDisplay(this.container);
  }

  saveInvoicesToLocalStorage() {
    localStorage.setItem('invoices', JSON.stringify(this.invoices));
  }

  editInvoice(index) {
    const invoice = this.invoices[index];
    this.invoiceEditor.render(invoice, index);
  }

  saveInvoiceChanges(index, updatedInvoice) {
    this.invoices[index] = updatedInvoice;
    this.renderSidebar(index);
    this.renderInvoice(index);
  }

}