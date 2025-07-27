// /src/classes/Sidebar.js

export default class Sidebar {
  constructor(app) {
    this.app = app;
    this.container = document.getElementById('invoice-list');
  }

  render(invoices, activeIndex = 0) {
    this.container.innerHTML = '';

    // Pridedame „Gauti sąskaitą“ mygtuką
    const fetchButton = document.createElement('button');
    fetchButton.className = 'fetch-btn';
    fetchButton.textContent = 'Gauti sąskaitą';
    fetchButton.addEventListener('click', async () => {
      const newInvoice = await this.app.fetchInvoiceFromAPI();
      if (newInvoice) {
        this.app.addInvoice(newInvoice);
      }
    });

    this.container.appendChild(fetchButton);

    // Atvaizduojame visas sąskaitas
    invoices.forEach((invoiceData, index) => {
      const btn = document.createElement('button');
      btn.className = 'invoice-sidebar-btn';
      if (index === activeIndex) btn.classList.add('active');

      const spanNumber = document.createElement('span');
      spanNumber.textContent = invoiceData.number;

      const delBtn = document.createElement('button');
      delBtn.className = 'invoice-delete-btn';
      delBtn.textContent = '×';
      delBtn.title = 'Ištrinti sąskaitą';

      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.app.deleteInvoice(index);
      });

      btn.appendChild(spanNumber);
      btn.appendChild(delBtn);

      btn.addEventListener('click', () => {
        this.app.renderInvoice(index);
        this.render(this.app.invoices, index);
      });

      this.container.appendChild(btn);
    });
  }
}