function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let b1 = rand(-10, 10);
console.log(b1)
let b2 = rand(-10, 10);
console.log(b2)
let b3 = rand(-10, 10);
console.log(b3)

let spanas1 = document.querySelector('#go5 span');
let spanas2 = document.querySelector('#go5 span span');
let spanas3 = document.querySelector('#go5 span  span  span');
spanas1.innerHTML = b1;
spanas2.innerHTML = b2;
spanas3.innerHTML = b3;

if (b1 < 0) {
spanas1.style.color = 'red';
} else if (b1 > 0) {
spanas1.style.color = 'blue';
} else 
{spanas1.style.color = 'green';
}

if (b2 < 0) {
spanas2.style.color = 'red';
} else if (b2 > 0) {
spanas2.style.color = 'blue';
} else {
spanas2.style.color = 'green';
}

if (b3 < 0) {
spanas3.style.color = 'red';
} else if (b3 > 0) {
spanas3.style.color = 'blue';
} else {
spanas3.style.color = 'green';
}










