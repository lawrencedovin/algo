// 1.) O(n) time | O(1) space
function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrayIndex = 0;
      let sequenceIndex = 0;
      
      while(arrayIndex < array.length && sequenceIndex < sequence.length){
          if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
          arrayIndex++
      }
      return sequenceIndex === sequence.length;
  }

// Create variable for sequenceIndex
// Iterate array 
// if loops through whole array without iterating until the end of sequence array then return false
// Iterate sequence until sequenceIndex < sequence.length if sequence goes outside loop then return true.
// If match is found where sequence[sequenceIndex] === array[arrayIndex] then sequenceIndex += 1
// 
/*
array = [5, 1, 22, 25, 6, -1, 8, 10];
            ai
sequence = [1, 6, -1, 10];
            si
*/

  const validateSubsequence = (array, sequence) => {
    let sequenceIndex = 0;
    let arrayIndex = 0;

    // Executes this block of code while both conditions are met:
    // arrayIndex < array.length and sequenceIndex < sequence.length.
    // If both of these conditions are not met then the loop breaks outside the loop.
    while(arrayIndex < array.length && sequenceIndex < sequence.length) {
        if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
        if(sequenceIndex === sequence.length) return true;
        arrayIndex++;
    }
    return false;
}

console.log(validateSubsequence(array, sequence)); 

// 2.) O(n) time | O(1) space
const validateSubsequence2 = (array, sequence) => {
    
  // Make sequenceIndex variable that iterates everytime array element matches with a sequence element.
  let sequenceIndex = 0;
  // Loop through array elements
  for(value of array) {
      // if array element === sequence element, sequenceIndex++.
      if(value === sequence[sequenceIndex]) sequenceIndex++;
      // if sequenceIndex === sequence.length return true.
      if(sequenceIndex === sequence.length) return true;
  }
  // if array is looped fully without sequenceIndex === sequence.length return false.
  return false;
}

console.log(validateSubsequence2(array, sequence)); 