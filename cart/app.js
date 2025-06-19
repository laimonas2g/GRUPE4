console.log('Labas, parduotuve');


const products = [
    {
        id: 456,
        title: 'Plastikinės ekologiškos samanos',
        price: 12.45,
        image: 'http://127.0.0.1:5500/cart/images/01.jpeg',
        max: 11
    },
    {
        id: 789,
        title: 'Maži guminiai robotai',
        price: 100.45,
        image: 'http://127.0.0.1:5500/cart/images/02.jpeg',
        max: 7
    },
    {
        id: 101112,
        title: 'Dideli guminiai robotai',
        price: 545.45,
        image: 'http://127.0.0.1:5500/cart/images/03.jpeg',
        max: 3
    },
    {
        id: 131415,
        title: 'Metaliniai vinys',
        price: 4.45,
        image: 'http://127.0.0.1:5500/cart/images/04.jpeg',
        max: 17
    },
    {
        id: 161718,
        title: 'Plastikiniai maišeliai',
        price: 0.45,
        image: 'http://127.0.0.1:5500/cart/images/05.jpeg',
        max: 103
    },
    {
        id: 192021,
        title: 'Džiutiniai maišeliai',
        price: 1.45,
        image: 'http://127.0.0.1:5500/cart/images/06.jpeg',
        max: 52
    },
    {
        id: 222324,
        title: 'Kotas metalinėms lentoms',
        price: 2.45,
        image: 'http://127.0.0.1:5500/cart/images/07.jpeg',
        max: 28
    },
    {
        id: 252627,
        title: 'Plastikiniai maišeliai su užtrauktuku',
        price: 3.45,
        image: 'http://127.0.0.1:5500/cart/images/08.jpeg',
        max: 33
    }
];

const cart = [];


const renderProducts = (sort = 'default') => {
    const productsHtmlBin = document.querySelector('[data-products]');
    const productTemplate = document.querySelector('[data-product-template]');
    productsHtmlBin.innerHTML = '';
    let sortedProducts;
    if (sort == 'default') {
        sortedProducts = [...products];
    } else if (sort == '0-9') {
        sortedProducts = products.toSorted((a, b) => a.price - b.price);
    } else if (sort == '9-0') {
        sortedProducts = products.toSorted((a, b) => b.price - a.price);
    } else if (sort == 'A-Z') {
        sortedProducts = products.toSorted((a, b) => a.title.localeCompare(b.title, 'lt'));
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
    addButtonsInit();
}

const addButtonsInit = _ => {
    const buttons = document.querySelectorAll('[data-add-button]');
    buttons.forEach(b => {
        b.addEventListener('click', _ => {
            const id = parseInt(b.dataset.id);
            const input = b.closest('[data-product]').querySelector('[data-add-amount]');
            const amount = parseInt(input.value);
            console.log(id, amount);
        });
    });
}

const doSort = _ => {
    const selector = document.querySelector('[data-sort-selector]');
    selector.addEventListener('change', _ => {
        console.log('pasikeite', selector.value);
        renderProducts(selector.value);
    });
}

const cartIconInit = _ => {
    const icon = document.querySelector('[data-cart-icon]');
    icon.dataset.show = 'hide';
    icon.addEventListener('click', _ => {
        if (icon.dataset.show == 'hide') {
            icon.dataset.show = 'show';
            showCartContent();
        } else {
            icon.dataset.show = 'hide';
            hideCartContent();
        }
    });
}

const showCartContent = _ => {
    const list = document.querySelector('[data-cart-content]');
    list.style.display = null;
}

const hideCartContent = _ => {
    const list = document.querySelector('[data-cart-content]');
    list.style.display = 'none';
}


const initShop = _ => {
    renderProducts();
    doSort();
    cartIconInit();
}









if (document.querySelector('[data-shop]')) {
    initShop();
}