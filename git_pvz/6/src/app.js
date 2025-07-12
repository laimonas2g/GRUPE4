let items = document.querySelectorAll('[data-item]');
const addLineBtn = document.querySelector('[data-btn-add-line]');
const delLineBtn = document.querySelectorAll('[data-line-delete]');
const itemTemplate = document.querySelector('[data-item-template]');
const dataItems = document.querySelector('[data-items]');


const custSerial = document.querySelector('[data-custom-serial-number]');
const custData = document.querySelector('[data-custom-date]');
let custDueData = document.querySelector('[data-custom-due-date]');
const custShipping = document.querySelector('[data-shipping-price]');

if (custSerial) {
    custSerial.value = 'AB-' + getRandomInt(10000000, 99999999);

}



let dateNow = new Date();

let dueDate = new Date();
dueDate.setDate(dueDate.getDate() + 30);
console.log(dueDate);

dateNow = `${dateNow.getFullYear()}-${String((dateNow.getMonth() + 1)).padStart(2, '0')}-${String(dateNow.getDate()).padStart(2, '0')}`;

if (custData) {
    custData.value = dateNow;
}

dueDate = `${dueDate.getFullYear()}-${String((dueDate.getMonth() + 1)).padStart(2, '0')}-${String(dueDate.getDate()).padStart(2, '0')}`

if (custDueData) {
    custDueData.value = dueDate;

}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (custShipping) {
    custShipping.addEventListener('input', (e) => {
        totalsUpdater();
    })
};



const itemTotalUpdater = _ => {
    items = document.querySelectorAll('[data-item]');
    items.forEach((item) => {

        const qtyEl = item.querySelector('[data-item-qty]');
        const pEl = item.querySelector('[data-item-price]');
        const discEurEl = item.querySelector('[data-item-discount-eur]');
        const discPEl = item.querySelector('[data-item-discount-p]');

        let qty = parseInt(item.querySelector('[data-item-qty]').value);
        let price = parseFloat(item.querySelector('[data-item-price]').innerText) || parseFloat(item.querySelector('[data-item-price]').value);

        let discEur = parseFloat(item.querySelector('[data-item-discount-eur]').value)
        let discP = parseFloat(item.querySelector('[data-item-discount-p]').value)

        let itemTotal = item.querySelector('[data-item-discounted-total]');


        qtyEl.addEventListener('input', (e) => {
            qty = parseInt(item.querySelector('[data-item-qty]').value);




            let total;
            if (discEur && discEur > 0) {
                total = qty * price - discEur;

            } else {
                total = qty * price;

            }

            total > 0 ? total : total = 0;

            discP = (discEur * 100 / (price * qty));

            if (discP <= 0 || !discP) {
                discP = '';
            } else if (discP > 100) {
                discEur = qty * price;
                discP = 100;
                discP = parseFloat(discP)
            }
            if (!discEur) {
                discEur = '';

            } else {
                discEur = parseFloat(discEur).toFixed(2);
            };

            discEurEl.value = discEur;

            if (discP !== '') {
                discPEl.value = discP.toFixed(2);
            }



            itemTotal.innerText = total.toFixed(2);

            totalsUpdater();
        });

        pEl.addEventListener('input', (e) => {
            price = parseFloat(item.querySelector('[data-item-price]').innerText) || parseFloat(item.querySelector('[data-item-price]').value);



            let total;
            if (discEur && discEur > 0) {
                total = qty * price - discEur;

            } else {
                total = qty * price;

            }

            total > 0 ? total : total = 0;

            discP = (discEur * 100 / (price * qty));

            if (discP <= 0 || !discP) {
                discP = '';
            } else if (discP > 100) {
                discEur = qty * price;
                discP = 100;
                discP = parseFloat(discP)
            }
            if (!discEur) {
                discEur = '';

            } else {
                discEur = parseFloat(discEur).toFixed(2);
            };

            discEurEl.value = discEur;

            if (discP !== '') {
                discPEl.value = discP.toFixed(2);
            }



            itemTotal.innerText = total.toFixed(2);


            totalsUpdater();
        });
        discEurEl.addEventListener('input', (e) => {
            discEur = parseFloat(item.querySelector('[data-item-discount-eur]').value)

            let total;
            if (discEur && discEur > 0) {
                total = qty * price - discEur;
            } else {
                total = qty * price;
            }

            total > 0 ? total : total = 0;
            itemTotal.innerText = total.toFixed(2);
            discPEl.value = (discEur * 100 / (price * qty)).toFixed(2);
            if (discEur === 0 || !discEur || discEur < 0) {
                discPEl.value = '';
            } else if (discEur > total) {
                discPEl.value = 100;
            }
            totalsUpdater();
        })

        discPEl.addEventListener('input', (e) => {
            discP = parseFloat(item.querySelector('[data-item-discount-p]').value)

            discEur = (price * qty - (price * qty * (1 - discP / 100)));

            let total;
            if (discEur && discEur > 0) {
                total = qty * price - discEur;
            } else {
                total = qty * price;
            }

            total > 0 ? total : total = 0;


            itemTotal.innerText = total.toFixed(2);
            if (discP === 0 || !discP || discP < 0) {
                discEur = '';
            } else if (discP > 100) {
                discEur = (price * qty).toFixed(2);
            } else { discEur = discEur.toFixed(2) };

            discEurEl.value = discEur;
            totalsUpdater();
        })

    });
};

