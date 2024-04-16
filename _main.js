// Exercise I
// Use conditions to check if a given number is even. If so , print with
// console.log “ The Number (TheNumberYouWrote) is even ". If the
// number is not even, print " The Number (TheNumberYouWrote) is not
// even".
let num = 5;
if (num % 2 === 0) {
    console.log(`The Number ${num} is even`);
} else {
    console.log(`The Number ${num} is not even`);
}

// Exercise II
// Check which numbers from 10 to 100 are even and divisible by 3. Print
// with console.log all those that meet these conditions.
for (let i = 10; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// Exercise III
// From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example:
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.

let nums = [13, 15, 20];
let smallest = Math.min(...nums);
let largest = Math.max(...nums);
console.log(`smallest ${smallest} and largest ${largest}`);

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(
    `The smallest number ${smallest} is ${isPrime(smallest) ? "" : "not"}prime`,
    `The largest number ${largest} is ${isPrime(largest) ? "" : "not"} prime`
);
