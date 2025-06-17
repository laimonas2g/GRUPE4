

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

















































