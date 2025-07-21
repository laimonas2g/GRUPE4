
// utility for generating a RFC4122 version 4 compliant UUID

// Eksportuoja funkciją uuidv4, kad ją būtų galima naudoti kituose failuose
export function uuidv4() {
    // Sugeneruoja paprastą RFC4122 4 versijos UUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g, // Suranda visus simbolius 'x' ir 'y' šablone
        function(c) {
            // Sugeneruoja atsitiktinį skaičių nuo 0 iki 15
            const r = Math.random() * 16 | 0, 
                  // Jei simbolis 'x', naudoja r; jei 'y', užtikrina, kad pirmi bitai būtų 8, 9, A arba B
                  v = c === 'x' ? r : (r & 0x3 | 8);
            // Konvertuoja skaičių į šešioliktainį simbolį
            return v.toString(16);
        }
    );
}