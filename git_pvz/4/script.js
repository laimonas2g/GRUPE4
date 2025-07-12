const URL = 'https://in3.dev/inv/';

// Fill data into the invoice
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // Basic invoice info
        const invoiceNumber = document.getElementById('invoiceNumber');
        invoiceNumber.textContent = data.number;

        const invoiceDate = document.getElementById('invoiceDate');
        invoiceDate.textContent = data.date;

        const dueDate = document.getElementById('dueDate');
        dueDate.textContent = data.due_date;

        const shippingCost = document.getElementById('shippingCost');
        shippingCost.textContent = data.shippingPrice + " €";
        shippingCost.style.fontSize = '16px';



        // Seller information
        const sellerName = document.getElementById('sellerName');
        sellerName.textContent = data.company.seller.name;

        const sellerAddress = document.getElementById('sellerAddress');
        sellerAddress.textContent = data.company.seller.address;

        const sellerCode = document.getElementById('sellerCode');
        sellerCode.textContent = data.company.seller.code;

        const sellerVat = document.getElementById('sellerVat');
        sellerVat.textContent = data.company.seller.vat;

        const sellerPhone = document.getElementById('sellerPhone');
        sellerPhone.textContent = data.company.seller.phone;

        const sellerEmail = document.getElementById('sellerEmail');
        sellerEmail.textContent = data.company.seller.email;



        // Buyer information
        const buyerName = document.getElementById('buyerName');
        buyerName.textContent = data.company.buyer.name;

        const buyerAddress = document.getElementById('buyerAddress');
        buyerAddress.textContent = data.company.buyer.address;

        const buyerCode = document.getElementById('buyerCode');
        buyerCode.textContent = data.company.buyer.code;

        const buyerVat = document.getElementById('buyerVat');
        buyerVat.textContent = data.company.buyer.vat;

        const buyerPhone = document.getElementById('buyerPhone');
        buyerPhone.textContent = data.company.buyer.phone;

        const buyerEmail = document.getElementById('buyerEmail');
        buyerEmail.textContent = data.company.buyer.email;


        
        // Products table
        const productList = document.getElementById('productList');

        let totalWithoutVAT = 0;

        data.items.forEach(item => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = item.description;

            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;

            const unitPriceCell = document.createElement('td');
            unitPriceCell.textContent = item.price + " €";

            // Discount calculation
            const discountCell = document.createElement('td');
            let finalPrice = item.price;

            if (item.discount && Object.keys(item.discount).length > 0) {
                if (item.discount.type === "percentage") {
                    const discountAmount = (item.price * item.discount.value) / 100;
                    finalPrice -= discountAmount;
                    discountCell.textContent = `-${item.discount.value}% (-${discountAmount.toFixed(2)} €)`;
                } else if (item.discount.type === "fixed") {
                    finalPrice -= item.discount.value;
                    discountCell.textContent = `-${item.discount.value.toFixed(2)} €`;
                }
            } else {
                discountCell.textContent = '-';
            }

            const totalPriceCell = document.createElement('td');
            let priceAfterDiscount = finalPrice * item.quantity;
            totalPriceCell.textContent = priceAfterDiscount.toFixed(2) + " €";

            // Add cells to row
            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(unitPriceCell);
            row.appendChild(discountCell);
            row.appendChild(totalPriceCell);
            productList.appendChild(row);

            // Add to total
            totalWithoutVAT += priceAfterDiscount;
        });

        const totalPrice = document.getElementById('totalPrice');
        totalPrice.textContent = totalWithoutVAT.toFixed(2) + " €";
        totalPrice.style.fontSize = '16px';

        // VAT calculation
        const vatAmount = document.getElementById('vatAmount');
        const vatValue = totalWithoutVAT * 0.21;
        vatAmount.textContent = vatValue.toFixed(2) + " €";
        vatAmount.style.fontSize = '16px';

        // Final price including shipping and VAT
        const shippingValue = parseFloat(shippingCost.textContent);
        const vatParsed = parseFloat(vatAmount.textContent);

        const finalPrice = document.getElementById('finalPrice');
        const fullAmount = totalWithoutVAT + vatParsed + shippingValue;

        finalPrice.textContent = fullAmount.toFixed(2) + " €";
        finalPrice.style.fontSize = '16px';
    });