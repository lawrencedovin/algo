// array = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [1, 6, -2, 10];


// // Create variable for sequenceIndex
// // Iterate array 
// // if loops through whole array without iterating until the end of sequence array then return false
// // Iterate sequence until sequenceIndex < sequence.length if sequence goes outside loop then return true.
// // If match is found where sequence[sequenceIndex] === array[arrayIndex] then sequenceIndex += 1
// // 
// /*

// array = [5, 1, 22, 25, 6, -1, 8, 10];
//             ai
// sequence = [1, 6, -1, 10];
//             si

// */

// // const validateSubsequence = (array, sequence) => {
// //     let sequenceIndex = 0;
// //     let arrayIndex = 0;

// //     // Executes this block of code while both conditions are met:
// //     // arrayIndex < array.length and sequenceIndex < sequence.length.
// //     // If both of these conditions are not met then the loop breaks outside the loop.
// //     while(arrayIndex < array.length && sequenceIndex < sequence.length) {
// //         if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
// //         if(sequenceIndex === sequence.length) return true;
// //         arrayIndex++;
// //     }
// //     return false;
// // }

// // console.log(validateSubsequence(array, sequence)); 

// const validateSubsequence2 = (array, sequence) => {
    
//     // Make sequenceIndex variable that iterates everytime array element matches with a sequence element.
//     let sequenceIndex = 0;
//     // Loop through array elements
//     for(value of array) {
//         // if array element === sequence element, sequenceIndex++.
//         if(value === sequence[sequenceIndex]) sequenceIndex++;
//         // if sequenceIndex === sequence.length return true.
//         if(sequenceIndex === sequence.length) return true;
//     }
//     // if array is looped fully without sequenceIndex === sequence.length return false.
//     return false;
// }

// console.log(validateSubsequence2(array, sequence)); 

// Takes in an array
// Takes in a sequence of numbers which checks if it is a subsequence of the array
// Returns a boolean value of true or false. If sequence is a subsequence then true else false.
// Set the index of an array and sequence both to = 0;

/*
array = [5, 1, 22, 25, 6, -1, 8, 10]
        [i]
sequence = [1, 6, -1, 10]
            [j]

if array[i] doesn't equal sequence[j] then i++

array = [5, 1, 22, 25, 6, -1, 8, 10]
            [i]
sequence = [1, 6, -1, 10]
            [j]

if array[i] equals sequence[j] then j++

iterate until i < array.length and j < sequence.length

Outside of loop 

return if(j === sequence.length - 1);

*/

// const validateSubsequence = (array, sequence) => {
//     let i = 0;
//     let j = 0;
    
//     while(i < array.length && j < sequence.length) {
//         if(array[i] === sequence[j]) j++;
//         i++;
//     }

//     return j === sequence.length;
// }

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

// console.log(validateSubsequence(array, sequence));

/*
array = [5, 1, 22, 25, 6, -1, 8, 10]
         number
sequence = [1, 6, -1, 10]
            [j]

if number of array equals sequence[j] then j++

if j === sequence.length return true;

Outside of loop 

return false

*/

const validateSubsequence2 = (array, sequence) => {

    let j = 0;

    for(const number of array) {
        if(number === sequence[j]) j++;
        if(j === sequence.length) return true;
    }
    return false;
}

console.log(validateSubsequence2(array, sequence));






























































// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If none of the numbers sum up to the target sum the function should return an empty array.

// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10

// Sample Output
// [-1, 11]

// const twoNumberSum = (array, targetSum) => {

//     // Make an object that stores in previously iterated array elements called numbersObject.
//     const numbersObject = {};

//     // Create a variable called targetNumber which is the number needed along with the currentNumber to get the targetSum

//     // Loop using a for of loop
//     for(number of array) {
//         // Create a variable called targetNumber which is the number needed along with the currentNumber to get the targetSum.
//         // targetNumber = targetSum - currentNumber;
//         let targetNumber = targetSum - number;

//         // Check each iteration where each element checks against the numbersObject to see if the targetNumber is already stored in the array.
//         // if targetNumber in numbersObject then return [element, targetNumber]
//         if(targetNumber in numbersObject) return [number, targetNumber];
        
//         // Store each iterated element into the numbersObject having the value of true.
//         // ie. 3: true
//         numbersObject[number] = true;
//     }
//     // if looped completely without having the correct targetNumber return [];
//     return [];
// }

// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;

// console.log(twoNumberSum(array, targetSum));