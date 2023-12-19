// ❓DESCRIPTION:
/*Make a function that will return a greeting statement
that uses an input; your program should return, "Hello, <name> how are you doing today?".*/

// ✔️SOLUTION:
function greet(name){
    let message = "Hello, " + name + " how are you doing today?"
    return message;
}
const result = greet("Adam");
console.log("result: ", result);