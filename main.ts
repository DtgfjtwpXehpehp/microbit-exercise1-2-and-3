input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    playerChoice = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    playerChoice = 2
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    playerChoice = 1
})
input.onGesture(Gesture.Shake, function () {
    // 1. Pick a random number between 0 and 2 ONCE
    randomMicrobitChoice = randint(0, 2)
    // 2. Check that number and show the matching icon
    if (randomMicrobitChoice == 0) {
        // Rock
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (randomMicrobitChoice == 1) {
        // Paper
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        // Scissors
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    microbitChoice = randomMicrobitChoice
    // Compare choices to find the winner
    // Rock beats Scissors
    // Paper beats Rock
    // Scissors beats Paper
    if (playerChoice == microbitChoice) {
        basic.showString("Tie")
    } else if (playerChoice == 0 && microbitChoice == 2 || playerChoice == 1 && microbitChoice == 0 || playerChoice == 2 && microbitChoice == 1) {
        basic.showString("You win")
    } else {
        basic.showString("You lose")
    }
})
let randomMicrobitChoice = 0
let playerChoice = 0
let microbitChoice = 0
microbitChoice = 0
playerChoice = 0
