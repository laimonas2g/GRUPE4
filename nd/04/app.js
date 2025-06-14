/*Naudojant HTML ir CSS padaryti realiai atrodančią (naudojant minimalų spalvų kiekį) sąskaitą faktūrą, 
kurią būtų galim atspausdinti. Sąskaitoje turi matytis užrašas PVM SĄSKAITA FAKTŪRA, sąskaitos numeris, 
pardavėjo ir pirkėjo duomenys, sąskaitos data ir mokėjimo termino data. Išvardintos prekės, jų pavadinimai, 
jeigu yra nurodytos nuolaidos (fiksuotos nuolaidos dydis su minuso ženklu, procentinės- procentai 
ir kainos dalis pagal procentus su minuso ženklu), transportavimo išlaidos. Paskaičiuota tarpinė kaina, 
įvertinant kiekius, nuolaidas ir transportavimo išlaidas, paskaičiuotas pvm 21% ir galutinė kaina su PVM*/

/*Using HTML and CSS, create a realistic-looking (using a minimum number of colors) invoice, 
which can be printed. The invoice must contain the words VAT INVOICE, invoice number, 
seller and buyer details, invoice date and payment due date. Listed goods, their names, 
if discounts are indicated (fixed discount amount with a minus sign, percentages - percentages 
and price share based on percentages with a minus sign), transportation costs. Calculated intermediate price, 
evaluating quantities, discounts and transportation costs, calculated VAT 21% and final price with VAT*/
  
  const imone = {
  number: "AB-52638700",
  date: "2025-06-08",
  due_date: "2025-06-20",
  company: {
    buyer: {
      name: "VŠĮ \"Urbonas ir Urbonas\"",
      address: "Didžioji gatvė 37, Mažeikiai",
      code: "71626008",
      vat: "LT267024369",
      phone: "(8 46) 41 33 63",
      email: "zukauskiene.vyte@gmail.com"
    },
    seller: {
      name: "MB Kazlauskas",
      address: "Vilniaus prospektas 10-55, Visaginas",
      code: "76521541",
      vat: "LT785631994",
      phone: "(8 46) 96 18 57",
      email: "naglis56@hotmail.com"
    }
  },
  items : [
    {
      "description": "TV staliukas \"Telebimbam\" mėlynas",
      "quantity": 5,
      "price": 180.99,
      "discount": []
    },
    {
      "description": "Kavos staliukas \"Arbūzas\" su raudonu paviršium, apvalus, su padėklu ir uždengimu",
      "quantity": 3,
      "price": 390.5,
      "discount": []
    },
    {
      "description": "Fotelis \"Pūkas\" su uždengimu ir pagalve",
      "quantity": 5,
      "price": 150,
      "discount": []
    },
    {
      "description": "Rašomasis stalas \"Studentas\" su stiklo plokšte ir ąžuoliniu stalviršium",
      "quantity": 9,
      "price": 270.97,
      "discount": []
    },
    {
      "description": "Geltonas vaikiškas odinis fotelis \"Saulutė\"",
      "quantity": 6,
      "price": 150.95,
      "discount": []
    },
    {
      "description": "Rašomasis stalas \"Violeta\" su ąžuoliniu stalviršium",
      "quantity": 10,
      "price": 210,
      "discount": []
    },
    {
      "description": "Sofa dviguba \"Trys muškietininkai\"",
      "quantity": 6,
      "price": 450,
      "discount": {
        "type": "fixed",
        "value": 204
      }
    }
  ],
  "shippingPrice": 90
};

console.log(typeof imone)
console.log(typeof imone.items)
console.log(imone.items[0])

console.log('Pradedam darbą!')

const prekes = imone.items;

for (let i = 0; i < prekes.length; i++) {
  console.log(prekes[i]);
};

const pirkejas = imone.company.buyer;


for (let i = 0; i < pirkejas.length; i++) {
  console.log(pirkejas[i]);
};




























