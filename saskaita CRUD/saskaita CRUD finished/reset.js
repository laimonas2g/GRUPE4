/* --- Add Reset Button to Edit Invoice Form --- */

// Patch renderEditInvoice to add Reset button and logic
(function setupResetButtonForEdit() {
  const origRenderEditInvoice = renderEditInvoice;
  renderEditInvoice = function(number) {
    origRenderEditInvoice(number);

    // Add Reset button if not already present
    if (!document.getElementById('reset-edit')) {
      const saveBtn = document.getElementById('save-edit');
      const resetBtn = document.createElement('button');
      resetBtn.id = 'reset-edit';
      resetBtn.textContent = 'Reset';
      saveBtn.parentNode.insertBefore(resetBtn, saveBtn.nextSibling);

      // Store original invoice data for reset
      const invoice = findInvoice(number);
      const originalItems = invoice ? JSON.parse(JSON.stringify(invoice.items)) : [];

      resetBtn.onclick = () => {
        const form = document.getElementById('edit-invoice-form');
        originalItems.forEach((item, idx) => {
          const qtyInput = form.querySelector(`[name="quantity-${idx}"]`);
          if (qtyInput) qtyInput.value = item.quantity;
          const discountInput = form.querySelector(`[name="discount-${idx}"]`);
          if (discountInput) {
            if (!item.discount) {
              discountInput.value = '';
            } else if (item.discount.type === 'percentage') {
              discountInput.value = (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) + '%';
            } else {
              discountInput.value = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
            }
          }
        });
        showMessage('Fields reset to original values', 'info');
      };
    }
  };
})();

/* --- Add Reset Button to Edit Invoice Form --- */

// Patch renderEditInvoice to add Reset button and logic
(function setupResetButtonForEdit() {
  const origRenderEditInvoice = renderEditInvoice;
  renderEditInvoice = function(number) {
    origRenderEditInvoice(number);

    // Add Reset button if not already present
    if (!document.getElementById('reset-edit')) {
      const saveBtn = document.getElementById('save-edit');
      const resetBtn = document.createElement('button');
      resetBtn.id = 'reset-edit';
      resetBtn.textContent = 'Reset';
      saveBtn.parentNode.insertBefore(resetBtn, saveBtn.nextSibling);

      // Store original invoice data for reset
      const invoice = findInvoice(number);
      const originalItems = invoice ? JSON.parse(JSON.stringify(invoice.items)) : [];

      resetBtn.onclick = () => {
        const form = document.getElementById('edit-invoice-form');
        if (!form) return;
        // Reset each input to original value
        originalItems.forEach((item, idx) => {
          const quantityInput = form.querySelector(`[name="quantity-${idx}"]`);
          const discountInput = form.querySelector(`[name="discount-${idx}"]`);
          if (quantityInput) quantityInput.value = item.quantity;
          if (discountInput) {
            if (!item.discount) {
              discountInput.value = '';
            } else if (item.discount.type === 'percentage') {
              discountInput.value = (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) + '%';
            } else if (item.discount.type === 'fixed') {
              discountInput.value = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
            }
          }
        });
        showMessage('Fields reset to original values', 'info');
      };
    }
  };
})();


/*
  --- Reset Button for Edit Invoice ---
  Adds a Reset button in the Edit section to restore original item values.
  When pressed, it resets the quantity and discount fields to their original values.
  After pressing Save, the Reset button will reset to the latest saved values.
*/

// Patch renderEditInvoice to add Reset button and logic
(function setupResetButtonForEdit() {
  // Save reference to original renderEditInvoice
  const origRenderEditInvoice = renderEditInvoice;
  renderEditInvoice = function(number) {
    // Call original function
    origRenderEditInvoice(number);

    // Add Reset button next to Save button if not already present
    if (!document.getElementById('reset-edit')) {
      const saveBtn = document.getElementById('save-edit');
      const resetBtn = document.createElement('button');
      resetBtn.id = 'reset-edit';
      resetBtn.textContent = 'Reset';
      saveBtn.parentNode.insertBefore(resetBtn, saveBtn.nextSibling);

      // Store original values for reset
      let originalInvoice = JSON.parse(JSON.stringify(findInvoice(number)));

      // Reset logic
      resetBtn.onclick = () => {
        const form = document.getElementById('edit-invoice-form');
        originalInvoice.items.forEach((item, idx) => {
          const quantityInput = form.querySelector(`[name="quantity-${idx}"]`);
          const discountInput = form.querySelector(`[name="discount-${idx}"]`);
          if (quantityInput) quantityInput.value = item.quantity;
          if (discountInput) {
            if (!item.discount) {
              discountInput.value = '';
            } else if (item.discount.type === 'percentage') {
              discountInput.value = (typeof item.discount.value !== 'undefined' ? item.discount.value : 0) + '%';
            } else {
              discountInput.value = typeof item.discount.value !== 'undefined' ? item.discount.value : 0;
            }
          }
        });
      };

      // After Save, update originalInvoice to latest saved state
      const saveBtnHandler = saveBtn.onclick;
      saveBtn.onclick = function() {
        if (typeof saveBtnHandler === 'function') saveBtnHandler();
        // Update originalInvoice after save
        originalInvoice = JSON.parse(JSON.stringify(findInvoice(number)));
      };
    }
  };
})();

/* --- Add Reset Button to Edit Invoice Form --- */

// Patch renderEditInvoice to add Reset button and logic
(function setupResetButtonForEdit() {
  const origRenderEditInvoice = renderEditInvoice;
  renderEditInvoice = function(number) {
    origRenderEditInvoice(number);

    // Add Reset button if not already present
    if (!document.getElementById('reset-edit')) {
      const saveBtn = document.getElementById('save-edit');
      const resetBtn = document.createElement('button');
      resetBtn.id = 'reset-edit';
      resetBtn.textContent = 'Reset';
      resetBtn.type = 'button';
      saveBtn.parentNode.insertBefore(resetBtn, saveBtn.nextSibling);

      resetBtn.onclick = () => {
        const invoice = findInvoice(number);
        if (!invoice) return showMessage('Invoice not found', 'error');
        // Re-render the form with original values from localStorage
        renderEditInvoice(number);
        showMessage('Changes reset', 'info');
      };
    }
  };
})();