Task_1 CRUD.

Create a page where you can create a VAT Invoice from data received from the API https://in3.dev/inv/
Save the VAT Invoice created on the page to a LocalStorage file.
It must be possible to store an unlimited number of invoices.

Create a page that displays all VAT Invoices in the form of a list,
displaying the invoice number, date and final amount.
Each invoice must also have the
“Edit”, “View” and “Delete” buttons in the list.
The “View” button is intended for viewing the invoice without editing.

The “Edit” button must open a page where you can edit the invoice's product quantities and discounts
All other parts of the invoice do not necessarily have to be edited.
After editing, the corresponding values, VAT and final amount must change and be saved in the file.

The “Delete” button is intended for deleting the invoice.

Explanations.

The rules for creating an invoice are described in task K2. The editing functionality can be expanded by
adding the ability to edit other fields and/or removing a single item.
Make the necessary validations of the entered data. (so that after entering the final amount is not NaN)
After editing the invoice, the same, already updated invoice must be displayed
(after update, redirect back to the edit of that invoice) When opening the create page,
the invoice newly received from the API must be immediately displayed, without the possibility of editing.
There must be three buttons at the bottom: “Save” (save the invoice to a file and show the list),
“Update” (show a new invoice from the API, the previous one is not saved),
“Cancel” (show the list). After each CRUD operation performed, show the appropriate message.
You can add your own functionality that supplements, but does not replace, those specified in the task.


Create logic with descriptions what files I need to create with names and why for Task_1 CRUD using Object-oriented programming, 
need to use Classes with Constructors (one class for each JavaScrip CRUD page) and when I need to use Static methods.
Like create.html, store.html, delete.html, destroy.html, edit.html, update.html read.html, 
show.html and what .js files with descriptions in folders SRC and Public.

CRUD:
CREATE - visible page with empty form for entering information - -;
STORE - invisible action saving data to the repository - DATA;
DELETE - visible confirmation of the deletion action - ID;
DESTROY - invisible action deleting a record from the repository - ID;
EDIT - visible page with previously entered information filled in - DATA, ID;
UPDATE - invisible action changing previous information in the repository - DATA, ID;
READ - visible page with all records - DATA;
SHOW - visible page of a single record - DATA, ID.

Use Object-oriented programming.
For ID I will use UUID.
I will be using node.js, laravel.mix
Need to use class with Constructors and when I need to use Static methods.

*/

/*
Task_1 CRUD: OOP Structure & File Descriptions

Project Structure:

/src
  - app.js                // Main entry point, Express routing logic
  - Invoice.js            // Invoice class: represents a VAT invoice, methods for calculations
  - InvoiceRepository.js  // Static methods for CRUD operations on invoices in LocalStorage
  - invoiceApi.js         // Fetches new invoice data from https://in3.dev/inv/
  - CreateInvoicePage.js  // Class for create.html page logic/UI
  - EditInvoicePage.js    // Class for edit.html page logic/UI
  - ListInvoicesPage.js   // Class for read.html page logic/UI
  - ShowInvoicePage.js    // Class for show.html page logic/UI
  - DeleteInvoicePage.js  // Class for delete.html page logic/UI

/public
  - create.html           // Page to create a new invoice
  - edit.html             // Page to edit an invoice
  - read.html             // Page to list all invoices
  - show.html             // Page to view a single invoice
  - delete.html           // Page to confirm deletion
  - styles.css            // Styling for all pages

CRUD Explanation:
- CREATE: create.html + CreateInvoicePage.js
    - Shows a new invoice from API (not editable), with Save/Update/Cancel buttons.
    - "Save" triggers STORE, "Update" fetches new invoice, "Cancel" returns to list.
- STORE: InvoiceRepository.save(invoice)
    - Static method, saves invoice to LocalStorage.
- READ: read.html + ListInvoicesPage.js
    - Lists all invoices with Edit/View/Delete buttons.
- SHOW: show.html + ShowInvoicePage.js
    - Displays a single invoice (read-only).
- EDIT: edit.html + EditInvoicePage.js
    - Allows editing product quantities/discounts, validates input.
- UPDATE: InvoiceRepository.update(id, data)
    - Static method, updates invoice in LocalStorage.
- DELETE: delete.html + DeleteInvoicePage.js
    - Confirms deletion of invoice.
- DESTROY: InvoiceRepository.delete(id)
    - Static method, removes invoice from LocalStorage.

OOP Usage:
- Invoice: Class with constructor for invoice data, methods for calculations (e.g., getFinalAmount()).
- InvoiceRepository: All CRUD methods are static (do not depend on instance state).
- Page Classes: Each page (Create, Edit, List, Show, Delete) has its own class for UI/logic, instantiated per page.

ID Usage:
- Use UUID for unique invoice IDs.

Node.js & Laravel Mix:
- Use Node.js for backend (Express server).
- Use Laravel Mix for asset compilation (JS/CSS bundling).

LocalStorage:
- All invoices are stored in browser LocalStorage (for demo), or can be adapted to file/db.