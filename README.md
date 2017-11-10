# coding-exercises

## findImage(arr)
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

The image you get is known to rectangles of 0s on a background of 1s.

Write a function that takes in the image and outputs the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

## highestProduct(arr)
Given an array of integers, find the highest product you can get from three of the integers.

## drawDown(board, moves)
The 2-player game of Drawdown is played with N groups of stones. There is a group of stones belonging to player 1 at index 0, a group of stones belonging to player 2 at index N - 1, and groups of stones at indices [1..N-2] that have no specific owner.

At the start of each game a set of size k containing all valid moves is presented. Moves can be re-used. Each move is represented by an array of N integers, with each integer representing the number of stones at the corresponding position the move adds or removes from the collection. All moves are guaranteed to reduce the total number of stones, even though they may increase the number of stones within an individual group.

After no more moves can be completed (i.e. there are not enough of the required types of stones to remove to complete any move), the player with the greater number of their own stones remaining is declared the victor. If both players have the same number of stones, then player 2 wins to compensate for the disadvantage of going second. 

## parse_input(input_string)
Given a string that starts with the token "breadandbutter", parse out a root command and command arguments that are included in the string.

## normalizePath(str)
Please write a method to normalize a string which represents a file path.