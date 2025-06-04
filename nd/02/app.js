// Duotos Funkcijos

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}
// for (let i = 0; i < 10; i++) {     
//   // i = skaiciuotuvas, kol True, padidinam vienu vientu
//   console.log('GA GA');
// }
///////////// 1. /////////////

// In your browser, insert 14 h1 tags with the number 4
// and 14 h4 tags with the number 1. 
// All tags must line up on one line.

let h1String = '';

for (let i = 0; i < 14; i++) {
  h1String += '<h1>' + [i] + '</h1>';
}

let h1 = document.querySelector('h1');
h1.innerHTML = h1String;
h1.style.display = 'flex';
h1.style.gap = '3px';
console.log(h1String)

///////////// 2. /////////////

// Using the rand() function in your browser, 
// write 44 random numbers from 14 to 44 in a string 
// (there must be spaces between the numbers). 
// Color the numbers that are divisible by 4 without a remainder red, 
// and the others blue.

let h5String = '';

for (let i = rand(14, 44); i < 44; i++) {
  h5String += '<h5>' + [i] + '</h5>';
}

let h5 = document.querySelector('h5');
h5.innerHTML = h5String;
h5.style.display = 'flex';
h5.style.gap = '3px';
console.log(h5String)

//  = rand(14, 44);

  // if (i % 2) {  
  //  li.style.color = 'green';
  //  } else {
  //  li.style.color = 'crimson';
  //  }

// let htmlLis = '';

// for (let i = 0; i < piestukai.length; i++) {
//   htmlLis += '<li>' + piestukai[i] + '</li>'; 
// }

// console.log(htmlLis);

// const ul = document.querySelector('ul'); 

// const allLis = document.querySelectorAll('li') 

// console.log(allLis) 

// for (let i = 0; i < allLis.length; i++) {
//   const li = allLis[i];
//   if (i % 2) {  erciamas i logini kintamaji true 0/0 liekana 0
//     li.style.color = 'green';
//   } else {
//     li.style.color = 'crimson';
//   }
// }


///////////// 3. /////////////

// In the browser, draw 14 blue circles arranged in a row.

////////////// 4. //////////////

// In the browser, draw 4 blue and 4 red circles arranged in a “zebra” pattern 
// (red, blue, red…).


///////////// 5. /////////////

// In your browser, draw a multiplication table for 4 times the numbers from 4 to 14.
// Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.

///////////// 6. /////////////

// Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). 
// Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) 
// žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.


///////////// 7. /////////////




///////////// 8. /////////////




///////////// 9. /////////////




///////////// 10. /////////////




























