// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Selecting containers for VAT details, dates, buyer/seller information, and items
  const VATNumberContainer = document.querySelector("#VATNumber");
  const dateContainer = document.querySelector("#date");
  const dueDateContainer = document.querySelector("#dueDate");

  const buyerNameContainer = document.querySelector("#buyerName");
  const buyerAddressContainer = document.querySelector("#buyerAddress");
  const buyerCodeContainer = document.querySelector("#buyerCode");
  const buyerVATContainer = document.querySelector("#buyerVAT");
  const buyerPhoneContainer = document.querySelector("#buyerPhone");
  const buyerEmailContainer = document.querySelector("#buyerEmail");

  const sellerNameContainer = document.querySelector("#sellerName");
  const sellerAddressContainer = document.querySelector("#sellerAddress");
  const sellerCodeContainer = document.querySelector("#sellerCode");
  const sellerVATContainer = document.querySelector("#sellerVAT");
  const sellerPhoneContainer = document.querySelector("#sellerPhone");
  const sellerEmailContainer = document.querySelector("#sellerEmail");

  const itemsNameContainer = document.querySelector("#itemsName");
  const itemsTotalContainer = document.querySelector("#itemsTotal");

  const shippmentPriceContainer = document.querySelector("#shippmentPrice");
  const shippmentItemsResultContainer = document.querySelector(
    "#shippmentItemsResult"
  );

  const VATItemsResultContainer = document.querySelector("#VATItemsResult");
  const VATtotalCostContainer = document.querySelector("#VATtotalCost");

  // Fetching invoice data from an external API
  fetch("https://in3.dev/inv/")
    .then((response) => response.json())
    .then((json) => {
      // Destructuring the fetched JSON to extract relevant data
      const { number, date, due_date, company, items, shippingPrice } = json;

      // Displaying VAT number
      VATNumberContainer.innerText = number;

      // Adding the date of the invoice to the DOM
      let tdElementDate = document.createElement("td");
      tdElementDate.innerText = date;
      dateContainer.append(tdElementDate);

      // Adding the due date to the DOM
      let tdElementDueDate = document.createElement("td");
      tdElementDueDate.innerText = due_date;
      dueDateContainer.append(tdElementDueDate);

      // Extracting buyer and seller details
      const { buyer, seller } = company;

      // Populating buyer's details in the DOM
      buyerNameContainer.append(buyer.name);
      buyerAddressContainer.append(buyer.address);
      buyerCodeContainer.append(buyer.code);
      buyerVATContainer.append(buyer.vat);
      buyerPhoneContainer.append(buyer.phone);
      buyerEmailContainer.append(buyer.email);

      // Populating seller's details in the DOM
      sellerNameContainer.append(seller.name);
      sellerAddressContainer.append(seller.address);
      sellerCodeContainer.append(seller.code);
      sellerVATContainer.append(seller.vat);
      sellerPhoneContainer.append(seller.phone);
      sellerEmailContainer.append(seller.email);

      // Displaying shipping price
      let tdElementshippmentPrice = document.createElement("td");
      tdElementshippmentPrice.innerText = shippingPrice.toFixed(2);
      shippmentPriceContainer.append(tdElementshippmentPrice);

      // Calculating the total price for all items
      let allItemsTotal = 0;

      // Iterating through items and creating rows for each in the table
      items.forEach((item) => {
        const trElement = document.createElement("tr");

        // Adding item description
        const tdElementDescription = document.createElement("td");
        tdElementDescription.innerText = item.description;
        trElement.appendChild(tdElementDescription);

        // Adding quantity of the item
        const tdElementQuantity = document.createElement("td");
        tdElementQuantity.innerText = item.quantity;
        trElement.appendChild(tdElementQuantity);

        // Adding price per item
        const tdElementPricePerItem = document.createElement("td");
        tdElementPricePerItem.innerText = item.price.toFixed(2);
        trElement.appendChild(tdElementPricePerItem);

        // Calculating and adding total price for the item
        const tdElementFullPrice = document.createElement("td");
        const fullPrice = (item.quantity * item.price).toFixed(2);
        tdElementFullPrice.innerText = fullPrice;
        trElement.appendChild(tdElementFullPrice);

        // Displaying any applicable discount
        const tdElementDiscount = document.createElement("td");
        if (item.discount.type === "percentage") {
          tdElementDiscount.innerText = item.discount.value.toFixed(2) + " %";
        } else if (item.discount.type === "fixed") {
          tdElementDiscount.innerText = item.discount.value.toFixed(2) + " €";
        } else {
          tdElementDiscount.innerText = "-";
        }
        trElement.appendChild(tdElementDiscount);

        // Calculating discount value and final price after discount
        let priceAfterDiscount;
        let discountValue = 0;

        if (item.discount.type === "percentage") {
          discountValue =
            ((item.price * item.discount.value) / 100) * item.quantity;
          priceAfterDiscount = (
            item.quantity * item.price -
            discountValue
          ).toFixed(2);
        } else if (item.discount.type === "fixed") {
          discountValue = item.discount.value * item.quantity;
          priceAfterDiscount = (
            item.quantity * item.price -
            discountValue
          ).toFixed(2);
        } else {
          priceAfterDiscount = fullPrice;
        }

        // Adding discount value and final price to the DOM
        const tdElementDiscountValue = document.createElement("td");
        tdElementDiscountValue.innerText = discountValue.toFixed(2);
        trElement.appendChild(tdElementDiscountValue);

        const tdElementPriceAfterDiscount = document.createElement("td");
        tdElementPriceAfterDiscount.innerText = priceAfterDiscount;
        trElement.appendChild(tdElementPriceAfterDiscount);

        // Appending the item row to the items container
        itemsNameContainer.appendChild(trElement);

        // Accumulating the total price of all items
        allItemsTotal += parseFloat(priceAfterDiscount);
      });

      // Adding a total row to display the grand total
      const totalRow = document.createElement("tr");
      const tdElementTotalLabel = document.createElement("td");
      tdElementTotalLabel.colSpan = 5;
      totalRow.appendChild(tdElementTotalLabel);

      const tdElementTotalValue = document.createElement("td");
      tdElementTotalValue.innerText = allItemsTotal.toFixed(2);
      tdElementTotalValue.classList.add("allItemsValue");
      totalRow.appendChild(tdElementTotalValue);

      itemsTotalContainer.appendChild(totalRow);

      // Adding shipment price to total
      let shippmentItemsValue = (allItemsTotal + shippingPrice).toFixed(2);
      shippmentItemsResultContainer.append(shippmentItemsValue);

      // Calculating VAT (18%) on the total and displaying it
      let VATItemsValue = ((shippmentItemsValue / 100) * 18).toFixed(2);
      VATItemsResultContainer.append(VATItemsValue);

      // Calculating the final total with VAT included
      let VATtotalCost = (
        parseFloat(shippmentItemsValue) + parseFloat(VATItemsValue)
      ).toFixed(2);

      VATtotalCostContainer.append(VATtotalCost);
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // Logging errors during data fetch
    });

  // LANGUAGE TRANSLATE FUNCTIONALITY
  if (document.querySelector("#googleTranslateElement")) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.onload = () => {
      window.googleTranslateElementInit = () => {
        new google.translate.TranslateElement(
          {
            pageLanguage: "lt",
            includedLanguages: "lt,en,de,ru,lv,et,es,nl,ar,fr,pl",
          },
          "googleTranslateElement"
        );
      };
    };

    document.head.appendChild(script); // Adding the translation script to the DOM
  }
});