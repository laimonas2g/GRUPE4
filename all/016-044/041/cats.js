console.log('CATS!');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

// 1.

bitGirls.unshift('Nausėdą')
console.log(bitGirls);

// 2.

const bitCats = cats.map(cat => {
    return [
        cat,
        rand(0, 1) ? 'storas' : 'normalus'
    ];
});

console.log(bitCats);

// 3.

const catsStats = bitCats.reduce(
    (accumulator, currentValue) => {
        if (currentValue[1] == 'storas') {
            accumulator.storu++;
        } else {
            accumulator.normaliu++;
        }
        return accumulator;
    },
    { storu: 0, normaliu: 0 }
)
console.log('S:', catsStats.storu, 'N:', catsStats.normaliu);


let storiKatinai = 0;
let normKatinai = 0;

bitCats.forEach(cat => {
   if (cat[1] == 'storas') {
    storiKatinai++;
   } else {
    normKatinai++;
   }
})
console.log('S:', storiKatinai, 'N:', normKatinai);

// 4.

bitCats.sort((a, b) => a[0][1].localeCompare(b[0][1]));

console.log(bitCats);

// 5. 

const happyCats = bitGirls.map((girls, index) => {
    const cat = cats[index] || 'Barsukas';
    return [girls, cat];
})
console.log(happyCats);

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




