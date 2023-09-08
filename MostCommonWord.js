/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let hashmap = new Map();
    
    // Tokenize the paragraph into words
    let words = paragraph.toLowerCase().split(/\W+/).filter(Boolean);
    
    for (let word of words) {
        if (banned.includes(word)) {
            // If the word is banned, skip it
            continue;
        }
        
        if (hashmap.has(word)) {
            // If the word already exists in the map, increment its counter
            hashmap.set(word, hashmap.get(word) + 1);
        } else {
            // Otherwise, add it to the map
            hashmap.set(word, 1);
        }
    }
    
    return [...hashmap.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[0];
};
