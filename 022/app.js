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

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // kai sulaukiam atsakyma paverciam objektu
  .then(json => {
    console.log(json);
    printTitles(json); // sukurtas variable ateityje, 34 eilute
  }) // atspausdinam konsoleje

console.log('kodas po fetch');  // nelaukia response ir spausdina

const printTitles = obj => { 
  const ul = document.querySelector('ul');

  obj.forEach(p => {
    const li = document.createElement('li');
    li.innerText = p.title;
    ul.appendChild(li);
  });
}























































