const nr = document.querySelector('[data-nr]');
const dokData = document.querySelector('[data-dokData]');
const apmoketi = document.querySelector('[data-apmoketi]');
const pardavejas = document.querySelectorAll('[data-seller] div');
const pirkejas = document.querySelectorAll('[data-buyer] div');
const list = document.querySelector('[data-list]');
const delivery = document.querySelector('[data-pristatymas]');
const tarpine = document.querySelector('[data-tarpine]');
const viso = document.querySelector('[data-viso]');
const visoPVM = document.querySelector('[data-visoPvm');

fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => {
        const {number, date, due_date, company, items, shippingPrice} = data;
        nr.innerText += ' ' + number;
        dokData.innerText += ' ' + date;
        apmoketi.innerText += ' ' + due_date;
        delivery.innerText = shippingPrice.toFixed(2) + ' €';
        const {buyer, seller} = company;
        let i = 0;
        pirkejas.forEach(div => {
            // const {name, address, code, vat, phone, email} = buyer;
            const Buyer = Object.values(buyer);                 
            div.innerText = Buyer[i];
            i++;            
        });

        let j = 0;
        pardavejas.forEach(div => {
            // const {name, address, code, vat, phone, email} = seller;
            const Seller = Object.values(seller);                   
            div.innerText = Seller[j];
            j++;            
        })
        let k = 1;
        let afterDiscount;
        let pvmSuma;
        let sum;
        let tarpineSuma = 0;
        let visoPvm = 0;
        items.forEach(item => {
            const {description, discount, price, quantity} = item;
            const Discount = Object.values(discount);
            let type = '';
            if (Discount[0] === 'percentage') {
                type = `${Discount[1]} %`;
                afterDiscount = price - ((price / 100) * Discount[1]);
            } else if (Discount[0] === 'fixed') {
                type = `${Discount[1]} €`;                
                afterDiscount = price - Discount[1];
            } else {
                afterDiscount = price;
            };
            pvmSuma = (afterDiscount * 0.21) * quantity;
            sum = afterDiscount * quantity + pvmSuma;
            tarpineSuma += sum;
            visoPvm += pvmSuma;
            const preke = `<tr>
                        <td>00${k}</td>
                        <td>${description}</td>
                        <td class="right">${quantity}</td>                        
                        <td class="right">${price.toFixed(2)}</td>
                        <td class="right">${type}</td>                        
                        <td class="right">${afterDiscount.toFixed(2)}</td>
                        <td class="right">21 %</td>
                        <td class="right">${pvmSuma.toFixed(2)}</td>
                        <td class="right">${sum.toFixed(2)}</td>
                    </tr>`
                list.innerHTML += preke;
                k++;
        })
       
        tarpine.innerText = tarpineSuma.toFixed(2) + ' €';
        visoPVM.innerText = (visoPvm + (shippingPrice * 0.21)).toFixed(2) + ' €';
        viso.innerText = (tarpineSuma + shippingPrice).toFixed(2) + ' €';
        console.log('data:',data);                        
    }); 
    