const totalsUpdater = _ => {
    let subtotal = 0;
    let vat = 0;
    let totalDiscounts = 0;

    const subtotalHtml = document.querySelector('[data-pre-total]');
    let shipping = document.querySelector('[data-shipping-price]').innerText || document.querySelector('[data-shipping-price]').value;
    shipping = parseFloat(shipping);

    const vatHtml = document.querySelector('[data-vat]');

    const totalDiscountsHtml = document.querySelector('[data-total-discounts]');

    const grandTotalHtml = document.querySelector('[data-total-final]');


    items = document.querySelectorAll('[data-item]');

    items.forEach(item => {
        let qty = parseInt(item.querySelector('[data-item-qty]').value);
        let price = parseFloat(item.querySelector('[data-item-price]').innerText) || parseFloat(item.querySelector('[data-item-price]').value)
        let discEur = parseFloat(item.querySelector('[data-item-discount-eur]').value);

        if (!discEur) {
            discEur = 0;
        };
        if (!price) {
            price = 0;
        };

        console.log('qty', qty, price)

        let itemTotal = qty * price;

        subtotal += itemTotal;

        totalDiscounts += discEur;
    });

    vat = ((subtotal + shipping) * 0.21);

    subtotalHtml.innerText = subtotal.toFixed(2);
    vatHtml.innerText = vat.toFixed(2);
    totalDiscountsHtml.innerText = totalDiscounts.toFixed(2);
    grandTotalHtml.innerText = (subtotal + shipping + vat - totalDiscounts).toFixed(2);
}

if (document.querySelector('[data-msg]')) {
    const msg = document.querySelector('[data-msg]');
    setTimeout(_ => {
        msg.remove();
    }, 3000);
}

if (addLineBtn) {
    addLineBtn.addEventListener('click', e => {
        const clone = itemTemplate.content.cloneNode(true);

        console.log('paspausta');
        dataItems.appendChild(clone);
        totalsUpdater();
        const delLineBtn = document.querySelectorAll('[data-line-delete]');
        itemTotalUpdater();
        delLineBtn.forEach((button) => {
            button.addEventListener('click', e => {
                console.log('paspausta delete');
                e.target.parentElement.remove();
                e.target.nextElementSibling.remove();
                totalsUpdater();
            })
        })

    })

}




// delLineBtn.addEventListener('click', e => {
//     console.log('paspausta delete');
//     e.target.parentElement.remove();
// })

const init = _ => {
    itemTotalUpdater()
};

init();