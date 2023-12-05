// ❓DESCRIPTION:
/*Create a function that will return a string that combines all of the letters of the three inputed
strings in groups. Taking the first letter of all of the inputs and grouping them next to each other.
Do this for every letter, see example below!
E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.*/

// ✔️SOLUTION:
function tripleTrouble(one, two, three){
    let tripleTrouble = '';
    const maxLength = Math.max(one.length, two.length, three.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < one.length) {
            tripleTrouble += one[i];
        }
        if (i < two.length) {
            tripleTrouble += two[i];
        }
        if (i < three.length) {
            tripleTrouble += three[i];
        }
    }

    return tripleTrouble;
}
const result = tripleTrouble("aa", "bb", "cc");
console.log("result: ", result);