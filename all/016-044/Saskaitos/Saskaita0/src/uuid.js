// uuid.js
// Utility for generating a RFC4122 version 4 compliant UUID

export function uuidv4() {
    // Generates a simple RFC4122 version 4 compliant UUID.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 8);
        return v.toString(16);
    });
}