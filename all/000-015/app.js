const str2 = 'Bananas';
// Iš stringo reikia padaryti kitą stringą, kuriame nebūtų 'a' raidžių. Padarius tokį stringą jį atspausdinti konsolėje


let resultC = 0;
for (let i = 0; i < str2.length; i++) {

  if (str2[i].toLowerCase() == 'a') {
    resultC++;
  }
}

console.log(resultC);


// Iš stringo reikia padaryti kitą stringą, kuriame vietoj 'a' raidžių būtų '*'. Padarius tokį stringą jį atspausdinti konsolėje

let result3 = '';
for (let i = 0; i < str2.length; i++) {

  if (str2[i].toLowerCase() != 'a') {
    result3 = result3 + str2[i];
  } else {
    result3 = result3 + '*';
  }
}

console.log(result3);

// --- Similar questions for you to solve ---

// 1. Iš stringo 'Pineapple' padarykite kitą stringą, kuriame nebūtų 'e' raidžių. Atspausdinkite rezultatą konsolėje.

// 2. Suskaičiuokite, kiek kartų stringe 'Mississippi' pasikartoja raidė 's'. Atspausdinkite rezultatą konsolėje.

// 3. Iš stringo 'Strawberry' padarykite kitą stringą, kuriame vietoj 'r' raidžių būtų skaičius '1'. Atspausdinkite rezultatą konsolėje.



let result5 = '';
const a2 = `Mississippi`; 
for (let i = 0; i < a2.length; i++) {
  if (a2[i].toLowerCase() == 's') {
    result5++;
  }
}
console.log(result5);

let result6 = '';
const a3 = `Strawberry`;
for (let i = 0; i < a3.length; i++) {
  if (a3[i].toLowerCase() != 'r') {
    result6 = result6 + a3[i];
  } else {
    result6 = result6 + '1';
  }
}
console.log(result6);

// 1. Iš stringo 'Watermelon' padarykite kitą stringą, kuriame nebūtų 'o' raidžių. Atspausdinkite rezultatą konsolėje.
// 2. Suskaičiuokite, kiek kartų stringe 'Programming' pasikartoja raidė 'g'. Atspausdinkite rezultatą konsolėje.
// 3. Iš stringo 'Blueberry' padarykite kitą stringą, kuriame vietoj 'b' raidžių būtų skaičius '2'. Atspausdinkite rezultatą konsolėje.
// 4. Iš stringo 'Chocolate' padarykite kitą stringą, kuriame nebūtų 'c' raidžių. Atspausdinkite rezultatą konsolėje.
// 5. Suskaičiuokite, kiek kartų stringe 'Missouri' pasikartoja raidė 'i'. Atspausdinkite rezultatą konsolėje.
// 6. Iš stringo 'Raspberry' padarykite kitą stringą, kuriame vietoj 's' raidžių būtų simbolis '#'. Atspausdinkite rezultatą konsolėje.
// 7. Iš stringo 'Mandarin' padarykite kitą stringą, kuriame nebūtų 'n' raidžių. Atspausdinkite rezultatą konsolėje.
// 8. Suskaičiuokite, kiek kartų stringe 'Tennessee' pasikartoja raidė 'e'. Atspausdinkite rezultatą konsolėje.
// 9. Iš stringo 'Apricot' padarykite kitą stringą, kuriame vietoj 'p' raidžių būtų simbolis '@'. Atspausdinkite rezultatą konsolėje.
// 10. Iš stringo 'Cucumber' padarykite kitą stringą, kuriame nebūtų 'u' raidžių. Atspausdinkite rezultatą konsolėje.
// 11. Suskaičiuokite, kiek kartų stringe 'Alabama' pasikartoja raidė 'a'. Atspausdinkite rezultatą konsolėje.
// 12. Iš stringo 'Blackberry' padarykite kitą stringą, kuriame vietoj 'l' raidžių būtų skaičius '7'. Atspausdinkite rezultatą konsolėje.
// 13. Iš stringo 'Peach' padarykite kitą stringą, kuriame nebūtų 'h' raidžių. Atspausdinkite rezultatą konsolėje.
// 14. Suskaičiuokite, kiek kartų stringe 'Connecticut' pasikartoja raidė 'c'. Atspausdinkite rezultatą konsolėje.
// 15. Iš stringo 'Grapefruit' padarykite kitą stringą, kuriame vietoj 'r' raidžių būtų simbolis '&'. Atspausdinkite rezultatą konsolėje.
// 16. Iš stringo 'Lemonade' padarykite kitą stringą, kuriame nebūtų 'm' raidžių. Atspausdinkite rezultatą konsolėje.
// 17. Suskaičiuokite, kiek kartų stringe 'Massachusetts' pasikartoja raidė 's'. Atspausdinkite rezultatą konsolėje.
// 18. Iš stringo 'Papaya' padarykite kitą stringą, kuriame vietoj 'a' raidžių būtų simbolis '%'. Atspausdinkite rezultatą konsolėje.
// 19. Iš stringo 'Kiwi' padarykite kitą stringą, kuriame nebūtų 'i' raidžių. Atspausdinkite rezultatą konsolėje.
// 20. Suskaičiuokite, kiek kartų stringe 'California' pasikartoja raidė 'a'. Atspausdinkite rezultatą konsolėje.

