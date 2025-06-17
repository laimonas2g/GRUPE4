
fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    // Invoice info
    document.querySelector('.number').textContent = json.number;
    document.querySelector('.date').textContent = json.date;
    document.querySelector('.due_date').textContent = json.due_date;

    // Seller
    const seller = json.company.seller;
    const sellerSection = document.querySelectorAll('.section')[0];
    sellerSection.querySelector('.name').textContent = seller.name;
    sellerSection.querySelector('.address').textContent = seller.address;
    sellerSection.querySelector('.code').textContent = seller.code;
    sellerSection.querySelector('.vat').textContent = seller.vat;
    sellerSection.querySelector('.phone').textContent = seller.phone;
    sellerSection.querySelector('.email').textContent = seller.email;

    // Buyer
    const buyer = json.company.buyer;
    const buyerSection = document.querySelectorAll('.section')[1];
    buyerSection.querySelector('.name').textContent = buyer.name;
    buyerSection.querySelector('.address').textContent = buyer.address;
    buyerSection.querySelector('.code').textContent = buyer.code;
    buyerSection.querySelector('.vat').textContent = buyer.vat;
    buyerSection.querySelector('.phone').textContent = buyer.phone;
    buyerSection.querySelector('.email').textContent = buyer.email;

    // Items
    const itemsList = document.querySelector('.items-list');
    json.items.forEach(item => {
      const template = document.querySelector('#buyer-template4');
      const clone = template.content.cloneNode(true);
      clone.querySelector('.description').textContent = item.description;
      clone.querySelector('.quantity').textContent = item.quantity;
      clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);

      // Discount
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

      itemsList.appendChild(clone);
    });

    // Shipping
    document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

    // Subtotal (sum of all items with quantity, discounts, plus shipping)
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
    document.querySelector('.sumOfAllWithoutPVM21').textContent = subtotal.toFixed(2);

    // VAT
    const vatPercent = 21;
    document.querySelector('.PVM21').textContent = `${vatPercent}%`;
    const vatAmount = subtotal * vatPercent / 100;
    document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);

    // Total with VAT
    const totalWithVAT = subtotal + vatAmount;
    document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);
  });







