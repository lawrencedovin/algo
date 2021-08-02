const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

function twoNumberSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if(arr[i] + arr[j] === targetSum) {
            return [arr[i], arr[j]]
        }
      }
    }
    return [];
}
  
console.log(twoNumberSum(array, targetSum));