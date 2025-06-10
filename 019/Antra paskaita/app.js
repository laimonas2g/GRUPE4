console.log('Labas, mygtukai!!');

const funClick1 = function() {
  console.log('Mygtuka 1 kazkas paspaude');
}

//1
const btn1 = document.querySelector('#btn1');

//2

// btn1.addEventListener

//3
btn1.addEventListener('click', funClick1);
const btn2 = document.querySelector('#btn2');

// Paspaudus "Bebro mygtuką" h2 turi nusidažyti kažkokia spalva (ne juoda)

const funClick2 = function() {
  let spalvaH2 = document.querySelector('h2');
  // spalvaH2.style.color =  spalvaH2.style.color === 'crimson' ? 'black' : 'crimson';
  if (spalvaH2.style.color === 'crimson'){
    spalvaH2.style.color = 'black';
  } else {
    spalvaH2.style.color = 'crimson';
  }
}

// const funClick3 = function() {
//   btn2.style.color = 'skyblue';
// }

// const funClick4 = function() {
//   btn2.style.color = 'black';
// }



btn2.addEventListener('click', funClick2);

btn2.addEventListener('mouseover', function() {
  btn2.style.color = 'skyblue';
});

btn2.addEventListener('mouseleave', function() {
  btn2.style.color = 'black';
});
































const daugiau3 = function(sk1, sk2) {
  return sk1 > sk2 ? sk1 : sk2; // ternary ? if; : else
}


function mano1(pa1, pa2) {
  if(pa1 > pa2) {
    return pa1;  
  } else {
    return pa2;
  }
}

const hVienas = function(tekstas, spalva = 'crimson') { //anonimine funkcija
const section = document.querySelector('section');
const h1 = document.createElement('div');
h1.style.color = spalva;
h1.innerText = tekstas;
section.appendChild(h1);
}





