const str3 = 'Watermelon'; // Declare a string variable with the value 'Watermelon'
let result7 = '';          // Initialize an empty string to store the result

for (let i = 0; i < str3.length; i++) { // Loop through each character in str3
  if (str3[i].toLowerCase() != 'o') {   // If the character (case-insensitive) is not 'o'
    result7 = result7 + str3[i];        // Add the character to result7
  }
}
console.log(result7); // Output the result string (all characters except 'o')
//------------------------------------------------------------------------------------------
const str4 = 'Programming'; // Declare a string variable with the value 'Programming'
let result8 = 0;            // Initialize a counter to zero

for (let i = 0; i < str4.length; i++) { // Loop through each character in str4
  if (str4[i].toLowerCase() == 'g') {   // If the character (case-insensitive) is 'g'
    result8++;                          // Increment the counter
  }
}
console.log(result8); // Output the number of 'g' characters found
//------------------------------------------------------------------------------------------
const str5 = 'Blueberry'; // Declare a string variable with the value 'Blueberry'
let result9 = '';         // Initialize an empty string to store the result

for (let i = 0; i < str5.length; i++) { // Loop through each character in str5
  if (str5[i].toLowerCase() != 'b') {   // If the character (case-insensitive) is not 'b'
    result9 = result9 + str5[i];        // Add the character to result9
  } else {
    result9 = result9 + '2';            // If the character is 'b', add '2' instead
  }
}
console.log(result9); // Output the result string (with 'b' replaced by '2')
//------------------------------------------------------------------------------------------
const str6 = 'Chocolate'; // Declare a string variable with the value 'Chocolate'
let result10 = '';        // Initialize an empty string to store the result
for (let i = 0; i < str6.length; i++) { // Loop through each character in str6
  if (str6[i].toLowerCase() != 'c') {   // If the character (case-insensitive) is not 'c'
    result10 = result10 + str6[i];      // Add the character to result10
  }
}
console.log(result10); // Output the result string (all characters except 'c')
//------------------------------------------------------------------------------------------
const str7 = 'Missouri'; // Declare a string variable with the value 'Missouri'
let result11 = 0;        // Initialize a counter to zero
for (let i = 0; i < str7.length; i++) { // Loop through each character in str7
  if (str7[i].toLowerCase() == 'i') {    // If the character (case-insensitive) is 'i'
    result11++;                          // Increment the counter
  }
}
console.log(result11); // Output the number of 'i' characters found
//------------------------------------------------------------------------------------------
const str8 = 'Raspberry'; // Declare a string variable with the value 'Raspberry'
let result12 = '';        // Initialize an empty string to store the result
for (let i = 0; i < str8.length; i++) { // Loop through each character in str8
  if (str8[i].toLowerCase() != 's') {    // If the character (case-insensitive) is not 's'
    result12 = result12 + str8[i];       // Add the character to result12
  } else {
    result12 = result12 + '#';           // If the character is 's', add '#' instead
  }
}
console.log(result12); // Output the result string (with 's' replaced by '#')
//------------------------------------------------------------------------------------------
const str9 = 'Mandarin'; // Declare a string variable with the value 'Mandarin'
let result13 = '';        // Initialize an empty string to store the result
for (let i = 0; i < str9.length; i++) { // Loop through each character in str9
  if (str9[i].toLowerCase() != 'n') {    // If the character (case-insensitive) is not 'n'
    result13 = result13 + str9[i];       // Add the character to result13
  }
}
console.log(result13); // Output the result string (all characters except 'n')
//------------------------------------------------------------------------------------------
const str10 = 'Tennessee'; // Declare a string variable with the value 'Tennessee'
let result14 = 0;          // Initialize a counter to zero
for (let i = 0; i < str10.length; i++) { // Loop through each character in str10
  if (str10[i].toLowerCase() == 'e') {    // If the character (case-insensitive) is 'e'
    result14++;                           // Increment the counter
  }
}
console.log(result14); // Output the number of 'e' characters found
//------------------------------------------------------------------------------------------
const str11 = 'Apricot'; // Declare a string variable with the value 'Apricot'
let result15 = '';        // Initialize an empty string to store the result
for (let i = 0; i < str11.length; i++) { // Loop through each character in str11
  if (str11[i].toLowerCase() != 'p') {    // If the character (case-insensitive) is not 'p'
    result15 = result15 + str11[i];       // Add the character to result15
  } else {
    result15 = result15 + '@';            // If the character is 'p', add '@' instead
  }
}
console.log(result15); // Output the result string (with 'p' replaced by '@')
//------------------------------------------------------------------------------------------
const str12 = 'Cucumber'; // Declare a string variable with the value 'Cucumber'
let result16 = '';         // Initialize an empty string to store the result
for (let i = 0; i < str12.length; i++) { // Loop through each character in str12
  if (str12[i].toLowerCase() != 'u') {    // If the character (case-insensitive) is not 'u'
    result16 = result16 + str12[i];       // Add the character to result16
  }
}
console.log(result16); // Output the result string (all characters except 'u')
//------------------------------------------------------------------------------------------
const str13 = 'Alabama'; // Declare a string variable with the value 'Alabama'
let result17 = 0;        // Initialize a counter to zero
for (let i = 0; i < str13.length; i++) { // Loop through each character in str13
  if (str13[i].toLowerCase() == 'a') {    // If the character (case-insensitive) is 'a'
    result17++;                           // Increment the counter
  }
}
console.log(result17); // Output the number of 'a' characters found
//------------------------------------------------------------------------------------------
const str14 = 'Blackberry'; // Declare a string variable with the value 'Blackberry'
let result18 = '';          // Initialize an empty string to store the result
for (let i = 0; i < str14.length; i++) { // Loop through each character in str14
  if (str14[i].toLowerCase() != 'l') {    // If the character (case-insensitive) is not 'l'
    result18 = result18 + str14[i];       // Add the character to result18
  } else {
    result18 = result18 + '7';            // If the character is 'l', add '7' instead
  }
}
console.log(result18); // Output the result string (with 'l' replaced by '7')
//------------------------------------------------------------------------------------------
const str15 = 'Peach'; // Declare a string variable with the value 'Peach'
let result19 = '';      // Initialize an empty string to store the result
for (let i = 0; i < str15.length; i++) { // Loop through each character in str15
  if (str15[i].toLowerCase() != 'h') {    // If the character (case-insensitive) is not 'h'
    result19 = result19 + str15[i];       // Add the character to result19
  }
}
console.log(result19); // Output the result string (all characters except 'h')
//------------------------------------------------------------------------------------------
const str16 = 'Connecticut'; // Declare a string variable with the value 'Connecticut'
let result20 = 0;            // Initialize a counter to zero
for (let i = 0; i < str16.length; i++) { // Loop through each character in str16  
  if (str16[i].toLowerCase() == 'c') {    // If the character (case-insensitive) is 'c'
    result20++;                           // Increment the counter
  }
}
console.log(result20); // Output the number of 'c' characters found
//------------------------------------------------------------------------------------------
const str17 = 'Grapefruit'; // Declare a string variable with the value 'Grapefruit'
let result21 = '';          // Initialize an empty string to store the result
for (let i = 0; i < str17.length; i++) { // Loop through each character in str17
  if (str17[i].toLowerCase() != 'r') {    // If the character (case-insensitive) is not 'r'
    result21 = result21 + str17[i];       // Add the character to result21
  } else {
    result21 = result21 + '&';            // If the character is 'r', add '&' instead
  }
}
console.log(result21); // Output the result string (with 'r' replaced by '&')
//------------------------------------------------------------------------------------------
const str18 = 'Lemonade'; // Declare a string variable with the value 'Lemonade'
let result22 = '';        // Initialize an empty string to store the result
for (let i = 0; i < str18.length; i++) { // Loop through each character in str18
  if (str18[i].toLowerCase() != 'm') {    // If the character (case-insensitive) is not 'm'
    result22 = result22 + str18[i];       // Add the character to result22
  }
}
console.log(result22); // Output the result string (all characters except 'm')
//------------------------------------------------------------------------------------------
const str19 = 'Massachusetts'; // Declare a string variable with the value 'Massachusetts'
let result23 = 0;             // Initialize a counter to zero
for (let i = 0; i < str19.length; i++) { // Loop through each character in str19
  if (str19[i].toLowerCase() == 's') {    // If the character (case-insensitive) is 's'
    result23++;                           // Increment the counter
  }
} 
console.log(result23); // Output the number of 's' characters found
//------------------------------------------------------------------------------------------
const str20 = 'Papaya'; // Declare a string variable with the value 'Papaya'
let result24 = '';      // Initialize an empty string to store the result
for (let i = 0; i < str20.length; i++) { // Loop through each character in str20
  if (str20[i].toLowerCase() != 'a') {    // If the character (case-insensitive) is not 'a'
    result24 = result24 + str20[i];       // Add the character to result24
  } else {
    result24 = result24 + '%';            // If the character is 'a', add '%' instead
  }
}
console.log(result24); // Output the result string (with 'a' replaced by '%')
//------------------------------------------------------------------------------------------
const str21 = 'Kiwi'; // Declare a string variable with the value 'Kiwi'
let result25 = '';      // Initialize an empty string to store the result
for (let i = 0; i < str21.length; i++) { // Loop through each character in str21
  if (str21[i].toLowerCase() != 'i') {    // If the character (case-insensitive) is not 'i'
    result25 = result25 + str21[i];       // Add the character to result25
  }
}
console.log(result25); // Output the result string (all characters except 'i')
//------------------------------------------------------------------------------------------
const str22 = 'California'; // Declare a string variable with the value 'California'
let result26 = 0;            // Initialize a counter to zero
for (let i = 0; i < str22.length; i++) { // Loop through each character in str22
  if (str22[i].toLowerCase() == 'a') {    // If the character (case-insensitive) is 'a'
    result26++;                           // Increment the counter
  }
}
console.log(result26); // Output the number of 'a' characters found
//------------------------------------------------------------------------------------------
console.clear()
//------------------------------------------------------------------------------------------
// 1. Iš stringo 'Watermelon' padarykite kitą stringą, kuriame nebūtų 'o' raidžių. Atspausdinkite rezultatą konsolėje.
// 2. Suskaičiuokite, kiek kartų stringe 'Programming' pasikartoja raidė 'g'. Atspausdinkite rezultatą konsolėje.
// 3. Iš stringo 'Blueberry' padarykite kitą stringą, kuriame vietoj 'b' raidžių būtų skaičius '2'. Atspausdinkite rezultatą konsolėje.
// 4. Iš stringo 'Chocolate' padarykite kitą stringą, kuriame nebūtų 'c' raidžių. Atspausdinkite rezultatą konsolėje.
// 5. Suskaičiuokite, kiek kartų stringe 'Missouri' pasikartoja raidė 'i'. Atspausdinkite rezultatą konsolėje.
// 6. Iš stringo 'Raspberry' padarykite kitą stringą, kuriame vietoj 's' raidžių būtų simbolis '#'. Atspausdinkite rezultatą konsolėje.
// 7. Iš stringo 'Mandarin' padarykite kitą stringą, kuriame nebūtų 'n' raidžių. Atspausdinkite rezultatą konsolėje.
// 8. Suskaičiuokite, kiek kartų stringe 'Tennessee' pasikartoja raidė 'e'. Atspausdinkite rezultatą konsolėje.
// 9. Iš stringo 'Apricot' padarykite kitą stringą, kuriame vietoj 'p' raidžių būtų simbolis '@'. Atspausdinkite rezultatą konsolėje.
// 10. Iš stringo 'Cucumber' padarykite kitą stringą, kuriame nebūtų 'u' raidžių. Atspausdinkite rezultatą konsolėje.
// 11. Suskaičiuokite, kiek kartų stringe 'Alabama' pasikartoja raidė 'a'. Atspausdinkite rezultatą konsolėje.
// 12. Iš stringo 'Blackberry' padarykite kitą stringą, kuriame vietoj 'l' raidžių būtų skaičius '7'. Atspausdinkite rezultatą konsolėje.
// 13. Iš stringo 'Peach' padarykite kitą stringą, kuriame nebūtų 'h' raidžių. Atspausdinkite rezultatą konsolėje.
// 14. Suskaičiuokite, kiek kartų stringe 'Connecticut' pasikartoja raidė 'c'. Atspausdinkite rezultatą konsolėje.
// 15. Iš stringo 'Grapefruit' padarykite kitą stringą, kuriame vietoj 'r' raidžių būtų simbolis '&'. Atspausdinkite rezultatą konsolėje.
// 16. Iš stringo 'Lemonade' padarykite kitą stringą, kuriame nebūtų 'm' raidžių. Atspausdinkite rezultatą konsolėje.
// 17. Suskaičiuokite, kiek kartų stringe 'Massachusetts' pasikartoja raidė 's'. Atspausdinkite rezultatą konsolėje.
// 18. Iš stringo 'Papaya' padarykite kitą stringą, kuriame vietoj 'a' raidžių būtų simbolis '%'. Atspausdinkite rezultatą konsolėje.
// 19. Iš stringo 'Kiwi' padarykite kitą stringą, kuriame nebūtų 'i' raidžių. Atspausdinkite rezultatą konsolėje.
// 20. Suskaičiuokite, kiek kartų stringe 'California' pasikartoja raidė 'a'. Atspausdinkite rezultatą konsolėje.

1. 
const str23 = 'Watermelon';
let result27 = ''; 

for (let ii = 0; ii < str23.length; ii++) {
  if (str23[ii].toLowerCase() != 'a') {
    result27 = result27 + str23[ii];
  }
}
console.log(result27);




















