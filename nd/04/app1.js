
fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    ///////////////////////////////// inventorius //////////////////////////////////////////////////
    const saskaitosNumeris = json.number;
    const saskaitosData = json.date;
    const saskaitosApmokejimoData = json.due_date;
    console.log(saskaitosNumeris);
    console.log(saskaitosData);

    ///////////////////////////////// inventorius/data //////////////////////////////////////////////////
    document.querySelector('.number').textContent = saskaitosNumeris;
    document.querySelector('.date').textContent = saskaitosData;
    document.querySelector('.due_date').textContent = saskaitosApmokejimoData;
    console.log(saskaitosApmokejimoData);

    ///////////////////////////////// Pardavejas //////////////////////////////////////////////////
    const pardavejas = json.company.seller;
    const pardavejoSekcija = document.querySelectorAll('.sectionas')[0];
    pardavejoSekcija.querySelector('.name').textContent = pardavejas.name;
    pardavejoSekcija.querySelector('.address').textContent = pardavejas.address;
    pardavejoSekcija.querySelector('.code').textContent = pardavejas.code;
    pardavejoSekcija.querySelector('.vat').textContent = pardavejas.vat;
    pardavejoSekcija.querySelector('.phone').textContent = pardavejas.phone;
    pardavejoSekcija.querySelector('.email').textContent = pardavejas.email;
    console.log(pardavejas);

    ///////////////////////////////// pirkejas //////////////////////////////////////////////////
    const pirkejas = json.company.buyer;
    const pirkejoSekcija = document.querySelectorAll('.sectionas')[1];
    pirkejoSekcija.querySelector('.name').textContent = pirkejas.name;
    pirkejoSekcija.querySelector('.address').textContent = pirkejas.address;
    pirkejoSekcija.querySelector('.code').textContent = pirkejas.code;
    pirkejoSekcija.querySelector('.vat').textContent = pirkejas.vat;
    pirkejoSekcija.querySelector('.phone').textContent = pirkejas.phone;
    pirkejoSekcija.querySelector('.email').textContent = pirkejas.email;
    console.log(pirkejas);

    ///////////////////////////////// setTimeout //////////////////////////////////////////////////
    /*To fix the issues with calculation and grouping, 
    refactor the code to use a separate function for rendering items, 
    ensure all calculations are done after rendering, and use setTimeout to avoid potential 
    rendering or debugger issues. */

    /// Renderis ///
    spausdintiPrekes(json.items);
    // DOM'as updaitina pries skaiciavimus
    setTimeout(() => {
      skaiciuotiVisus(json);
    }, 0);
  });
///////////////////////////////// itemai //////////////////////////////////////////////////

const spausdintiPrekes = items => {

  const itemsList = document.querySelector('.items-listas');

  ///////////////////////////////// Loop'as itemu //////////////////////////////////////////////////
  itemsList.innerHTML = '';
  items.forEach(item => {
    const template = document.querySelector('#buyer-template4');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.description').textContent = item.description;
    console.log(item.description);
    clone.querySelector('.quantity').textContent = item.quantity;
    clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);


    ///////////////////////////////// nuolaida //////////////////////////////////////////////////
    let discountText = '';
    let discountKiekis = 0;

    //// ar objektas?
    if (item.discount && typeof item.discount === 'object') {
      // jei fixed, rodyk ir skaiciuok
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} `;
        discountKiekis = item.discount.value;
        /// jei %, rodyk % ir skaiciuok
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    } else {
      /// jei nera nuolaidos tai 0
      discountText = '0';
      discountKiekis = 0;
    }

    clone.querySelector('.discount').textContent = discountText;
    const priceWithDiscount = (item.quantity * item.price) - discountKiekis;
    clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);
    itemsList.appendChild(clone);
    console.log(priceWithDiscount)
  });
};
///////////////////////////////////// galutines ///////////////////////////////////////////////////////////

const skaiciuotiVisus = json => {
  // suma (quantity * price - discount)
  const isVIso = json.items.reduce((sum, item) => {
    let discountKiekis = 0;
    if (
      item.discount &&
      typeof item.discount === 'object' &&
      !Array.isArray(item.discount) &&
      item.discount.type &&
      item.discount.value !== undefined
    ) {
      if (item.discount.type === 'fixed') {
        discountKiekis = item.discount.value;
      } else if (item.discount.type === 'percentage') {
        discountKiekis = (item.quantity * item.price) * item.discount.value / 100;
      }
    }
    return sum + ((item.quantity * item.price) - discountKiekis);
  }, 0);
  console.log(isVIso)

  // Transportavimo išlaidos 
  document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

  // suma be PVM
  const isVIsoSuTransportavimas = isVIso + json.shippingPrice;
  document.querySelector('.sumOfAllWithoutPVM21').textContent = isVIsoSuTransportavimas.toFixed(2);
  console.log(isVIsoSuTransportavimas);

  // PVM
  const vatPercent = 21;
  document.querySelector('.PVM21').textContent = `${vatPercent}%`;
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
  document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);
  console.log(vatPercent)
  console.log(vatAmount);

  // galutinė suma su PVM
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
  document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);
  console.log(totalWithVAT);
  console.log(json.items);

};



