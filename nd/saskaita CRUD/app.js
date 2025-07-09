
/*
K3 Sąskaitų CRUD

Užduotis.

C Sukurti puslapį kuriame galima suformuoti PVM Sąskaitą Faktūrą iš duomenų gautų iš API https://in3.dev/inv/ 
Puslapyje suformuotą PVM Sąskaitą Faktūrą išsaugoti LocalStorage faile. 
Turi būti galimybė saugoti neribotą kiekį sąskaitų.

R Sukurti puslapį kuriame būtų rodomas visos PVM Sąskaitos Faktūros sąrašo pavidalu,
 atvaizduojant sąskaitos numerį, datą ir galutinę sumą.
Prie kiekvienos sąskaitos sąraše taip pat turi būti mygtukai 
“Redaguoti”, “Žiūrėti” ir “Trinti”. 
Mygtukas “Žiūrėti” yra skirtas sąskaitos peržiūrai be redagavimo.

U Mygtukas “Redaguoti” turi atidaryti puslapį, kuriame galima redaguoti sąskaitos prekių kiekius ir nuolaidas 
Visos kitos sąskaitos dalys nebūtinai turi būti redaguojamos. 
Po redagavimo turi pasikeisti ir faile išsisaugoti atitinkamos vertės, PVM ir galutinė suma.

D Mygtukas “Trinti” yra skirtas sąskaitai pašalinti.


Paaiškinimai.

Sąskaitos formavimo taisyklės aprašytos užduotyje K2. Redagavimo funkcionalumą galima išplėsti, 
pridedant galimybę redaguoti ir kitus laukelius ir/ar atskiros prekės pašalinimą. 
Padarykite būtinas įvedamų duomenų validacijas. (kad po įvedimo galutinė suma nebūtų NaN) 
Po sąskaitos redagavimo, turi būti rodoma ta pati, jau atnaujinta sąskaita 
(po update, redirect atgal į tos sąskaitos edit) Atidarius create puslapį, 
turi būti iškart rodoma naujai iš API gauta sąskaita, be redagavimo galimybės. 
Apačioje turi būti trys mygtukai: “Išsaugoti” (išsaugo sąskaitą į failą ir rodo sąrašą), 
“Atnaujinti” (rodo naują sąskaitą iš API, prieš tai buvusi neišsaugoma), 
“Atšaukti” (rodomas sąrašas). Po kiekvienos atliktos CRUD operacijos, parodykite atitinkamą pranešimą. 
Galite pridėti savo sugalvotų funkcianalumų, kurie papildo, bet nepakeičia užduotyje nurodytų.

-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------

Task.

Create a page where you can create a VAT Invoice from data received from the API https://in3.dev/inv/
Save the VAT Invoice created on the page to a LocalStorage file.
It must be possible to store an unlimited number of invoices.

Create a page that displays all VAT Invoices in the form of a list,
displaying the invoice number, date and final amount.
Each invoice must also have the
“Edit”, “View” and “Delete” buttons in the list.
The “View” button is intended for viewing the invoice without editing.

The “Edit” button must open a page where you can edit the invoice's product quantities and discounts
All other parts of the invoice do not necessarily have to be edited.
After editing, the corresponding values, VAT and final amount must change and be saved in the file.

The “Delete” button is intended for deleting the invoice.

Explanations.

The rules for creating an invoice are described in task K2. The editing functionality can be expanded by
adding the ability to edit other fields and/or removing a single item.
Make the necessary validations of the entered data. (so that after entering the final amount is not NaN)
After editing the invoice, the same, already updated invoice must be displayed
(after update, redirect back to the edit of that invoice) When opening the create page,
the invoice newly received from the API must be immediately displayed, without the possibility of editing.
There must be three buttons at the bottom: “Save” (save the invoice to a file and show the list),
“Update” (show a new invoice from the API, the previous one is not saved),
“Cancel” (show the list). After each CRUD operation performed, show the appropriate message.
You can add your own functionality that supplements, but does not replace, those specified in the task.

*/



// console.clear();

// fetch('https://in3.dev/inv/')
//   .then(response => response.json()) // kai sulaukiam atsakyma paverciam objektu
//   .then(json => {
//     console.log(json);
//     printPrice(json); // sukurtas variable ateityje, 34 eilute
//   }) // atspausdinam konsoleje

// console.log('kodas po fetch');  // nelaukia response ir spausdina



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         printUsers(json);
//     });


// const printUsers = users => {
//     const ul = document.querySelector('ul');
//     users.forEach(user => {
//         // const li = document.createElement('li');
//         // li.textContent = `${user.name} (${user.email}) from ${user.address.city}`;
//         // ul.appendChild(li);
//         const template = document.querySelector('#user-template');
//         const clone = template.content.cloneNode(true); // padaro atskirą kopiją
//         clone.querySelector('.name').textContent = user.name;
//         clone.querySelector('.email').textContent = user.email;
//         clone.querySelector('.city').textContent = user.address.city;
//         ul.appendChild(clone);
//     });
// }


fetch('https://in3.dev/inv/')
  .then((response) => response.json())
  .then((data) => console.log(data));

