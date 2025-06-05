console.log(`Labas, Udra!`);

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const stringas = `A`.repeat((rand)(1, 11)) + rand(10,99) + `A`.repeat((rand)(1, 11))+ rand(10,99);
const regex = /[0-9]{2}/g; // regex skiriamieji zenklai

const found = stringas.match(regex); // gali nieko nerast, bus NULL

console.log(typeof regex)

console.log(stringas);

if (null === found) {
  console.log (`nieko neradau`)
}  else {
  console.log(+found[0]);  // bus stringas, su + bus skaicius [1 array found]
}

// for (let index = 0; index <= 5; index++) {
//   if (index % 2 == 0) console.log(`Hello World`, index)
// }


//Atspausdinti consoleje po viena visas ne `a` (tiek ne mazas, tiek ne didelias)

const str1 = 'Ananasas';

// for (let index = 0; i < str1.length; index++) {
//   str1[index] > 'a' && console.log(str1[index]);
// }

// for (let index = 0; index < str1.length; index++) {
//   if (str1[index] > `a`) console.log((str1[index]));
// }

for (let i = 0; i < str1.length; i++) {
  if (str1[i].toLowerCase() != `a`) {
    console.log(str1[i])
  }
}

const str2 = `Bananas`;
// Is stringo reika padaryti kita stringa, kuriame nebutu 'a' raidziu. 
// Padarius toki stringa ji atspausdinti konsoleje

let result2 = ``;

for (let i = 0; i < str2.length; i++) {
  if (str2[i].toLowerCase() != `a`) {
    result2 = result2 + str2[i];
    // console.log(str2[i] + str2[i][0])
    console.log(result2)
  }
}

// suskaiciuoti kiek `a` raidziu yra str2 stringe

for (let i = 0; i < str2.length; i++) {
  if (`a` == str2[i]) console.log(str2[i].length)
}


// Iš stringo reikia padaryti kitą stringą, kuriame vietoj 'a' raidžių būtų '*'. 
// Padarius tokį stringą jį atspausdinti konsolėje

for (let i = 0; i < str2.length; i++) {
  if (`a` == str2[i]) console.log(str2[i].length)
}






























