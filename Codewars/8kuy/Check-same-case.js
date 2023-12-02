// ❓DESCRIPTION:
/* Write a function that will check if two given characters are the same case.
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

 function sameCase(a, b){
    return 0;
 }
*/

// ✔️SOLUTION:
function sameCase(symbol1, symbol2){
    if (!symbol1.match(/[a-z]/i) || !symbol2.match(/[a-z]/i)) {
        return -1;
    } else if (symbol1 === symbol1.toLowerCase() && symbol2 === symbol2.toLowerCase()) {
        return 1;
    } else if (symbol1 === symbol1.toUpperCase() && symbol2 === symbol2.toUpperCase()) {
        return 1;
    } else {
        return 0;
    }
}

console.log('sameCase-1: ', sameCase('q','6'))
console.log('sameCase-2: ', sameCase('K','&'))
