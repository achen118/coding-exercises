// Given an array of integers, 
// find the highest product 
// you can get from three of the integers.

// [1, 2, 3] --> 1 * 2 * 3 = 6

// Base case: arr.length === 3 --> product of the three elements

// [6, 2, 3, 4, 5, 6] --> 6 * 6 * 5 = 36 * 5 = 180

// [1,1,1,1,1,1,1,2,3244,45,45,324,234,234,234,23,234,234]
// [-6, -5, 2, 3]


// * Method: sort the array, multiply the last three integers

// Method: three loops, try every possibility of multiplying three numbers (inefficient)


// If given negative numbers: 
// - 2 negative numbers --> positive

// Case 1: all positive numbers
// Case 2: includes negative numbers

// Pseudocode:
// 
// Sort array
// Check if all numbers are negative
// Check if first two elements of arr are negative
//
// Take the last three elements of the sorted arr and multiply together
//
// All numbers positive:
// return product
//
// At least two negative numbers:
// Take first elements of the arr, multiply them with the largest positive number in the array
// return product


function highestProduct(arr) {
    if (arr.length === 3) {
        return arr[0] * arr[1] * arr[2];
    }
    const sortedArr = arr.sort((x, y) => x - y);
    const negNums = sortedArr.filter(el => el < 0).length;
    if (negNums === arr.length || negNums === 0) {
        return sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2] * sortedArr[sortedArr.length - 3];
    }
    if (negNums > 2) {
        return sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length - 1];
    }
}