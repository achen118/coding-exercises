// Imagine we have an image. We'll represent this image as a simple
// 2D array where every pixel is a 1 or a 0.

// The image you get is known to rectangles of 0s on a background
// of 1s.

// Write a function that takes in the image and outputs the coordinates
// of all the 0 rectangles --
// top-left and bottom-right;
// or top-left, width and height.

// input:
const image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

// Always assume a valid input (there will always a rectangle of 0's)
// As I search left --> right, the first 0 that I find will be the top left corner
// Bottom right corner: if element at next idx is "1" and element at same idx in the next array is "1"

// Edge case: Only 1 zero
// Edge case: If I reach the last possible element and find no 1's --> bottom right corner


// Pseudocode:
// results = []

// for loop (i)
    // for loop (j)

    // top left corner --> [i, j] --> appended to results
    // if statement: reach last possible element --> last element is bottom right corner
    // bottom right corner --> [i, j] --> appended to results --> break/return

// return results

function findImage(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (0 === arr[i][j]) {
                if (results.length !== 1) {
                    results.push([i, j]);
                } else if (j === arr[i].length - 1 && i === arr.length - 1) {
                    results.push([i, j]);
                } else if (j === arr[i].length - 1) {
                    if (arr[i + 1][j] === 1) {
                        results.push([i, j]);
                    }
                } else if (i === arr.length - 1) {
                    if (arr[i][j + 1] === 1) {
                        results.push([i, j]);
                    }
                } else {
                    if (arr[i][j + 1] === 1 && arr[i + 1][j] === 1) {
                        results.push([i, j]);
                    }
                }
            }
        }
    }
    console.log(results[0]);
    console.log(results[1]);
}

findImage(image);