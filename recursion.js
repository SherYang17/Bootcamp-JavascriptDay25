

// 1. Write a recursive function that takes in two parameters, one for the base number, and one 
//    for the exponent number, i.e. how many times it will multiply the first number.
function power (base, exponent) {
    if (exponent === 0) {
        return 1;
      } else {
        return base * power(base, exponent - 1); // 2. Since it is recursive, you must call the function within the function and you must also have a base 
                                                 //    condition to avoid an infinite loop.
      }
}

// Console log the result and run the function on the following numbers:
console.log(power(2, 5)); // - 2 to the power of 5
console.log(power(7,3));  // - 7 to the power of 3
console.log(power(12, 2));// - 12 to the power of 2,
console.log(power(9, 4)); // - 9 to the power of 4,

// Bonus / Might help you think it through
// Write the function above and the iterative way of doing the same function. Console logs both functions with the same results as above. The results of the functions must match.



// ???????????????????????????????????????????????????????????????????????????????????
// function anotherPower (base, exponent) {
// for (let i = 0; i <= 20; i++) {
//     if (i % 5 === 0) {
//         console.log(i + " is divisible by 5");
//     } else {
//         console.log(i + " is not divisible by 5");
//     }
// }






// Think backwards, base * power = output and keep going
// When power = 0 need to account for that because anything to power of 0 = 1


// For example, if you have 2 to the power of 4, that is 2 x 2 x 2 x 2 or a sum of 16. It looks like this: 24
// We are going to write a function that replicates this same principle. Here is what is needed:

// 2. Since it is recursive, you must call the function within the function and you must also have a base 
//    condition to avoid an infinite loop.
// Console log the result and run the function on the following numbers:
//       - 2 to the power of 5
//       - 7 to the power of 3
//       - 12 to the power of 2,
//       - 9 to the power of 4,

// Bonus / Might help you think it through
// Write the function above and the iterative way of doing the same function. Console logs both functions with the same results as above. The results of the functions must match.



// 1 https://www.youtube.com/watch?v=M2nmAAVFLzQ Most helpful document
// 2 https://www.geeksforgeeks.org/product-2-numbers-using-recursion/ Click the Javascript tab but this is multiplying two numbers...
// 3 https://www.youtube.com/watch?v=6oDQaB2one8&t=544s doesn't have power of content


//Ngl, the 1st link was helpful but the code doesn't run
// let power = (power, exponent) => {
//     if (exponent === 0) return 1;
//     return base * power (base, exponent - 1);
// }
// 2 * power(2,5)


// for (let i = 0; i <= 20; i++) {
//     if (i % 5 === 0) {
//         console.log(i + " is divisible by 5");
//     } else {
//         console.log(i + " is not divisible by 5");
//     }
// }

