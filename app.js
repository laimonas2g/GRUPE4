const skaiciaiPaprasti = [7, 9, 7, 9];
/* Question_1: Create a new array where each number in "const skaiciaiPaprasti" is multiplied by 5, print to the console */
const padaugintiSkaiciai = skaiciaiPaprasti.map(sk => sk * 5);

console.log(padaugintiSkaiciai);


const cart = [
  { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
  { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
  { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
  { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];
/* Question_2: Increase the quantities of all products by 1 that are in "const cart", print to the console */
const cartPlus1 = cart.map(obj => ({ ...obj, count: obj.count + 1 }))
console.log(cartPlus1);

/* Question_3: Increase the quantity of product 8974 by 2 that are in "const cart", print to the console */
const cartPlus3 = cart.map(obj => obj.id === 8974 ? { ...obj, count: obj.count + 2 } : { ...obj });
console.log(cartPlus3);


const skaiciaiObjekte = [
  { skaicius: 4 },
  { skaicius: 7 },
  { skaicius: 56 },
  { skaicius: 14 },
  { skaicius: 11 }
];
/* Question_4: Create a new array where each number in "const skaiciaiObjekte" is multiplied by 5 numbers 
must remain in the given object, the object property name must remain the same, print to the console */
const skaiciaiObjekte2 = skaiciaiObjekte.map(obj => { return { skaicius: obj.skaicius * 5 } });
console.log(skaiciaiObjekte2);


const stebuklas = [
  4,
  [88, 77],
  5,
];
/* Question_5: Create a new array where each number in the array "const stebuklas" is multiplied by 5 numbers 
must remain in the given object, the object property name must remain the same, print to the console */
const shallowStebuklas = [...stebuklas];
const deepStebuklas = structuredClone(stebuklas);
stebuklas[0] = stebuklas[0] * 5;
stebuklas[1][0] = stebuklas[1][0] * 5;
stebuklas[1][1] = stebuklas[1][1] * 5;
stebuklas[2] = stebuklas[2] * 5;
console.log(shallowStebuklas);
console.log(deepStebuklas);


const digits = [5, 8, 74, 0, 32, 75, 4];
/* Question_6: With the forEach loop, print the numbers in "const digits" one by one in the console, multiplied by 3 (in a column), print to the console */
digits.forEach(el => console.log(el * 3));


/* Question_7 With a forEach loop, print the numbers in "const digits" in the console one number at a time (column) but not == 0 using ternary, , print to the console */
digits.forEach(el => el != 0 ? console.log(el) : 0);


const str2 = 'Bananas';
/* Question_8 You need to make another string from the string in "const str2", in which the letters 'a' are replaced by '*'. 
After making such a string, print it to the console */
let result3 = '';
for (let i = 0; i < str2.length; i++) {

    if (str2[i].toLowerCase() != 'a') {
        result3 = result3 + str2[i];
    } else {
        result3 = result3 + '*';
    }
}
console.log(result3);


const skaiciaiPaprasti2 = [7, 10, 7, 100];
/* Question_9: Create a new array where each number in "const skaiciaiPaprasti2" is multiplied by 5, print to the console */
const padaugintiSkaiciai2 = skaiciaiPaprasti2.map(sk => sk * 5);
console.log(padaugintiSkaiciai2);


const skaiciaiObjekte3 = [
  { skaicius: 10 },
  { skaicius: 7 },
  { skaicius: 56 },
  { skaicius: 14 },
  { skaicius: 11 }
];
/* Question_10: Create a new array where each number in "const skaiciaiObjekte3" is multiplied by 7, 
numbers must remain in the given object, the object property name must remain the same, print to the console */
const skaiciaiObjekte4 = skaiciaiObjekte3.map(obj => { return { skaicius: obj.skaicius * 5 } });
console.log(skaiciaiObjekte4);

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

const question11 = [
  { skaicius: 10 },
  { skaicius: 100 },
  { skaicius: 2 },
  { skaicius: 5 },
  { skaicius: 7 }
];
/* Question_11: Create a new array where each number in "const question11" is multiplied by 3, 
numbers must remain in the given object, the object property name must remain the same, print to the console */
const question11a = question11.map(obj => {return { skaicius: obj.skaicius *3}});
console.log(question11a);
console.log(typeof question11a[1]);
for (let i = 0; i < question11a.length; i++) {
 console.log(question11a[i])
};

const question12 = [2, 4, 6, 8];
/* Question_12: Create a new array where each number in "const question12" is multiplied by 10, print to the console */
// const  question12a = question12.map(obj => {return [ skaicius = obj.skaicius * 10]}); //kam return reikalingas masyvo objekte, bet ne masyve? objektas vs primityvas(number)?
const  question12a = question12.map( obj => obj * 10 );
console.log(question12a);
console.log(typeof question12a[1]);
for (let i = 0; i < question12a.length; i++) {
  console.log(question12a[i]);
}

const question13 = [
  { id: 1, title: 'Milk', price: 1.5, count: 3 },
  { id: 2, title: 'Bread', price: 2.0, count: 2 }
];
/* Question_13: Increase the quantities of all products by 2 that are in "const question13", print to the console */
const question13a = question13.map(obj => ({ ...obj, count: obj.count + 2 })); //kodel 1 garbanotas ir 2 skliaustai, o 12 ne?
console.log(question13a);
for (let i = 0; i < question13a.length; i++) {
  console.log(question13a[i]);
}

const question14 = [
  { id: 5, title: 'Apple', price: 0.5, count: 1 },
  { id: 6, title: 'Banana', price: 0.7, count: 2 }
];
/* Question_14: Increase the quantity of product 6 by 3 that are in "const question14", print to the console */
const question14a = question14.map( obj => obj.id === 6 ? {...obj, count: obj.count +3} : {...obj} );
console.log(question14a);

const question15 = [
  111,
  [44, 55],
  4,
  77
];
/* Question_15: Create a new array where each number in "const question15" is multiplied by 3, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

// const question15a = question15.map(el => (el * 3));
// const question15b = question15.map(obj => { return { obj: obj * 3 } });
// console.log(question15a);

const question15a = question15.map(el => {
  if (typeof el === 'number') {
    return el * 3;
  } else if (typeof el === 'object' && el !== null && el.length) {
    return el.map(num => num * 3);
  }
});
console.log(question15a);

const question15b = question15.map(el => Array.isArray(el) ? el.map(num => num * 3) : el * 3);
console.log(question15b)

 
// // padidintu visu produktu kiekius 1;

// const cart2 = cart.map(obj => ({ ...obj, count: obj.count + 1 }));

// console.log(cart2);

// const cartPlus1 = cart.map(obj => ({ ...obj, count: obj.count + 1 }))

// console.log(cartPlus1);

// // padidinti 8974 produkto kieki 2

const cartas = [
    { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
    { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
    { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
    { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];

// Prie kiekvieno produkto pridėti savybę total ir joje paskaičiuoti atitinkamo produkto bendrą sumą

 const cartasPlus1 = cartas.map(obj => ({ ...obj, total: 'price' * 'count' }))

// const cartWithTotal = cart.map(obj => ({...obj, total: obj.price * obj.count
// }));

const cartasWithTotal = cartas.map(p => ({...p, total: p.count * p.price}));

console.log(cartasWithTotal);













const question16 = [
  1,
  [2, 3],
  4
];
/* Question_16: Create a new array where each number in the array "const question16" is multiplied by 4, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question17 = [3, 6, 9, 12];
/* Question_17: With the forEach loop, print the numbers in "const question17" one by one in the console, 
multiplied by 2 (in a column), print to the console */

const question18 = [0, 5, 10, 15];
/* Question_18: With a forEach loop, print the numbers in "const question18" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question19 = 'Apples';
/* Question_19: You need to make another string from the string in "const question19", in which the letters 'p' are replaced by '#'. 
After making such a string, print it to the console */

const question20 = [1, 2, 3, 4];
/* Question_20: Create a new array where each number in "const question20" is multiplied by 6, print to the console */

const question21 = [
  { skaicius: 8 },
  { skaicius: 12 },
  { skaicius: 20 }
];
/* Question_21: Create a new array where each number in "const question21" is multiplied by 4, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question22 = [
  { id: 11, title: 'Juice', price: 2.5, count: 1 },
  { id: 12, title: 'Water', price: 1.0, count: 4 }
];
/* Question_22: Increase the quantities of all products by 1 that are in "const question22", print to the console */

const question23 = [
  { id: 21, title: 'Eggs', price: 1.2, count: 6 },
  { id: 22, title: 'Cheese', price: 3.5, count: 2 }
];
/* Question_23: Increase the quantity of product 21 by 5 that are in "const question23", print to the console */

const question24 = [
  { skaicius: 5 },
  { skaicius: 15 },
  { skaicius: 25 }
];
/* Question_24: Create a new array where each number in "const question24" is multiplied by 7, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question25 = [
  2,
  [4, 6],
  8
];
/* Question_25: Create a new array where each number in the array "const question25" is multiplied by 3, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question26 = [7, 14, 21, 28];
/* Question_26: With the forEach loop, print the numbers in "const question26" one by one in the console, multiplied by 4 (in a column), 
print to the console */

const question27 = [0, 2, 4, 6, 8];
/* Question_27: With a forEach loop, print the numbers in "const question27" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question28 = 'Oranges';
/* Question_28: You need to make another string from the string in "const question28", in which the letters 'o' are replaced by '@'. 
After making such a string, print it to the console */

const question29 = [2, 4, 6, 8];
/* Question_29: Create a new array where each number in "const question29" is multiplied by 8, print to the console */

const question30 = [
  { skaicius: 9 },
  { skaicius: 18 },
  { skaicius: 27 }
];
/* Question_30: Create a new array where each number in "const question30" is multiplied by 6, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question31 = [
  { id: 31, title: 'Butter', price: 2.0, count: 2 },
  { id: 32, title: 'Jam', price: 2.5, count: 1 }
];
/* Question_31: Increase the quantities of all products by 3 that are in "const question31", print to the console */

const question32 = [
  { id: 41, title: 'Rice', price: 1.8, count: 5 },
  { id: 42, title: 'Beans', price: 2.2, count: 3 }
];
/* Question_32: Increase the quantity of product 42 by 4 that are in "const question32", print to the console */

const question33 = [
  { skaicius: 12 },
  { skaicius: 24 },
  { skaicius: 36 }
];
/* Question_33: Create a new array where each number in "const question33" is multiplied by 9, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question34 = [
  3,
  [6, 9],
  12
];
/* Question_34: Create a new array where each number in the array "const question34" is multiplied by 2, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question35 = [5, 10, 15, 20];
/* Question_35: With the forEach loop, print the numbers in "const question35" one by one in the console, multiplied by 5 (in a column), 
print to the console */

const question36 = [0, 3, 6, 9, 12];
/* Question_36: With a forEach loop, print the numbers in "const question36" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question37 = 'Grapes';
/* Question_37: You need to make another string from the string in "const question37", in which the letters 'e' are replaced by '!', 
After making such a string, print it to the console */

const question38 = [3, 6, 9, 12];
/* Question_38: Create a new array where each number in "const question38" is multiplied by 7, print to the console */

const question39 = [
  { skaicius: 14 },
  { skaicius: 28 },
  { skaicius: 42 }
];
/* Question_39: Create a new array where each number in "const question39" is multiplied by 8, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question40 = [
  { id: 51, title: 'Sugar', price: 1.1, count: 2 },
  { id: 52, title: 'Salt', price: 0.9, count: 3 }
];
/* Question_40: Increase the quantities of all products by 2 that are in "const question40", print to the console */

const question41 = [
  { id: 61, title: 'Pepper', price: 1.3, count: 1 },
  { id: 62, title: 'Cinnamon', price: 2.7, count: 2 }
];
/* Question_41: Increase the quantity of product 61 by 6 that are in "const question41", print to the console */

const question42 = [
  { skaicius: 16 },
  { skaicius: 32 },
  { skaicius: 48 }
];
/* Question_42: Create a new array where each number in "const question42" is multiplied by 10, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question43 = [
  4,
  [8, 12],
  16
];
/* Question_43: Create a new array where each number in the array "const question43" is multiplied by 5, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question44 = [6, 12, 18, 24];
/* Question_44: With the forEach loop, print the numbers in "const question44" one by one in the console, multiplied by 6 (in a column), 
print to the console */

const question45 = [0, 7, 14, 21, 28];
/* Question_45: With a forEach loop, print the numbers in "const question45" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question46 = 'Peaches';
/* Question_46: You need to make another string from the string in "const question46", in which the letters 'h' are replaced by '$'. 
After making such a string, print it to the console */

const question47 = [4, 8, 12, 16];
/* Question_47: Create a new array where each number in "const question47" is multiplied by 9, print to the console */

const question48 = [
  { skaicius: 18 },
  { skaicius: 36 },
  { skaicius: 54 }
];
/* Question_48: Create a new array where each number in "const question48" is multiplied by 11, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question49 = [
  { id: 71, title: 'Tomato', price: 1.4, count: 3 },
  { id: 72, title: 'Cucumber', price: 1.6, count: 2 }
];
/* Question_49: Increase the quantities of all products by 4 that are in "const question49", print to the console */

const question50 = [
  { id: 81, title: 'Carrot', price: 0.8, count: 5 },
  { id: 82, title: 'Potato', price: 0.6, count: 7 }
];
/* Question_50: Increase the quantity of product 82 by 8 that are in "const question50", print to the console */

const question51 = [
  { skaicius: 20 },
  { skaicius: 40 },
  { skaicius: 60 }
];
/* Question_51: Create a new array where each number in "const question51" is multiplied by 12, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question52 = [
  5,
  [10, 15],
  20
];
/* Question_52: Create a new array where each number in the array "const question52" is multiplied by 6, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question53 = [8, 16, 24, 32];
/* Question_53: With the forEach loop, print the numbers in "const question53" one by one in the console, multiplied by 7 (in a column), 
print to the console */

const question54 = [0, 9, 18, 27, 36];
/* Question_54: With a forEach loop, print the numbers in "const question54" in the console one number at a time (column) but not == 0 
using ternary, print to the console */

const question55 = 'Cherries';
/* Question_55: You need to make another string from the string in "const question55", in which the letters 'r' are replaced by '%'. 
After making such a string, print it to the console */

const question56 = [5, 10, 15, 20];
/* Question_56: Create a new array where each number in "const question56" is multiplied by 10, print to the console */

const question57 = [
  { skaicius: 22 },
  { skaicius: 44 },
  { skaicius: 66 }
];
/* Question_57: Create a new array where each number in "const question57" is multiplied by 13, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question58 = [
  { id: 91, title: 'Onion', price: 0.7, count: 2 },
  { id: 92, title: 'Garlic', price: 1.2, count: 1 }
];
/* Question_58: Increase the quantities of all products by 5 that are in "const question58", print to the console */

const question59 = [
  { id: 101, title: 'Lettuce', price: 1.1, count: 3 },
  { id: 102, title: 'Spinach', price: 1.5, count: 2 }
];
/* Question_59: Increase the quantity of product 101 by 9 that are in "const question59", print to the console */

const question60 = [
  { skaicius: 24 },
  { skaicius: 48 },
  { skaicius: 72 }
];
/* Question_60: Create a new array where each number in "const question60" is multiplied by 14, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question61 = [
  6,
  [12, 18],
  24
];
/* Question_61: Create a new array where each number in the array "const question61" is multiplied by 7, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question62 = [10, 20, 30, 40];
/* Question_62: With the forEach loop, print the numbers in "const question62" one by one in the console, multiplied by 8 (in a column), 
print to the console */

const question63 = [0, 11, 22, 33, 44];
/* Question_63: With a forEach loop, print the numbers in "const question63" in the console one number at a time (column) but not == 0 
using ternary, print to the console */

const question64 = 'Plums';
/* Question_64: You need to make another string from the string in "const question64", in which the letters 'u' are replaced by '^'. 
After making such a string, print it to the console */

const question65 = [6, 12, 18, 24];
/* Question_65: Create a new array where each number in "const question65" is multiplied by 11, print to the console */

const question66 = [
  { skaicius: 26 },
  { skaicius: 52 },
  { skaicius: 78 }
];
/* Question_66: Create a new array where each number in "const question66" is multiplied by 15, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question67 = [
  { id: 111, title: 'Pumpkin', price: 2.3, count: 4 },
  { id: 112, title: 'Zucchini', price: 1.9, count: 3 }
];
/* Question_67: Increase the quantities of all products by 6 that are in "const question67", print to the console */

const question68 = [
  { id: 121, title: 'Celery', price: 1.4, count: 2 },
  { id: 122, title: 'Radish', price: 0.8, count: 5 }
];
/* Question_68: Increase the quantity of product 122 by 10 that are in "const question68", print to the console */

const question69 = [
  { skaicius: 28 },
  { skaicius: 56 },
  { skaicius: 84 }
];
/* Question_69: Create a new array where each number in "const question69" is multiplied by 16, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question70 = [
  7,
  [14, 21],
  28
];
/* Question_70: Create a new array where each number in the array "const question70" is multiplied by 8, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question71 = [12, 24, 36, 48];
/* Question_71: With the forEach loop, print the numbers in "const question71" one by one in the console, multiplied by 9 (in a column), 
print to the console */

const question72 = [0, 13, 26, 39, 52];
/* Question_72: With a forEach loop, print the numbers in "const question72" in the console one number at a time (column) but not == 0 
using ternary, print to the console */

const question73 = 'Apricots';
/* Question_73: You need to make another string from the string in "const question73", in which the letters 't' are replaced by '&'. 
After making such a string, print it to the console */

const question74 = [8, 16, 24, 32];
/* Question_74: Create a new array where each number in "const question74" is multiplied by 12, print to the console */

const question75 = [
  { skaicius: 30 },
  { skaicius: 60 },
  { skaicius: 90 }
];
/* Question_75: Create a new array where each number in "const question75" is multiplied by 17, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question76 = [
  { id: 131, title: 'Corn', price: 1.7, count: 5 },
  { id: 132, title: 'Peas', price: 1.3, count: 4 }
];
/* Question_76: Increase the quantities of all products by 7 that are in "const question76", print to the console */

const question77 = [
  { id: 141, title: 'Mushroom', price: 2.1, count: 2 },
  { id: 142, title: 'Broccoli', price: 2.6, count: 3 }
];
/* Question_77: Increase the quantity of product 141 by 11 that are in "const question77", print to the console */

const question78 = [
  { skaicius: 32 },
  { skaicius: 64 },
  { skaicius: 96 }
];
/* Question_78: Create a new array where each number in "const question78" is multiplied by 18, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question79 = [
  9,
  [18, 27],
  36
];
/* Question_79: Create a new array where each number in the array "const question79" is multiplied by 9, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question80 = [14, 28, 42, 56];
/* Question_80: With the forEach loop, print the numbers in "const question80" one by one in the console, multiplied by 10 (in a column), 
print to the console */

const question81 = [0, 15, 30, 45, 60];
/* Question_81: With a forEach loop, print the numbers in "const question81" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question82 = 'Mangoes';
/* Question_82: You need to make another string from the string in "const question82", in which the letters 'g' are replaced by '?'. 
After making such a string, print it to the console */

const question83 = [9, 18, 27, 36];
/* Question_83: Create a new array where each number in "const question83" is multiplied by 13, print to the console */

const question84 = [
  { skaicius: 34 },
  { skaicius: 68 },
  { skaicius: 102 }
];
/* Question_84: Create a new array where each number in "const question84" is multiplied by 19, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question85 = [
  { id: 151, title: 'Eggplant', price: 2.8, count: 6 },
  { id: 152, title: 'Squash', price: 1.5, count: 5 }
];
/* Question_85: Increase the quantities of all products by 8 that are in "const question85", print to the console */

const question86 = [
  { id: 161, title: 'Turnip', price: 1.2, count: 3 },
  { id: 162, title: 'Parsnip', price: 1.6, count: 2 }
];
/* Question_86: Increase the quantity of product 162 by 12 that are in "const question86", print to the console */

const question87 = [
  { skaicius: 36 },
  { skaicius: 72 },
  { skaicius: 108 }
];
/* Question_87: Create a new array where each number in "const question87" is multiplied by 20, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question88 = [
  10,
  [20, 30],
  40
];
/* Question_88: Create a new array where each number in the array "const question88" is multiplied by 10, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question89 = [16, 32, 48, 64];
/* Question_89: With the forEach loop, print the numbers in "const question89" one by one in the console, multiplied by 11 (in a column), 
print to the console */

const question90 = [0, 17, 34, 51, 68];
/* Question_90: With a forEach loop, print the numbers in "const question90" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question91 = 'Papayas';
/* Question_91: You need to make another string from the string in "const question91", in which the letters 'a' are replaced by '*'. 
After making such a string, print it to the console */

const question92 = [10, 20, 30, 40];
/* Question_92: Create a new array where each number in "const question92" is multiplied by 14, print to the console */

const question93 = [
  { skaicius: 38 },
  { skaicius: 76 },
  { skaicius: 114 }
];
/* Question_93: Create a new array where each number in "const question93" is multiplied by 21, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question94 = [
  { id: 171, title: 'Leek', price: 1.3, count: 4 },
  { id: 172, title: 'Shallot', price: 1.7, count: 3 }
];
/* Question_94: Increase the quantities of all products by 9 that are in "const question94", print to the console */

const question95 = [
  { id: 181, title: 'Artichoke', price: 2.9, count: 2 },
  { id: 182, title: 'Asparagus', price: 3.1, count: 1 }
];
/* Question_95: Increase the quantity of product 182 by 13 that are in "const question95", print to the console */

const question96 = [
  { skaicius: 40 },
  { skaicius: 80 },
  { skaicius: 120 }
];
/* Question_96: Create a new array where each number in "const question96" is multiplied by 22, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question97 = [
  11,
  [22, 33],
  44
];
/* Question_97: Create a new array where each number in the array "const question97" is multiplied by 11, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question98 = [18, 36, 54, 72];
/* Question_98: With the forEach loop, print the numbers in "const question98" one by one in the console, multiplied by 12 (in a column), 
print to the console */

const question99 = [0, 19, 38, 57, 76];
/* Question_99: With a forEach loop, print the numbers in "const question99" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question100 = 'Blueberries';
/* Question_100: You need to make another string from the string in "const question100", in which the letters 'b' are replaced by '+'. 
After making such a string, print it to the console */

const question101 = [12, 24, 36, 48];
/* Question_101: Create a new array where each number in "const question101" is multiplied by 15, print to the console */

const question102 = [
  { skaicius: 42 },
  { skaicius: 84 },
  { skaicius: 126 }
];
/* Question_102: Create a new array where each number in "const question102" is multiplied by 23, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question103 = [
  { id: 191, title: 'Cabbage', price: 1.8, count: 5 },
  { id: 192, title: 'Kale', price: 2.2, count: 4 }
];
/* Question_103: Increase the quantities of all products by 10 that are in "const question103", print to the console */

const question104 = [
  { id: 201, title: 'Cauliflower', price: 2.5, count: 3 },
  { id: 202, title: 'Brussels Sprouts', price: 2.9, count: 2 }
];
/* Question_104: Increase the quantity of product 201 by 14 that are in "const question104", print to the console */

const question105 = [
  { skaicius: 44 },
  { skaicius: 88 },
  { skaicius: 132 }
];
/* Question_105: Create a new array where each number in "const question105" is multiplied by 24, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question106 = [
  12,
  [24, 36],
  48
];
/* Question_106: Create a new array where each number in the array "const question106" is multiplied by 12, 
numbers must remain in the given object, the object property name must remain the same, print to the console */

const question107 = [20, 40, 60, 80];
/* Question_107: With the forEach loop, print the numbers in "const question107" one by one in the console, multiplied by 13 (in a column), 
print to the console */

const question108 = [0, 21, 42, 63, 84];
/* Question_108: With a forEach loop, print the numbers in "const question108" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question109 = 'Strawberries';
/* Question_109: You need to make another string from the string in "const question109", in which the letters 's' are replaced by '='. 
After making such a string, print it to the console */

const question110 = [14, 28, 42, 56];
/* Question_110: Create a new array where each number in "const question110" is multiplied by 16, print to the console */

const question_111 = [11, 8, 74, 0, 4];
/* Question_111: With a forEach loop, print the numbers in "const question_111" in the console one number at a time (column) but not == 0, 
use ternary, print to the console */

const question_112 = [
  { skaicius: 10 },
  { skaicius: 7 },
  { skaicius: 56 },
  { skaicius: 14 },
  { skaicius: 11 }
];
/* Question_112: Create a new array where each number in "const question_112" is multiplied by 3, numbers must remain in the given object, 
use Arrow function expressions (=>), the object property name must remain the same, print to the console */

const question_113 = [2, 4, 6, 8];
/* Question_113: Create a new array where each number in "const question_113" is multiplied by 9 using Array.prototype.map() and 
Arrow function, print to the console */

const question_114 = [
  { id: 1, title: 'Juice', price: 2.5, count: 2 },
  { id: 2, title: 'Water', price: 1.0, count: 3 }
];
/* Question_114: Increase the quantities of all products by 2 in "const question_114" using map and Arrow function, print to the console */

const question_115 = [
  { id: 5, title: 'Apple', price: 0.5, count: 1 },
  { id: 6, title: 'Banana', price: 0.7, count: 2 }
];
/* Question_115: Increase the quantity of product 5 by 4 in "const question_115" using map and Arrow function, print to the console */

const question_116 = [
  { skaicius: 3 },
  { skaicius: 6 },
  { skaicius: 9 }
];
/* Question_116: Create a new array where each number in "const question_116" is multiplied by 5 using map and Arrow function,
print to the console */

const question_117 = [
  1,
  [2, 3],
  4
];
/* Question_117: Create a new array where each number in "const question_117" is multiplied by 5, nested numbers must also be multiplied, 
print to the console */

const question_118 = [3, 6, 9, 12];
/* Question_118: With the forEach loop, print the numbers in "const question_118" one by one in the console, multiplied by 4 (in a column), 
print to the console */

const question_119 = [0, 5, 10, 15];
/* Question_119: With a forEach loop, print the numbers in "const question_119" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_120 = 'Bananas';
/* Question_120: Create a new string from "const question_120" where all 'n' letters are replaced by '-', print to the console */

const question_121 = [1, 2, 3, 4];
/* Question_121: Create a new array where each number in "const question_121" is multiplied by 7 using map and Arrow function, 
print to the console */

const question_122 = [
  { skaicius: 8 },
  { skaicius: 12 },
  { skaicius: 20 }
];
/* Question_122: Create a new array where each number in "const question_122" is multiplied by 6 using map and Arrow function, 
print to the console */

const question_123 = [
  { id: 11, title: 'Juice', price: 2.5, count: 1 },
  { id: 12, title: 'Water', price: 1.0, count: 4 }
];
/* Question_123: Increase the quantities of all products by 3 in "const question_123" using map and Arrow function, print to the console */

const question_124 = [
  { id: 21, title: 'Eggs', price: 1.2, count: 6 },
  { id: 22, title: 'Cheese', price: 3.5, count: 2 }
];
/* Question_124: Increase the quantity of product 22 by 6 in "const question_124" using map and Arrow function, print to the console */

const question_125 = [
  { skaicius: 5 },
  { skaicius: 15 },
  { skaicius: 25 }
];
/* Question_125: Create a new array where each number in "const question_125" is multiplied by 8 using map and Arrow function, 
print to the console */

const question_126 = [
  2,
  [4, 6],
  8
];
/* Question_126: Create a new array where each number in "const question_126" is multiplied by 4, nested numbers must also be multiplied, 
print to the console */

const question_127 = [7, 14, 21, 28];
/* Question_127: With the forEach loop, print the numbers in "const question_127" one by one in the console, multiplied by 5 (in a column), 
print to the console */

const question_128 = [0, 2, 4, 6, 8];
/* Question_128: With a forEach loop, print the numbers in "const question_128" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_129 = 'Oranges';
/* Question_129: Create a new string from "const question_129" where all 'a' letters are replaced by '@', print to the console */

const question_130 = [2, 4, 6, 8];
/* Question_130: Create a new array where each number in "const question_130" is multiplied by 10 using map and Arrow function, 
print to the console */

const question_131 = [
  { skaicius: 9 },
  { skaicius: 18 },
  { skaicius: 27 }
];
/* Question_131: Create a new array where each number in "const question_131" is multiplied by 7 using map and Arrow function, 
print to the console */

const question_132 = [
  { id: 31, title: 'Butter', price: 2.0, count: 2 },
  { id: 32, title: 'Jam', price: 2.5, count: 1 }
];
/* Question_132: Increase the quantities of all products by 4 in "const question_132" using map and Arrow function, print to the console */

const question_133 = [
  { id: 41, title: 'Rice', price: 1.8, count: 5 },
  { id: 42, title: 'Beans', price: 2.2, count: 3 }
];
/* Question_133: Increase the quantity of product 41 by 5 in "const question_133" using map and Arrow function, print to the console */

const question_134 = [
  { skaicius: 12 },
  { skaicius: 24 },
  { skaicius: 36 }
];
/* Question_134: Create a new array where each number in "const question_134" is multiplied by 11 using map and Arrow function, 
print to the console */

const question_135 = [
  3,
  [6, 9],
  12
];
/* Question_135: Create a new array where each number in "const question_135" is multiplied by 3, nested numbers must also be multiplied, 
print to the console */

const question_136 = [5, 10, 15, 20];
/* Question_136: With the forEach loop, print the numbers in "const question_136" one by one in the console, multiplied by 6 (in a column), 
print to the console */

const question_137 = [0, 3, 6, 9, 12];
/* Question_137: With a forEach loop, print the numbers in "const question_137" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_138 = 'Grapes';
/* Question_138: Create a new string from "const question_138" where all 'a' letters are replaced by '!', print to the console */

const question_139 = [3, 6, 9, 12];
/* Question_139: Create a new array where each number in "const question_139" is multiplied by 8 using map and Arrow function, 
print to the console */

const question_140 = [
  { skaicius: 14 },
  { skaicius: 28 },
  { skaicius: 42 }
];
/* Question_140: Create a new array where each number in "const question_140" is multiplied by 9 using map and Arrow function, 
print to the console */

const question_141 = [
  { id: 51, title: 'Sugar', price: 1.1, count: 2 },
  { id: 52, title: 'Salt', price: 0.9, count: 3 }
];
/* Question_141: Increase the quantities of all products by 5 in "const question_141" using map and Arrow function, print to the console */

const question_142 = [
  { id: 61, title: 'Pepper', price: 1.3, count: 1 },
  { id: 62, title: 'Cinnamon', price: 2.7, count: 2 }
];
/* Question_142: Increase the quantity of product 62 by 7 in "const question_142" using map and Arrow function, print to the console */

const question_143 = [
  { skaicius: 16 },
  { skaicius: 32 },
  { skaicius: 48 }
];
/* Question_143: Create a new array where each number in "const question_143" is multiplied by 12 using map and Arrow function, 
print to the console */

const question_144 = [
  4,
  [8, 12],
  16
];
/* Question_144: Create a new array where each number in "const question_144" is multiplied by 6, nested numbers must also be multiplied, 
print to the console */

const question_145 = [6, 12, 18, 24];
/* Question_145: With the forEach loop, print the numbers in "const question_145" one by one in the console, multiplied by 7 (in a column), 
print to the console */

const question_146 = [0, 7, 14, 21, 28];
/* Question_146: With a forEach loop, print the numbers in "const question_146" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_147 = 'Peaches';
/* Question_147: Create a new string from "const question_147" where all 'e' letters are replaced by '$', print to the console */

const question_148 = [4, 8, 12, 16];
/* Question_148: Create a new array where each number in "const question_148" is multiplied by 13 using map and Arrow function, 
print to the console */

const question_149 = [
  { skaicius: 18 },
  { skaicius: 36 },
  { skaicius: 54 }
];
/* Question_149: Create a new array where each number in "const question_149" is multiplied by 14 using map and Arrow function, 
print to the console */

const question_150 = [
  { id: 71, title: 'Tomato', price: 1.4, count: 3 },
  { id: 72, title: 'Cucumber', price: 1.6, count: 2 }
];
/* Question_150: Increase the quantities of all products by 6 in "const question_150" using map and Arrow function, print to the console */

const question_151 = [
  { id: 81, title: 'Carrot', price: 0.8, count: 5 },
  { id: 82, title: 'Potato', price: 0.6, count: 7 }
];
/* Question_151: Increase the quantity of product 81 by 10 in "const question_151" using map and Arrow function, print to the console */

const question_152 = [
  { skaicius: 20 },
  { skaicius: 40 },
  { skaicius: 60 }
];
/* Question_152: Create a new array where each number in "const question_152" is multiplied by 15 using map and Arrow function, 
print to the console */

const question_153 = [
  5,
  [10, 15],
  20
];
/* Question_153: Create a new array where each number in "const question_153" is multiplied by 7, nested numbers must also be multiplied, 
print to the console */

const question_154 = [8, 16, 24, 32];
/* Question_154: With the forEach loop, print the numbers in "const question_154" one by one in the console, multiplied by 8 (in a column), 
print to the console */

const question_155 = [0, 9, 18, 27, 36];
/* Question_155: With a forEach loop, print the numbers in "const question_155" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_156 = 'Cherries';
/* Question_156: Create a new string from "const question_156" where all 'i' letters are replaced by '%', print to the console */

const question_157 = [5, 10, 15, 20];
/* Question_157: Create a new array where each number in "const question_157" is multiplied by 12 using map and Arrow function, 
print to the console */

const question_158 = [
  { skaicius: 22 },
  { skaicius: 44 },
  { skaicius: 66 }
];
/* Question_158: Create a new array where each number in "const question_158" is multiplied by 16 using map and Arrow function, 
print to the console */

const question_159 = [
  { id: 91, title: 'Onion', price: 0.7, count: 2 },
  { id: 92, title: 'Garlic', price: 1.2, count: 1 }
];
/* Question_159: Increase the quantities of all products by 7 in "const question_159" using map and Arrow function, print to the console */

const question_160 = [
  { id: 101, title: 'Lettuce', price: 1.1, count: 3 },
  { id: 102, title: 'Spinach', price: 1.5, count: 2 }
];
/* Question_160: Increase the quantity of product 102 by 11 in "const question_160" using map and Arrow function, print to the console */

const question_161 = [
  { skaicius: 24 },
  { skaicius: 48 },
  { skaicius: 72 }
];
/* Question_161: Create a new array where each number in "const question_161" is multiplied by 17 using map and Arrow function, 
print to the console */

const question_162 = [
  6,
  [12, 18],
  24
];
/* Question_162: Create a new array where each number in "const question_162" is multiplied by 8, nested numbers must also be multiplied, 
print to the console */

const question_163 = [10, 20, 30, 40];
/* Question_163: With the forEach loop, print the numbers in "const question_163" one by one in the console, multiplied by 9 (in a column), 
print to the console */

const question_164 = [0, 11, 22, 33, 44];
/* Question_164: With a forEach loop, print the numbers in "const question_164" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_165 = 'Plums';
/* Question_165: Create a new string from "const question_165" where all 'm' letters are replaced by '^', print to the console */

const question_166 = [6, 12, 18, 24];
/* Question_166: Create a new array where each number in "const question_166" is multiplied by 13 using map and Arrow function, 
print to the console */

const question_167 = [
  { skaicius: 26 },
  { skaicius: 52 },
  { skaicius: 78 }
];
/* Question_167: Create a new array where each number in "const question_167" is multiplied by 18 using map and Arrow function, 
print to the console */

const question_168 = [
  { id: 111, title: 'Pumpkin', price: 2.3, count: 4 },
  { id: 112, title: 'Zucchini', price: 1.9, count: 3 }
];
/* Question_168: Increase the quantities of all products by 8 in "const question_168" using map and Arrow function, print to the console */

const question_169 = [
  { id: 121, title: 'Celery', price: 1.4, count: 2 },
  { id: 122, title: 'Radish', price: 0.8, count: 5 }
];
/* Question_169: Increase the quantity of product 121 by 12 in "const question_169" using map and Arrow function, print to the console */

const question_170 = [
  { skaicius: 28 },
  { skaicius: 56 },
  { skaicius: 84 }
];
/* Question_170: Create a new array where each number in "const question_170" is multiplied by 19 using map and Arrow function, 
print to the console */

const question_171 = [
  7,
  [14, 21],
  28
];
/* Question_171: Create a new array where each number in "const question_171" is multiplied by 9, nested numbers must also be multiplied, 
print to the console */

const question_172 = [12, 24, 36, 48];
/* Question_172: With the forEach loop, print the numbers in "const question_172" one by one in the console, multiplied by 10 (in a column), 
print to the console */

const question_173 = [0, 13, 26, 39, 52];
/* Question_173: With a forEach loop, print the numbers in "const question_173" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_174 = 'Apricots';
/* Question_174: Create a new string from "const question_174" where all 'o' letters are replaced by '&', print to the console */

const question_175 = [8, 16, 24, 32];
/* Question_175: Create a new array where each number in "const question_175" is multiplied by 14 using map and Arrow function, 
print to the console */

const question_176 = [
  { skaicius: 30 },
  { skaicius: 60 },
  { skaicius: 90 }
];
/* Question_176: Create a new array where each number in "const question_176" is multiplied by 20 using map and Arrow function, 
print to the console */

const question_177 = [
  { id: 131, title: 'Corn', price: 1.7, count: 5 },
  { id: 132, title: 'Peas', price: 1.3, count: 4 }
];
/* Question_177: Increase the quantities of all products by 9 in "const question_177" using map and Arrow function, print to the console */

const question_178 = [
  { id: 141, title: 'Mushroom', price: 2.1, count: 2 },
  { id: 142, title: 'Broccoli', price: 2.6, count: 3 }
];
/* Question_178: Increase the quantity of product 142 by 13 in "const question_178" using map and Arrow function, print to the console */

const question_179 = [
  { skaicius: 32 },
  { skaicius: 64 },
  { skaicius: 96 }
];
/* Question_179: Create a new array where each number in "const question_179" is multiplied by 21 using map and Arrow function, 
print to the console */

const question_180 = [
  9,
  [18, 27],
  36
];
/* Question_180: Create a new array where each number in "const question_180" is multiplied by 10, nested numbers must also be multiplied, 
print to the console */

const question_181 = [14, 28, 42, 56];
/* Question_181: With the forEach loop, print the numbers in "const question_181" one by one in the console, multiplied by 11 (in a column), 
print to the console */

const question_182 = [0, 15, 30, 45, 60];
/* Question_182: With a forEach loop, print the numbers in "const question_182" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_183 = 'Mangoes';
/* Question_183: Create a new string from "const question_183" where all 'n' letters are replaced by '?', print to the console */

const question_184 = [9, 18, 27, 36];
/* Question_184: Create a new array where each number in "const question_184" is multiplied by 15 using map and Arrow function, 
print to the console */

const question_185 = [
  { skaicius: 34 },
  { skaicius: 68 },
  { skaicius: 102 }
];
/* Question_185: Create a new array where each number in "const question_185" is multiplied by 22 using map and Arrow function,
print to the console */

const question_186 = [
  { id: 151, title: 'Eggplant', price: 2.8, count: 6 },
  { id: 152, title: 'Squash', price: 1.5, count: 5 }
];
/* Question_186: Increase the quantities of all products by 10 in "const question_186" using map and Arrow function, print to the console */

const question_187 = [
  { id: 161, title: 'Turnip', price: 1.2, count: 3 },
  { id: 162, title: 'Parsnip', price: 1.6, count: 2 }
];
/* Question_187: Increase the quantity of product 161 by 14 in "const question_187" using map and Arrow function, print to the console */

const question_188 = [
  { skaicius: 36 },
  { skaicius: 72 },
  { skaicius: 108 }
];
/* Question_188: Create a new array where each number in "const question_188" is multiplied by 23 using map and Arrow function, 
print to the console */

const question_189 = [
  10,
  [20, 30],
  40
];
/* Question_189: Create a new array where each number in "const question_189" is multiplied by 11, nested numbers must also be multiplied, 
print to the console */

const question_190 = [16, 32, 48, 64];
/* Question_190: With the forEach loop, print the numbers in "const question_190" one by one in the console, multiplied by 12 (in a column),
 print to the console */

const question_191 = [0, 17, 34, 51, 68];
/* Question_191: With a forEach loop, print the numbers in "const question_191" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_192 = 'Papayas';
/* Question_192: Create a new string from "const question_192" where all 'y' letters are replaced by '*', print to the console */

const question_193 = [10, 20, 30, 40];
/* Question_193: Create a new array where each number in "const question_193" is multiplied by 16 using map and Arrow function, 
print to the console */

const question_194 = [
  { skaicius: 38 },
  { skaicius: 76 },
  { skaicius: 114 }
];
/* Question_194: Create a new array where each number in "const question_194" is multiplied by 24 using map and Arrow function, 
print to the console */

const question_195 = [
  { id: 171, title: 'Leek', price: 1.3, count: 4 },
  { id: 172, title: 'Shallot', price: 1.7, count: 3 }
];
/* Question_195: Increase the quantities of all products by 11 in "const question_195" using map and Arrow function, print to the console */

const question_196 = [
  { id: 181, title: 'Artichoke', price: 2.9, count: 2 },
  { id: 182, title: 'Asparagus', price: 3.1, count: 1 }
];
/* Question_196: Increase the quantity of product 182 by 15 in "const question_196" using map and Arrow function, print to the console */

const question_197 = [
  { skaicius: 40 },
  { skaicius: 80 },
  { skaicius: 120 }
];
/* Question_197: Create a new array where each number in "const question_197" is multiplied by 25 using map and Arrow function, 
print to the console */

const question_198 = [
  11,
  [22, 33],
  44
];
/* Question_198: Create a new array where each number in "const question_198" is multiplied by 12, nested numbers must also be multiplied, 
print to the console */

const question_199 = [18, 36, 54, 72];
/* Question_199: With the forEach loop, print the numbers in "const question_199" one by one in the console, multiplied by 13 (in a column), 
print to the console */

const question_200 = [0, 19, 38, 57, 76];
/* Question_200: With a forEach loop, print the numbers in "const question_200" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_201 = 'Blueberries';
/* Question_201: Create a new string from "const question_201" where all 'u' letters are replaced by '+', print to the console */

const question_202 = [12, 24, 36, 48];
/* Question_202: Create a new array where each number in "const question_202" is multiplied by 17 using map and Arrow function, 
print to the console */

const question_203 = [
  { skaicius: 42 },
  { skaicius: 84 },
  { skaicius: 126 }
];
/* Question_203: Create a new array where each number in "const question_203" is multiplied by 26 using map and Arrow function, 
print to the console */

const question_204 = [
  { id: 191, title: 'Cabbage', price: 1.8, count: 5 },
  { id: 192, title: 'Kale', price: 2.2, count: 4 }
];
/* Question_204: Increase the quantities of all products by 12 in "const question_204" using map and Arrow function, print to the console */

const question_205 = [
  { id: 201, title: 'Cauliflower', price: 2.5, count: 3 },
  { id: 202, title: 'Brussels Sprouts', price: 2.9, count: 2 }
];
/* Question_205: Increase the quantity of product 202 by 16 in "const question_205" using map and Arrow function, print to the console */

const question_206 = [
  { skaicius: 44 },
  { skaicius: 88 },
  { skaicius: 132 }
];
/* Question_206: Create a new array where each number in "const question_206" is multiplied by 27 using map and Arrow function, 
print to the console */

const question_207 = [
  12,
  [24, 36],
  48
];
/* Question_207: Create a new array where each number in "const question_207" is multiplied by 13, nested numbers must also be multiplied, 
print to the console */

const question_208 = [20, 40, 60, 80];
/* Question_208: With the forEach loop, print the numbers in "const question_208" one by one in the console, multiplied by 14 (in a column), 
print to the console */

const question_209 = [0, 21, 42, 63, 84];
/* Question_209: With a forEach loop, print the numbers in "const question_209" in the console one number at a time (column) 
but not == 0 using ternary, print to the console */

const question_210 = 'Strawberries';
/* Question_210: Create a new string from "const question_210" where all 'r' letters are replaced by '=', print to the console */
















































































































