// Tarpinis žinių patikrinimas #3




// 1. Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą (po pridėjimo bitGirls 
// turės 6 elementus).

// 2. Sukurkite naują masyvą bitCats Pagridu paimkite masyvą cats. Naujasis masyvas turėtų 
// turėti elementus iš mažų, dviejų narių, masyviukų: pirmas narys katinuko vardas, 
// antras - katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba “normalus”.

// 3. bitCats masyve suskaičiuokite kiek yra storų ir normalių katinukų.

// 4. Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, 
// abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) 
// Tokiu būdu katinukas vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

// 5. (BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats,
//  kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. 
// Nausėdai katinuko neduokit (nes neužteks) ir vietoj katinuko Nausėdai 
// priskirkite stringą “Barsukas”.

// “Nausėda” yra graži lietuviška pavardė, parinkta visiškai atsitiktinai ir su jokiais realiais asmenim neturi jokio sąryšio.



function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// 1.

bitGirls.unshift('Nausėdą');
console.log(bitGirls)

// 2.
const bitCats = [];
for (let i = 0; i < cats.length; i++) {
  const kName = cats[i];
  let weight;
  if (rand(0, 1) == 0) {
    weight = 'storas'
  } else {
    weight = 'normalus';
  }
  bitCats.push([kName, weight]);
}

console.log(bitCats);

// 3.
const kiek3 = bitCats.reduce(
  (acc, cat3) => {
    if (cat3[1] == 'storas') acc.storas++;
    else acc.normalus++;
    return acc;
  },

  { storas: 0, normalus: 0 }
);
console.log('S:', kiek3.storas, 'N:', kiek3.normalus);

// 4.

bitCats.sort((a, b) => {
  const a4 = a[0].length > 1 ? a[0][1] : 0;
  const b4 = b[0].length > 1 ? b[0][1] : 0;
  if (a4 < b4) return -1;
  if (a4 > b4) return 1;
  return 0;
});
console.log(bitCats);

// 5.
// const happyCats = bitGirls.map((g, i) => 

const newCats5 = [];
for (let i = 0; i < bitGirls.length; i++) {
  let sujungiam = [];
  if (i == 0) {
    sujungiam = [bitGirls[i], 'Barsukas'];
  } else {
    sujungiam = [bitGirls[i], bitCats[i - 1][0]];
  }
  newCats5.push(sujungiam);
} console.log(newCats5)





