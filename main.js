// create a function 

// function greeter(myArray, counter) {
//     var greetText = "Hello ";

//     for (var index = 0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//     }
// }

// Ex1. Rewrite the above code block using ES6 syntax, ie. const, let, arrow function, template literals
// and for..of

const greeter = (myArray) => {
    let greetText = "Hello ";
    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
}

// Test Ex1.
console.log(greeter(['Sarah Sami', 'Pritesh Patel']));



