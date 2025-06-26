console.log('Bebrų dainos');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        printUsers(json);
    });


const printUsers = users => {
    const ul = document.querySelector('ul');
    users.forEach(user => {
        // const li = document.createElement('li');
        // li.textContent = `${user.name} (${user.email}) from ${user.address.city}`;
        // ul.appendChild(li);
        const template = document.querySelector('#user-template');
        const clone = template.content.cloneNode(true); // padaro atskirą kopiją
        clone.querySelector('.name').textContent = user.name;
        clone.querySelector('.email').textContent = user.email;
        clone.querySelector('.city').textContent = user.address.city;
        ul.appendChild(clone);
    });
}

const cart = [
    { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
    { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 },
    { id: 7841, title: 'Žąsinas užšaldytas', price: 8.99, count: 1 },
    { id: 785, title: 'Šašlykas marinuotas', price: 4.88, count: 1 },
    { id: 7854, title: 'Zuikis netikras', price: 5.22, count: 1 },
    { id: 1223, title: 'Ąsotis kačių pienui laikytt', price: 45.99, count: 1 }
];


const batonas = cart.find(p => p.id == 16548);

console.log(batonas);

const noDesra = cart.filter(p => p.id != 877);

console.log(noDesra);


let cartCount = 0;
cart.forEach(p => cartCount = cartCount + p.count);


const cartCount2 = cart.reduce((acc, p) => acc + p.count, 0);


console.log(cartCount, cartCount2);

cart.sort((a, b) => b.price - a.price);

const cartSort = cart.toSorted((a, b) => a.price - b.price);

console.log(cart, cartSort);

const cartByTitle = cart.toSorted((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
});

const cartByTitleLocal = cart.toSorted((a, b) => a.title.localeCompare(b.title, 'lt'));

console.log(cartByTitle);
console.log(cartByTitleLocal);

console.clear();

// https://jsonplaceholder.typicode.com/todos
// 1. Parsiųsti ir atspausdinti KONSOLĖJE

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => a.title.localeCompare(b.title));
        // console.log(data);
        // console.log(data.filter(t => t.completed));
        console.log(data.filter(t => t.userId == 7));
    });

// 2. Spausdinti TIK užbaigtus TODUS
// 3. Spausdinti TIK 7 vartojo TODUS
// 4. VISUS TODUS atspausdinti išrūšiuotus pagal pavadinimą nuo A iki Z

























































