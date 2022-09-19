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
    const greetText = "Hello ";

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
}

// Test Ex1.
const myArray = ["Sarah Sami", " Pritesh Patel", "Josh Dun"];
greeter(myArray);


// Ex2. Using destructuring assignment syntax and the spread operator, write a function will capitalize the
// first letter of a string.

const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
}

// Test Ex2.
console.log("hello, I'm a string and an idiot. => " + capitalize("hello, I'm a string and an idiot."));

// Ex3. Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
// the first character of each Color in the following array..

const colors = ["red", "green", "blue"];

const capitalizeColors = (colors) => {
    return colors.map(capitalize);
}

// Test Ex3.
console.log(capitalizeColors(colors));

// Ex4. Using array.proto.filter create a function that will filter out all the values of the array that are less
// than twenty.

const numbers = [1, 30, 39, 29, 10, 13, 74, 123];

const filterNumbers = (numbers) => {
    return numbers.filter(number => number > 20);
}

// Test Ex4.
console.log("numbers less than 20 filtered out: " + filterNumbers(numbers));

// Ex5. Using array.proto.reduce create calculate the sum and product of a given array.

const nums = [1, 2, 3, 4, 5];

const sumAndProduct = (numbers) => {
    const sum = numbers.reduce((total, number) => total + number);
    const product = numbers.reduce((total, number) => total * number);
    return "sum: " + sum + ", product: " + product;
}

// Test Ex5.
console.log(sumAndProduct(nums));

// Ex6. Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
// from Car Class. The parameters for the Car class is the model and year. The parameters for the
// subclass is the model, year and balance.
// • Use the super key word in the Sedan subclass to set the model and name in base Car
// constructor.

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}  

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
}

// Test Ex6.

const car = new Car("Toyota", 2019);
const sedan = new Sedan("Toyota", 2019, 10000);

console.log(car);
console.log(sedan);






