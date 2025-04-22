// Exercise 1 

const greet = name => "Hello, " + name + "!";
console.log(greet("Chris"));

const square = number => number * number;
console.log(square(4));

const isEven = number => number % 2 === 0;
console.log(isEven(8));



// Exercise 2

const square2 = x => x * x; 
console.log(square2(5));

const multiply = (a, b) => a * b; 
console.log(multiply(4, 5));

const getMessage = () => "Welcome to JavaScript!";
console.log(getMessage());



// Exercise 3 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your higher-order function
const evenNumbersSquared = numbers => {
    filteredNums = numbers.filter(number => number % 2 === 0);
    mappedNums = filteredNums.map(number => number * number);
    return mappedNums;
};

console.log(evenNumbersSquared(numbers));



// Exercise 4 

const prices = [10.99, 5.49, 12.99, 8.75, 15.20];

// Your higher-order function here
const calculateDiscountedTotal = prices => {
    mappedPrices = prices.map(price => 0.8 * price);
    reducedPrices = mappedPrices.reduce((total, price) => total + price, 0);
    return reducedPrices;
};

console.log(calculateDiscountedTotal(prices));



// Exercise 5 

const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Your higher-order function here
const findWordWithA = words => {
    foundWord = words.find(word => word.includes("a"));
    return foundWord;
};

console.log(findWordWithA(words));