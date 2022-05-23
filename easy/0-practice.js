// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If none of the numbers sum up to the target sum the function should return an empty array.

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output
// [-1, 11]

// 1.)
// const twoNumberSum = (array, targetSum) => {
//     for(let i = 0; i < array.length; i++) {
//         for(let j = i+1; j < array.length; j++){
//             if(array[i] + array[j] === targetSum) return [array[i], array[j]];
//         }
//     }
//     return [];
// }

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));


// 2.)
const twoNumberSum = (array, targetSum) => {
    // Create a numbers object to store in already iterated values to check if targetNumber already exist while looping.
    const numbers = {};
    // loop through array using for of loop.
    for(number of array) {
        // Create variable targetNumber = targetSum - number, to check which number is needed to make up targetSum.
        const targetNumber = targetSum - number;
        // If targetNumber is in numbers object then return [targetNumber, number];
        if(targetNumber in numbers) return [targetNumber, number];
        // If targetNumber is not in numbers object store the number to the numbers object.
        else numbers[number] = true;
    }
    // If array is looped without finding the targetNumber in array return [];
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));