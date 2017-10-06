// The 2-player game of Drawdown is played with N groups of stones. There is a group of stones belonging to player 1 at index 0, a group of stones belonging to player 2 at index N - 1, and groups of stones at indices [1..N-2] that have no specific owner.
// At the start of each game a set of size k containing all valid moves is presented. Moves can be re-used. Each move is represented by an array of N integers, with each integer representing the number of stones at the corresponding position the move adds or removes from the collection. All moves are guaranteed to reduce the total number of stones, even though they may increase the number of stones within an individual group.
// After no more moves can be completed (i.e. there are not enough of the required types of stones to remove to complete any move), the player with the greater number of their own stones remaining is declared the victor. If both players have the same number of stones, then player 2 wins to compensate for the disadvantage of going second. 

// Example: Let's say the game begins with a board of [6, 4, 2, 4]. These are the available moves provided:
// 1. [-2, -2, 1, 0]
// 2. [-4, -4, 0 ,0]
// 3. [0, 0, -2, -2]

// Initial board: [6, 4, 2, 4]
// Player 1 performs move 1. New board: [4, 2, 3, 4]
// Player 2 can either perform move 1 or move 3. They decide to perform move 1. New board: [2, 0, 4, 4]
// Player 1 performs move 3 (which is the only move available). New board: [2, 0, 2, 2]
// Player 2 is now forced to perform move 3. New board: [2, 0, 0, 0]
// The game is now over and player 1 is the winner.

// Let's start with something simple. Assuming that it's the end of the game,  write a function that given a board returns which player is the winner.

function winner(board) {
    if (board[0] > board[board.length - 1]) {
        return 1;
    } else {
        return 2;
    }
}

// console.log(winner([2, 0, 0, 0]));

function validMove(board, move) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] + move[i] < 0) {
            return false;
        }
    }
    return true;
}

function gameOver(board, moves) {
    for (let i = 0; i < moves.length; i++) {
        if (validMove(board, moves[i])) {
            return false;
        }
    }
    return true;
}

// console.log(validMove([4, 2, 3, 4], [-2, -2, 1, 0]));
// console.log(gameOver([2, 0, 0, 0], [[-2, -2, 1, 0], [-4, -4, 0 ,0], [0, 0, -2, -2]]));

function makeMove(board, move) {
    const nextBoard = [];
    for (let i = 0; i < board.length; i++) {
        nextBoard.push(board[i] + move[i]);
    }
    return nextBoard;
}

// console.log(makeMove([4, 2, 3, 4], [-2, -2, 1, 0]));

// move 1 -> move1
// -> move2
// -> ...

// move 2 -> move1
// -> move2
// -> ...          

// move 3 -> move1
// -> move2
// -> ...          

// ...

// Base case: gameover --> return

// loop through all possible moves
// if valid, makeMove --> makeMove(nextBoard)

function drawDown(board, moves) {
    if (gameOver(board, moves)) {
        const currWin = {
            1: 0,
            2: 0
        };
        const winID = winner(board);
        currWin[winID] = 1;
        return currWin;
    } else {
        const wins = {
            1: 0,
            2: 0
        };
        for (let i = 0; i < moves.length; i++) {
            if (validMove(board, moves[i])) {
                const nextBoard = makeMove(board, moves[i]);
                const result = drawDown(nextBoard, moves);
                wins[1] += result[1];
                wins[2] += result[2];
            }
        }
        return wins;
    }
}

// console.log(drawDown([6, 4, 2, 4], [
//     [-2, -2, 1, 0],
//     [-4, -4, 0, 0],
//     [0, 0, -2, -2]
// ]));