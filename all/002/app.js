

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
    li.innerText = p.userId;
    ul.appendChild(li);
  });
}