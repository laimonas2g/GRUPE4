// This is an arrow function that takes a JSON object (likely an invoice) as input
json => {
    // Set invoice number, date, and due date in the DOM
    document.querySelector('.number').textContent = json.number;
    document.querySelector('.date').textContent = json.date;
    document.querySelector('.due_date').textContent = json.due_date;

    // Get seller info from JSON and set it in the first .section element
    const seller = json.company.seller;
    const sellerSection = document.querySelectorAll('.section')[0];
    sellerSection.querySelector('.name').textContent = seller.name;
    sellerSection.querySelector('.address').textContent = seller.address;
    sellerSection.querySelector('.code').textContent = seller.code;
    sellerSection.querySelector('.vat').textContent = seller.vat;
    sellerSection.querySelector('.phone').textContent = seller.phone;
    sellerSection.querySelector('.email').textContent = seller.email;

    // Get buyer info from JSON and set it in the second .section element
    const buyer = json.company.buyer;
    const buyerSection = document.querySelectorAll('.section')[1];
    buyerSection.querySelector('.name').textContent = buyer.name;
    buyerSection.querySelector('.address').textContent = buyer.address;
    buyerSection.querySelector('.code').textContent = buyer.code;
    buyerSection.querySelector('.vat').textContent = buyer.vat;
    buyerSection.querySelector('.phone').textContent = buyer.phone;
    buyerSection.querySelector('.email').textContent = buyer.email;

    // For each item in the invoice, create a row in the items list
    const itemsList = document.querySelector('.items-list');
    json.items.forEach(item => {
      // Get the template for an item row and clone it
      const template = document.querySelector('#buyer-template4');
      const clone = template.content.cloneNode(true);

      // Fill in item description, quantity, and price before discount
      clone.querySelector('.description').textContent = item.description;
      clone.querySelector('.quantity').textContent = item.quantity;
      clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);

      // Calculate discount text and price after discount
      let discountText = '';
      let priceWithDiscount = item.price;
      if (
        item.discount &&
        typeof item.discount === 'object' &&
        !Array.isArray(item.discount) &&
        item.discount.type &&
        item.discount.value !== undefined
      ) {
        // If discount is a fixed amount, subtract it from price
        if (item.discount.type === 'fixed') {
          discountText = `-${item.discount.value} €`;
          priceWithDiscount = item.price - item.discount.value;
        // If discount is a percentage, calculate percentage off
        } else if (item.discount.type === 'percentage') {
          discountText = `-${item.discount.value}%`;
          priceWithDiscount = item.price - (item.price * item.discount.value / 100);
        }
      } else {
        // If no discount, set to 0
        discountText = '0';
        priceWithDiscount = item.price;
      }
      // Set discount and price after discount in the DOM
      clone.querySelector('.discount').textContent = discountText;
      clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);

      // Add the filled-in item row to the items list
      itemsList.appendChild(clone);
    });

    // Set the shipping price in the DOM
    document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

    // Calculate subtotal: sum of all item prices (after discount) times quantity, plus shipping
    let subtotal = 0;
    json.items.forEach(item => {
      let priceWithDiscount = item.price;
      if (
        item.discount &&
        typeof item.discount === 'object' &&
        !Array.isArray(item.discount) &&
        item.discount.type &&
        item.discount.value !== undefined
      ) {
        if (item.discount.type === 'fixed') {
          priceWithDiscount = item.price - item.discount.value;
        } else if (item.discount.type === 'percentage') {
          priceWithDiscount = item.price - (item.price * item.discount.value / 100);
        }
      }
      subtotal += priceWithDiscount * item.quantity;
    });
    subtotal += json.shippingPrice;
    // Set subtotal in the DOM (before VAT)
    document.querySelector('.sumOfAllWithoutPVM21').textContent = subtotal.toFixed(2);

    // Set VAT percent and calculate VAT amount
    const vatPercent = 21;
    document.querySelector('.PVM21').textContent = `${vatPercent}%`;
    const vatAmount = subtotal * vatPercent / 100;
    document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);

    // Calculate total price including VAT and set in the DOM
    const totalWithVAT = subtotal + vatAmount;
    document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);

  }









