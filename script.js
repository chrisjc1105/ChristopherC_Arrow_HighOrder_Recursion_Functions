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
const evenNumbersSquared1 = numbers => {
    let filteredNums = numbers.filter(number => number % 2 === 0);
    let mappedNums = filteredNums.map(number => number * number);
    return mappedNums;
};

console.log(evenNumbersSquared1(numbers));

// class solutions/alternatives 
const evenNumbersSquared2 = nums => {
    let out = [];
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];

        if(number % 2 == 0) {
            const square = number * number; 
            out.push(square);
        }
    }
    return out;
};

console.log(evenNumbersSquared2(numbers));



// Exercise 4 

const prices = [10.99, 5.49, 12.99, 8.75, 15.20];

// Your higher-order function here
const calculateDiscountedTotal1 = prices => {
    mappedPrices = prices.map(price => 0.8 * price);
    reducedPrices = mappedPrices.reduce((total, price) => total + price, 0);
    return reducedPrices;
};

console.log(calculateDiscountedTotal1(prices));

// class solutions/alternatives
const calculateDiscountedTotal2 = pricesArr => pricesArr.reduce((total, price) => {
    console.log(total);
    console.log(price);

    let discountedPrice = price * 0.8;
    console.log(discountedPrice);

    return total + discountedPrice;
}, 0);

console.log(calculateDiscountedTotal2(prices));

const calculateDiscountedTotal3 = pricesArr => {
    let i = 0;
    let total = 0; 

    while (i < pricesArr.length) {
        const currentPrice = pricesArr[i];
        console.log(currentPrice);

        const reducedPrice = currentPrice * 0.8;

        total = reducedPrice + total; 

        i++; 
    }

    return total;
}

console.log(calculateDiscountedTotal3(prices));



// Exercise 5 

const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Your higher-order function here
const findWordWithA1 = words => {
    const foundWord = words.find(word => word.includes("a"));
    return foundWord;
};

console.log(findWordWithA1(words));

// class solutions/alternatives
const findWordWithA2 = wordsArr => {
    const wordA = wordsArr.find(word => word.includes("a"));

    return wordA;
};

console.log(findWordWithA2(words)); 



// Exercise 6 

const sumOfArray = (arrayOfNumbers) => {

    // let total = 0;
    // for (let i = 0; i < arrayOfNumbers.length; i++) {
    //     total += arrayOfNumbers[i];
    // }
    // console.log(total);
    
    // // let finalArr = [];
    // // let i = 0; 
    // // let total = 0;
    // // if (i === arrayOfNumbers.length) {
    // //     console.log(total);
    // //     return;
    // // } 
    // //     total = arrayOfNumbers[i] + arrayOfNumbers[i+1];
    // //     console.log(total);
    // //     finalArr.push(total);
    // //     console.log(finalArr);

    if (arrayOfNumbers.length == 0) {
        return 0;
    }

    const num = arrayOfNumbers.pop();
    console.log(arrayOfNumbers);
    console.log(num);

    return num + sumOfArray(arrayOfNumbers);
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

// Input: [1, 2, 3, 4, 5, 6]
// Output: 21