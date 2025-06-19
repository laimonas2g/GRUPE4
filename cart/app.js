console.log('Labas, parduotuve');


const products = [
    {
        id: 456,
        title: 'Plastikinės ekologiškos samanos',
        price: 12.45,
        image: 'http://127.0.0.1:5500/cart/images/01.webp',
        max: 11
    },
    {
        id: 789,
        title: 'Maži guminiai robotai',
        price: 100.45,
        image: 'http://127.0.0.1:5500/cart/images/02.webp',
        max: 7
    },
    {
        id: 101112,
        title: 'Dideli guminiai robotai',
        price: 545.45,
        image: 'http://127.0.0.1:5500/cart/images/03.webp',
        max: 3
    },
    {
        id: 131415,
        title: 'Metaliniai vinys',
        price: 4.45,
        image: 'http://127.0.0.1:5500/cart/images/04.webp',
        max: 17
    },
    {
        id: 161718,
        title: 'Plastikiniai maišeliai',
        price: 0.45,
        image: 'http://127.0.0.1:5500/cart/images/05.webp',
        max: 103
    },
    {
        id: 192021,
        title: 'Džiutiniai maišeliai',
        price: 1.45,
        image: 'http://127.0.0.1:5500/cart/images/06.webp',
        max: 52
    },
    {
        id: 222324,
        title: 'Kotas metalinėms lentoms',
        price: 2.45,
        image: 'http://127.0.0.1:5500/cart/images/07.webp',
        max: 28
    },
    {
        id: 252627,
        title: 'Plastikiniai maišeliai su užtrauktuku',
        price: 3.45,
        image: 'http://127.0.0.1:5500/cart/images/08.webp',
        max: 33
    }
];


const renderProducts = (sort = 'default') => {
    const productsHtmlBin = document.querySelector('[data-products]');
    const productTemplate = document.querySelector('[data-product-template]');
         productsHtmlBin.innerHTML = ''; // isvalo kazka
       let sortedProducts;
        if (sort == 'default') {
            sortedProducts = [...products];
        } else if(sort == '0-9') {
            sortedProducts = products.toSorted((a, b) => a.price - b.price);
        } else if(sort == '9-0') {
            sortedProducts = products.toSorted((a, b) => b.price - a.price);
        } else if(sort == 'A-Z') {
            sortedProducts = products.toSorted((a, b) => a.tittle.localeCompare(b.title, 'lt'));
        } else {
            console.error('Bad sort type');
        }



    sortedProducts.forEach(product => {
        const clone = productTemplate.content.cloneNode(true);

        clone.querySelector('[data-title]').textContent = product.title;
        clone.querySelector('[data-image]').setAttribute('src', product.image);
        clone.querySelector('[data-price]').textContent = product.price;
        clone.querySelector('[data-add-amount]').setAttribute('max', product.max);
        clone.querySelector('[data-add-button]').dataset.id = product.id; // prideda tagui attr data-id="45"

        productsHtmlBin.appendChild(clone);
    });
}

const doSort = _ => {
    const selector = document.querySelector('[data-sort-selector]');
    selector.addEventListener('change', _ => {
        console.log('pasikeite', selector.value);
        renderProducts(selector.value);
    });
}


const initShop = _ => {
    renderProducts();
    doSort();
}









if (document.querySelector('[data-shop]')) {
    initShop();
}