/*
fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    printBelekas1(json);
    printBelekas2(json);
    printBelekas3(json);
    printBelekas4(json);
    printBelekas5(json);
    printBelekas6(json);
  });


const printBelekas1 = belekas1 => {
  const ul = document.querySelector('ul');
  const buyer = belekas1.company.buyer;
  const template = document.querySelector('#buyer-template1');
  const clone = template.content.cloneNode(true); // padaro atskirą kopiją
  clone.querySelector('.name').textContent = buyer.name;
  clone.querySelector('.address').textContent = buyer.address;
  clone.querySelector('.code').textContent = buyer.code;
  clone.querySelector('.vat').textContent = buyer.vat;
  clone.querySelector('.phone').textContent = buyer.phone;
  clone.querySelector('.email').textContent = buyer.email;
  ul.appendChild(clone);
}

const printBelekas2 = belekas2 => {
  const ul = document.querySelector('ul');
  const seller = belekas2.company.seller;
  const template = document.querySelector('#buyer-template2');
  const clone = template.content.cloneNode(true); // padaro atskirą kopiją
  clone.querySelector('.name').textContent = seller.name;
  clone.querySelector('.address').textContent = seller.address;
  clone.querySelector('.code').textContent = seller.code;
  clone.querySelector('.vat').textContent = seller.vat;
  clone.querySelector('.phone').textContent = seller.phone;
  clone.querySelector('.email').textContent = seller.email;
  ul.appendChild(clone);
}


const printBelekas3 = belekas3 => {
  const ul = document.querySelector('ul');
  const template = document.querySelector('#buyer-template3');
  belekas3.items.forEach(item => {
    const clone = template.content.cloneNode(true); // clone for each item
    clone.querySelector('.description').textContent = item.description;
    clone.querySelector('.quantity').textContent = item.quantity;
    clone.querySelector('.priceWithoutDiscount').textContent = item.price;

    // Handle discount display and calculation
    let discountText = '';
    let priceWithDiscount = item.price;
    if (
      item.discount &&
      typeof item.discount === 'object' &&
      !Array.isArray(item.discount) &&
      item.discount.type &&
      item.discount.value !== undefined
    ) {
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} €`;
        priceWithDiscount = item.price - item.discount.value;
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        priceWithDiscount = item.price - (item.price * item.discount.value / 100);
      }
    } else {
      discountText = '0';
      priceWithDiscount = item.price;
    }

    clone.querySelector('.discount').textContent = discountText;
    clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);
    ul.appendChild(clone);
  });
}

const printBelekas4 = belekas4 => {
  const ul = document.querySelector('ul');
  const data = belekas4;
  const template = document.querySelector('#buyer-template4');
  const clone = template.content.cloneNode(true); // padaro atskirą kopiją
  clone.querySelector('.number').textContent = data.number;
  clone.querySelector('.date').textContent = data.date;
  clone.querySelector('.due_date').textContent = data.due_date;
  ul.appendChild(clone);
}

const printBelekas5 = belekas5 => {
  const ul = document.querySelector('ul');
  const data = belekas5;
  const template = document.querySelector('#buyer-template5');
  const clone = template.content.cloneNode(true); // padaro atskirą kopiją
  clone.querySelector('.shippingPrice').textContent = data.shippingPrice;
  ul.appendChild(clone);
}

const printBelekas6 = belekas6 => {
  const ul = document.querySelector('ul');
  const template = document.querySelector('#buyer-template6');

  // Viso Suma (item.price * item.quantity)
  const sumWithoutPVM = belekas6.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // 21% PVM
  const pvmPercent = 21;
  const pvmAmount = sumWithoutPVM * (pvmPercent / 100);

  // Galutine su PVM
  const totalWithPVM = sumWithoutPVM + pvmAmount;

  const clone = template.content.cloneNode(true);
  clone.querySelector('.sumOfAllWithoutPVM21').textContent = sumWithoutPVM.toFixed(2);
  clone.querySelector('.PVM21').textContent = `${pvmPercent}%`;
  clone.querySelector('.totalPriceWithPVM21').textContent = totalWithPVM.toFixed(2);
  ul.appendChild(clone);
}
*/
















































