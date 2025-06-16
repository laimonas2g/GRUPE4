function rand(min, max) 
{const minCeiled = Math.ceil(min);const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)};
   // The maximum is inclusive and the minimum is inclusive}
 

console.log('hello Json')

// JSON JavScript Object Notation


const obj = [
  { a: 2 },
  { a: 2 },
  { a: [4, 5] },
];

console.log(obj, typeof obj);

const objString = JSON.stringify(obj);

console.log(objString, typeof objString);


const objBack = JSON.parse(objString);

console.log(objBack, typeof objBack);

console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json()) // kai sulaukiam atsakyma paverciam objektu
//   .then(json => {
//     console.log(json);
//     printTitles(json); // sukurtas variable ateityje, 34 eilute
//   }) // atspausdinam konsoleje

// console.log('kodas po fetch');  // nelaukia response ir spausdina

// const printTitles = obj => { 
//   const ul = document.querySelector('ul');

//   obj.forEach(p => {
//     const li = document.createElement('li');
//     li.innerText = p.title;
//     ul.appendChild(li);
//   });
// }


 
// // padidintu visu produktu kiekius 1;

// const cart2 = cart.map(obj => ({ ...obj, count: obj.count + 1 }));

// console.log(cart2);

// const cartPlus1 = cart.map(obj => ({ ...obj, count: obj.count + 1 }))

// console.log(cartPlus1);

// // padidinti 8974 produkto kieki 2

const cart = [
    { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
    { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];

// Prie kiekvieno produkto pridėti savybę total ir joje paskaičiuoti atitinkamo produkto bendrą sumą

 const cartPlus1 = cart.map(obj => ({ ...obj, total: 'price' * 'count' }))

// const cartWithTotal = cart.map(obj => ({...obj, total: obj.price * obj.count
// }));

const cartWithTotal = cart.map(p => ({...p, total: p.count * p.price}));

console.log(cartWithTotal);

const newProduct = { id: 7892, title: 'Morkos beveik plautos', price: 0.35, count: 1 };
 
// pridėti produktą į cart masyvą
 
cart.push(newProduct);
// cart.unshift(cart); // ides i pradzia
console.log(cart);

const batonas = cart.find(p => p.title == 'Batonas studentų'); 
console.log(batonas);

const batonas2 = cart.find(p => p.id == '877'); 
console.log(batonas2);

const newProduct2 = { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 };
const newProduct3 = { id: 9320, title: 'Bulvės 4kl', price: 0.98, count: 2 };
const deti = rand(0, 1) ? newProduct2 : newProduct3;
// prideti produktą deti į krepšelį
 
// const cartProduct = cart.find(p => p.id == '974');
// if (cartProduct) {const cartPlus3 = cart.map(p => p.id == '974' ? { ...p, count: p.count * 2 } : p);
//   console.log(cartPlus3);
// } else {cart.push(newProduct3);
//   console.log(cart);
// }

const cartProduct = cart.find(p => p.id == deti);

if (cartProduct) {
  cartProduct.count = cartProduct.count + deti.count;
} else {
  cart.push(deti);
}  

console.log(cartProduct)



















