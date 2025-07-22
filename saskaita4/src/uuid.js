
export function uuidv4() {
    
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(  // sugeneruoja RFC4122 4 versijos UUID
        /[xy]/g,  // suranda visus simbolius 'x' ir 'y' shablone
        function(c) {
            // sugeneruoja atsitiktini skaiciu nuo 0 iki 15
            const r = Math.random() * 16 | 0, 
                  // jei simbolis 'x', naudoja r; jei 'y', uztikrina, kad pirmi bitai būtų 8, 9, A arba B
                  v = c === 'x' ? r : (r & 0x3 | 8);
            return v.toString(16); // konvertuoja skaiciu i sesioliktaini simboli
        }
    );
}