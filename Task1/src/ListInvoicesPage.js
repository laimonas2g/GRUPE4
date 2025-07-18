class ListInvoicesPage {
  constructor() {
   this.invoices = InvoiceRepository.getAll();
   this.renderList();
  }

  renderList() {
   const tbody = document.getElementById('invoice-list');
   tbody.innerHTML = '';
   this.invoices.forEach(inv => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${inv.number}</td>
      <td>${inv.date}</td>
      <td>${new Invoice(inv).getFinalAmount().toFixed(2)}</td>
      <td>
       <a href="edit.html?id=${inv.id}">Edit</a>
       <a href="show.html?id=${inv.id}">View</a>
       <a href="delete.html?id=${inv.id}">Delete</a>
      </td>
    `;
    tbody.appendChild(tr);
   });
  }
}