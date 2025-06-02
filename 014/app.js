console.log("NSO");
// . - savybe; ' ' - tarpas del grozio
// const nso = {}; tuscias ne = o { : }; dedam , - kablelis yra privalomas

const nso = {
  aliensCount: 4,
  starSystem: 'Gama Epsilon 4587-888'
};

nso.speed = 50;
nso.speedType = 'km/s';


console.log(nso.speed + ' ' + nso.speedType);

console.log(nso);


// Sukurti objekta me, kuris turi turet savybes vardui, pavardei, metams ir svoriui.
// Tada naudokite objekta ir konsoleje atspausdinskite;
// "Vardenis Pavardenis gime pries 50 metu ir uzaugo iki 50 svorio"

// I objekta me prideti savybe kurioje butu paskaiciuotas svoris po 10 metu

let me = {
  rajonas: 'Kaunas',
  salis: 'Lietuva'
}

me.vardas = 'Vardas';
me.pavarde = 'Pavardenis';
me.amzius = 50;
me.amziusMatavVNT = 'm';
me.svoris = 50;
me.svorisatavVNT = 'kg';
me.svoriPo10metu = 'me.amzius' + 10; 

console.log(me.vardas + ' ' + me.pavarde  + ' '+ me.amzius + me.amziusMatavVNT  + ' '+ me.svoris  +me.svorisatavVNT);

console.log(me);

// I objekta me prideti savybe kurioje butu paskaiciuotas svoris po 10 metu

console.log(me.amzius / me.svoris * 10);
console.log('me.svoriPo10metu');

const jis = {
  v: 'Arvydas',
  p: 'Kijakauskas',
  m: 51,
  s: 71
}

console.log('${jis.v} ${jis.p} gime pries ${jis.m} metu ir uzaugo iki ${jis.s} svorio');

jis.s10 = jis.s / jis.m * 10 + jis.s;

console.log(jis);
// const svorisPo10Metu = 71 / 51 *10 + me.s;

// Geriau viska BackTicke!!!!!!!!
















































