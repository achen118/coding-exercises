// Imagine you're working on an application where the user interacts with the
// application through a video game controller. The controller has a directional
// pad (up, down, left, right) and three buttons (labeled A, B, and Start). When
// the user presses a button on the controller, the system will call a function
// you define and pass an integer key code that represents the button pressed.

// Key codes: Up = 1, Down = 2, Left = 3, Right = 4, A = 5, B = 6, Start = 7

// Implement a function that detects input of the following sequence and returns
// true when the sequence is completed, false otherwise.
// Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start

// - If the user presses a wrong button during the sequence, the sequence resets
//   to the beginning.
// - Your function should support users entering in the sequence multiple times.
// - Your function could receive many unrelated inputs before the sequence
//   begins.
// - Feel free to define other functions and any global variables you may need.

// 1 - 1 1 2 2 3 4 3 4 6 5 7

currSequence = []; // global

function completedSequence(keycode) {
    const sequence = [1, 1, 2, 2, 3, 4, 3, 4, 6, 5, 7];
    if (currSequence === [1, 1] && keycode === 1) {
        return false;
    }
    currSequence.push(keycode);
    let idx = currSequence.length - 1
    if (!sequence[idx] === keycode) {
        currSequence = [];
        return false;
    }
    if (currSequence.length !== sequence.length) {
        return false;
    } else {
        currSequence = [];
        return true;
    }
}
