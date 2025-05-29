
// let (div + span + span + span)
// let x1 = document.querySelector('#go9 + div +span')

let iksas1 = document.querySelector('#go9 div span').innerText;
let iksas2 = document.querySelector('#go9 div span + span').innerText;
// let iksas3 = document.querySelector('#go9 div span + span + span').innerText;



const iksas3 = iksas1 * iksas2;
console.log(iksas3)

// Kaip parodyt rezultata?
// document.querySelector('whatever').textContent = ${myVariable}

// property sets or returns the number content of an element.


// const userInput = document.getElementById("userInput");
// const value = userInput.value;

// 3.
// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. Kintamuosius ir gautą rezultatą 
// įrašykite į atitinkamus span tagus, esančius section tage su id=go3.

<section id="go3">
  <span id="var1"></span>
  <span id="var2"></span>
  <span id="result"></span>
</section>

<script>
  let a = Math.floor(Math.random() * 5);
  let b = Math.floor(Math.random() * 5);
  let larger, smaller;
  if (a > b) {
    larger = a;
    smaller = b;
  } else {
    larger = b;
    smaller = a;
  }
  let result = larger / smaller;
  document.getElementById("go3").innerHTML = `
    <span id="var1">Variable 1: ${a}</span>
    <span id="var2">Variable 2: ${b}</span>
    <span id="result">Result: ${result}</span>
  `;
</script>

<section id="go3">
  <span id="var1"></span>
  <span id="var2"></span>
  <span id="result"></span>
</section>

<script>
  let a = Math.floor(Math.random() * 5);
  let b = Math.floor(Math.random() * 5);
  let larger, smaller;
  if (a > b) {
    larger = a;
    smaller = b;
  } else {
    larger = b;
    smaller = a;
  }
  let result = larger / smaller;
  document.getElementById("go3").innerHTML = `
    <span id="var1">Variable 1: ${a}</span>
    <span id="var2">Variable 2: ${b}</span>
    <span id="result">Result: ${result}</span>
  `;
</script>

A rand(min, max) function is provided.
The range for random numbers is from 0 to 4.
The result should be displayed in a section with id="go3".
How to solve
Use the rand() function to generate two random numbers, divide the larger by the smaller, and display the result.
Step 1
.
Generate two random numbers.
Use the rand() function to generate two random numbers between 0 and 4.
Assign the numbers to variables num1 and num2.
Step 2
.
Determine the larger and smaller numbers.
Use an if statement to compare num1 and num2.
Assign the larger number to larger and the smaller to smaller.
Step 3
.
Calculate the division.
Divide larger by smaller and store the result in result.
Step 4
.
Display the results.
Get the section element with id="go3".
Set the inner HTML of the section to display num1, num2, and result.

// 4.
// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems 
// priskirkite atsitiktines reikšmes nuo 50 iki 200. Iš section tage su id=go4 
// esančių div tagų padarykite atitinkamo dydžio (px) apskritimus. 
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

// 5.
// Naudokite funkcija rand(). Į section tage su id=go5 esančius span įrašykite 
// 3 skaičius nuo -10 iki 10. Skaičius mažesnių už 0 spausdinkite raudonai,  
// didesnius už 0 mėlynai, o 0 žaliai.


// 6.
// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida,
//  daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuris skaičiuos žvakių 
// kainą ir užpildykite formą easnčią section tage su id=go6. 
// Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

// 7.
// Naudokite funkciją rand(). Parašykite skriptą, kuris atsitiktine tvarka 
// generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, 
// arba keturkampį arba trikampį.
//
// 8.
// Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. 
// Rezultatus įrašyti į šalia tam skirtas vietas.

// 9.
// Užpildyti daugybos lentelę, esančią tage section su id=go9.
//
// 10.
// Keturkapius, esančius tage section su id=go10, kurių plotas didesnis nei 10000 (px) 
// nuspalvinkite raudonai.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














