// Fetch data from the provided API endpoint
fetch('https://in3.dev/inv/')
  // When the response is received, parse it as JSON
  .then(response => response.json())
  // Once JSON is parsed, execute the following function
  .then(json => {

    // Extract invoice number from the JSON and store in a variable
    const saskaitosNumeris = json.number;
    // Extract invoice date from the JSON
    const saskaitosData = json.date;
    // Extract invoice due date from the JSON
    const saskaitosApmokejimoData = json.due_date;

    // Find the element with class 'number' and set its text to the invoice number
    document.querySelector('.number').textContent = saskaitosNumeris;
    // Find the element with class 'date' and set its text to the invoice date
    document.querySelector('.date').textContent = saskaitosData;
    // Find the element with class 'due_date' and set its text to the due date
    document.querySelector('.due_date').textContent = saskaitosApmokejimoData;
    // Log the invoice number to the console for debugging
    console.log(saskaitosNumeris)

    // Extract seller information from the JSON
    const pardavejas = json.company.seller;
    // Select the first element with class 'sectionas' (assumed to be seller section)
    const pardavejoSekcija = document.querySelectorAll('.sectionas')[0];
    // Set seller name in the corresponding element
    pardavejoSekcija.querySelector('.name').textContent = pardavejas.name;
    // Set seller address
    pardavejoSekcija.querySelector('.address').textContent = pardavejas.address;
    // Set seller code
    pardavejoSekcija.querySelector('.code').textContent = pardavejas.code;
    // Set seller VAT number
    pardavejoSekcija.querySelector('.vat').textContent = pardavejas.vat;
    // Set seller phone number
    pardavejoSekcija.querySelector('.phone').textContent = pardavejas.phone;
    // Set seller email
    pardavejoSekcija.querySelector('.email').textContent = pardavejas.email;
    // Log seller object for debugging
    console.log(pardavejas);

    // Extract buyer information from the JSON
    const pirkejas = json.company.buyer;
    // Select the second element with class 'sectionas' (assumed to be buyer section)
    const pirkejoSekcija = document.querySelectorAll('.sectionas')[1];
    // Set buyer name
    pirkejoSekcija.querySelector('.name').textContent = pirkejas.name;
    // Set buyer address
    pirkejoSekcija.querySelector('.address').textContent = pirkejas.address;
    // Set buyer code
    pirkejoSekcija.querySelector('.code').textContent = pirkejas.code;
    // Set buyer VAT number
    pirkejoSekcija.querySelector('.vat').textContent = pirkejas.vat;
    // Set buyer phone number
    pirkejoSekcija.querySelector('.phone').textContent = pirkejas.phone;
    // Set buyer email
    pirkejoSekcija.querySelector('.email').textContent = pirkejas.email;
    // Log buyer object for debugging
    console.log(pirkejas);

    // Render invoice items using a separate function
    spausdintiPrekes(json.items);
    // Use setTimeout to ensure DOM updates are finished before calculating totals
    setTimeout(() => {
      skaiciuotiVisus(json);
    }, 0);
  });

// Function to render invoice items in the DOM
const spausdintiPrekes = items => {
  // Select the element where items will be listed
  const itemsList = document.querySelector('.items-listas');

  // Clear any existing items in the list
  itemsList.innerHTML = '';
  // Loop through each item in the items array
  items.forEach(item => {
    // Select the template for an item row
    const template = document.querySelector('#buyer-template4');
    // Clone the template content to create a new item row
    const clone = template.content.cloneNode(true);
    // Set the item description
    clone.querySelector('.description').textContent = item.description;
    // Set the item quantity
    clone.querySelector('.quantity').textContent = item.quantity;
    // Set the item price (without discount), formatted to 2 decimals
    clone.querySelector('.priceWithoutDiscount').textContent = item.price.toFixed(2);

    // Prepare to display discount information
    let discountText = '';
    let discountAmount = 0;
    // Check if the item has a discount object with required properties
    if (
      item.discount &&
      typeof item.discount === 'object' &&
      !Array.isArray(item.discount) &&
      item.discount.type &&
      item.discount.value !== undefined
    ) {
      // If discount is a fixed amount, display as such and calculate amount
      if (item.discount.type === 'fixed') {
        discountText = `-${item.discount.value} `;
        discountAmount = item.discount.value;
      // If discount is a percentage, display as such and calculate amount
      } else if (item.discount.type === 'percentage') {
        discountText = `-${item.discount.value}%`;
        discountAmount = (item.quantity * item.price) * item.discount.value / 100;
      }
    } else {
      // If no discount, display 0
      discountText = '0';
      discountAmount = 0;
    }

    // Set the discount text in the DOM
    clone.querySelector('.discount').textContent = discountText;
    // Calculate price after discount and set it in the DOM
    const priceWithDiscount = (item.quantity * item.price) - discountAmount;
    clone.querySelector('.priceWithDiscount').textContent = priceWithDiscount.toFixed(2);
    // Add the item row to the items list in the DOM
    itemsList.appendChild(clone);
  });
};

// Function to calculate and display invoice totals
const skaiciuotiVisus = json => {
  // Calculate the sum of all items (quantity * price for each)
  const isVIso = json.items.reduce((sum, item) => {
    return sum + (item.quantity * item.price);
  }, 0);
  // Log the sum for debugging
  console.log(isVIso)

  // Display shipping price, formatted to 2 decimals
  document.querySelector('.shippingPrice').textContent = json.shippingPrice.toFixed(2);

  // Calculate total sum including shipping
  const isVIsoSuTransportavimas = isVIso + json.shippingPrice;
  // Display the sum without VAT
  document.querySelector('.sumOfAllWithoutPVM21').textContent = isVIsoSuTransportavimas.toFixed(2);

  // Set VAT percentage (hardcoded as 21%)
  const vatPercent = 21;
  document.querySelector('.PVM21').textContent = `${vatPercent}%`;
  // Calculate VAT amount
  const vatAmount = isVIsoSuTransportavimas * vatPercent / 100;
  // Display VAT amount
  document.querySelector('.vatAmount').textContent = vatAmount.toFixed(2);

  // Calculate total price including VAT
  const totalWithVAT = isVIsoSuTransportavimas + vatAmount;
  // Display total price with VAT
  document.querySelector('.totalPriceWithPVM21').textContent = totalWithVAT.toFixed(2);

  // Log items and total for debugging
  console.log(json.items);
  console.log(totalWithVAT);
};