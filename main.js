// create a function 

// Ex1. Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

function greeter(myArray, counter) {
    var greetText = "Hello ";

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}

// Test Ex1.
console.log(greeter(['Sarah Sami', 'Pritesh Patel'], 2))

