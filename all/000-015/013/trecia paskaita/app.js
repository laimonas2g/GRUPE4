console.log('Labas, Bebrai');

// const stringas1 = 'Bebras';
// const stringas2 = ' ';
// const stringas3 = ''; // tuscias stringas
//                           // hackinsi konvertavimas
// const log1 = !!stringas1; // ! = loginis kint, stringas1 pakeiciamasi log kintamaji true, ir gaunu false, norejau gauti true
// const log2 = !!stringas2;                          // !! - antras sauktuaks atvercia atgal
// const log3 = !!stringas3;

// console.log(log1, log2, log3); 

// const skaicius4 = 55;
// const skaicius5= -4.55;
// const skaicius6 = 0; // vienintelis is skaiciu - false

// const log4 = !!skaicius4; 
// const log5 = !!skaicius5;
// const log6 = !!skaicius6;

// console.log(log4, log5, log6);


/*
> daugiau
< maziau
>= daugiau arba lygu
<= maziau arba lygu
!= nelygu
== lygu (lyginam reiksmes, neatitinka tipai vistiek lygu 5 == '5')
!== neadekvatu (griezta lygybe, tipas neatitinka)
=== adekvatu 
*/

if (5 === '5') { //teoretiskai sitas tikrinimas yra greitesnis, pirma tipas, tada reiksme
    // šaka true
    console.log('O...taip!');
}
else {
    // šaka false
        console.log('O...ne!');
}

if (5 || 0) { //teoretiskai sitas tikrinimas yra greitesnis, pirma tipas, tada reiksme
    // šaka true
    console.log('O...taip!');
}
else {
    // šaka false
        console.log('O...ne!');
}

//  || grazina pirma true reiksme

//  && grazina pirma false reiksme, jei 0


// const A = 5 && 6; (6)
//const A = 5 || 6 || 8; ()
//const A = 1 || 9 || 8; ()
//const A = 1 || 9 || 8; ()
//const A = 1 & 9 & 8; (nueina iki galo ir palieka 8) (iki rezultato eina, jis juo nekonvertuoaj)
// pirmenybe skliausteliais atskiriame

// const A = 1 || 9 || 10; - pirmas, nes pirmas patikrintas True
const A = 1 && 8 && 9; // - 9, nes paskutinis patikrintas True

console.log(A);
























