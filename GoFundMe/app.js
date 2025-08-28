/* Baigiamasis Darbas

Užduoties esmė:

Sukurti internetinę platformą grupiniam lėšų rinkimui. 
Realus idėjos įgyvendinimo pavyzdys https://www.gofundme.com/

Užduoties reikalavimai:
Naudojant Node.js arba PHP, MySql arba JSON failais ir JS sukurti svetainę, 
turinčią viešą ir administravimo sritis. Taip pat prisijungimo ir registracijos puslapius. 
Vieša sritis turi būti padalinta į dvi dalis:
Naujos istorijos/idėjos kūrimo, kurioje vartotojai galėtų sukurti savo istoriją ar idėją, 
įkelti nuotrauką ir nurodyti norimą surinkti sumą. (gali patekti visi registruoti vartotojai)
Istorijų/idėjų sąrašo, 
kurioje galėtų matyti visas istorijas/idėjas ir 
taip pat galėtų skirti tam tikrą pinigų sumą pasirinktai istorijai ar idėjai. 
(gali patekti visi, skirti lėšas taip pat visi)

Vieša sritis

Pagrindiniame viešos srities puslapyje turi būti atvaizduotas sąrašas su istorijom ar idėjom. 
Kiekvienas sąrašo punktas turi turėti sekančius elementus:
1. Istorijos/idėjos tekstą;
2. nuotrauką; 
3. norimą surinkti sumą; 
4. jau surinktą sumą; 
5. likusią iki tikslo sumą;
6. sąrašą su lėšų surinkimo istorija (lėšų aukotojo vardas ir suma); 
7. kiekvienas punktas turi turėti du input laukelius- vienas lėšų aukotojo vardui, 
   kitas aukojamai sumai ir mygtuką aukoti. 

Sąrašas turi būti pateiktas taip, kad viršuje būtų istorijos/idėjos, 
kurios dar nesurinko norimos sumos, o apačioje tos, kurios sumą jau surinko. 
Tos istorijos/idėjos, kurios jau surinko norimą sumą, turi būti atvaizduojamos skirtingai, 
informuojant, kad suma yra surinkta ir nebeturėti laukelių lėšų rinkimui 
(surinkus pageidaujamą sumą, tolesnis lėšų rinkimas nutraukiamas).

Kitame viešosios srities puslapyje kiekvienas norintis turėtų turėt galimymę sukurti 
savo naują istoriją ar idėją. 
Joje turi būti laukeliai informacijos įvedimui: istorijos/idėjos tekstas, 
nuotrauka ir norima surinkti suma.

Administravimo sritis

Administracinėje dalyje, svetainės administratorius turi turėti galimybę peržiūrėti visas 
pateiktas istorijas/idėjas ir jas patvirtinti arba ištrinti. 
Tik administratoriaus patvirtintos istorijos/idėjos turi būti atvaizduojamos viešoje dalyje. 
(gali patekti tik registruotas vartotojas, turintis admin teises)
*/

console.log('Uzduotis');

/*
The essence of the task:

Create an online platform for group fundraising. 
Real example of the idea implementation https://www.gofundme.com/

Task requirements:
Using Node.js or PHP, MySql or JSON files and JS, create a website 
with public and administration areas. Also login and registration pages. 
The public area must be divided into two parts:
New story/idea creation, where users could create their own story or idea, 
upload a photo and indicate the amount they want to raise. (all registered users can access)
Story/idea list, 
where they could see all stories/ideas and 
also be able to allocate a certain amount of money to a selected story or idea. 
(everyone can access, allocate funds as well as everyone)

Public Area

The main page of the public area must display a list of stories or ideas. 
Each list item must have the following elements:
1. The text of the story/idea;
2. a photo;
3. the amount you want to raise;
4. the amount you have already raised;
5. the amount remaining to reach the goal;
6. a list with the fundraising history (donor name and amount);
7. each item must have two input fields - one for the donor name, 
   the other for the amount to be donated, and a donate button. 

The list must be presented in such a way that the stories/ideas that have not yet raised the desired amount are at the top, and those that have already raised the amount are at the bottom. 
Those stories/ideas that have already raised the desired amount must be displayed differently, 
informing that the amount has been raised and no longer having fundraising fields 
(once the desired amount is raised, further fundraising is stopped).

On the next page of the public area, everyone should have the opportunity to create 
their own new story or idea. 
It should contain fields for entering information: the text of the story/idea, 
a photo and the amount you want to raise.

In the administration area, the site administrator must be able to view all 
submitted stories/ideas and approve or delete them. 
Only stories/ideas approved by the administrator must be displayed in the public area. 
(only registered users with admin rights can access)
*/

/*
https://docs.google.com/document/d/1_jCo5rDt0_GRURYuSJtG7scMvTsov_YLj9KW6bDWJVM/edit?tab=t.0
*/