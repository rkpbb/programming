// ❓DESCRIPTION:
// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.


// ✔️SOLUTIONS:
function logs(x, a, b){
//your code here
    return Math.log(a * b) / Math.log(x)
}
const x = 10;
const a = 3;
const b = 5;
const result = logs(x, a, b);
console.log("logs: ", result);
