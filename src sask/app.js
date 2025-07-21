
/**
 * Pagrindinis įėjimo taškas: aptinka, kuriame puslapyje esame ir sukuria atitinkamą klasės egzempliorių.
 * 
 * Šiame faile importuojamos visų puslapių logikos klasės ir pagal dabartinį HTML failo pavadinimą
 * sukuriamas atitinkamas puslapio logikos objektas.
 */

/* 
 * Importuojamos puslapių logikos klasės.
 * Kiekviena klasė atsakinga už atitinkamo puslapio funkcionalumą.
 */
 
/* 
 * Gaunamas dabartinio HTML failo pavadinimas iš URL kelio.
 * window.location.pathname – grąžina kelio dalį iš dabartinio URL.
 * .split('/') – padalina kelią į dalis pagal '/' simbolį.
 * .pop() – paima paskutinį masyvo elementą, kuris dažniausiai yra failo pavadinimas.
 */

/*
 * Pagal dabartinio puslapio pavadinimą sukuriamas atitinkamos klasės egzempliorius.
 * switch (page) – tikrina, kuris puslapis yra atidarytas.
 * Kiekvienu atveju sukuriamas naujas atitinkamos klasės objektas.
 * Jei puslapis neatpažintas – nieko nedaroma (galima pridėti klaidos pranešimą ar peradresavimą).
 */

/*
 * Pastaba:
 * Jei URL baigiasi pasviruoju brūkšniu (pvz., /apie/), .pop() grąžins tuščią eilutę.
 * Tokiu atveju gali reikėti papildomo apdorojimo.
 */


// entry point: detects page and instantiates the appropriate class for each page

// Importuoja puslapių logikos klases, kurios atsakingos už skirtingų puslapių funkcionalumą
import CreateInvoicePage from './CreateInvoicePage.js';
import ReadInvoicePage from './ReadInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

// Gauna dabartinio HTML failo pavadinimą iš URL kelio
const page = window.location.pathname.split('/').pop();

// Pagal puslapio pavadinimą sukuria atitinkamos klasės egzempliorių
switch (page) {
    case 'create.html':
        // Jei atidarytas create.html, inicijuoja CreateInvoicePage klasę
        new CreateInvoicePage();
        break;
    case 'edit.html':
        // Jei atidarytas edit.html, inicijuoja EditInvoicePage klasę
        new EditInvoicePage();
        break;
    case 'read.html':
        // Jei atidarytas read.html, inicijuoja ListInvoicesPage klasę
        new ListInvoicesPage();
        break;
    case 'show.html':
        // Jei atidarytas show.html, inicijuoja ShowInvoicePage klasę
        new ShowInvoicePage();
        break;
    case 'delete.html':
        // Jei atidarytas delete.html, inicijuoja DeleteInvoicePage klasę
        new DeleteInvoicePage();
        break;
    default:
        // Jei puslapio pavadinimas neatpažintas, nieko nedaro (galima pridėti klaidos pranešimą ar peradresavimą)
        break;
}



// // Get the current page's path from the URL (e.g., "/about.html")
// const pathname = window.location.pathname;

// // Split the path into an array using '/' as the separator (e.g., ["", "about.html"])
// const pathParts = pathname.split('/');

// // Get the last element of the array, which is usually the page file name (e.g., "about.html")
// const page = pathParts.pop();

// Explanation:

// window.location.pathname retrieves the path part of the current URL.
// .split('/') breaks the path into segments wherever there is a /.
// .pop() removes and returns the last element of the array, which is typically the file name of the current page.
// Gotcha:
// If the URL ends with a slash (e.g., /about/), pop() will return an empty string. You may want to handle this case if it matters for your logic.

// Suggestion:
// Declare variables with const or let for better code clarity and to avoid polluting the global scope.
