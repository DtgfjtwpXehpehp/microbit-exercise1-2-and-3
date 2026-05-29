input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        # # . . .
        # # . # #
        . # . # .
        . # # # .
        . . . . .
        `)
    playerChoice = 4
})
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
    randomMicrobitChoice = randint(0, 4)
    if (randomMicrobitChoice == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (randomMicrobitChoice == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (randomMicrobitChoice == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (randomMicrobitChoice == 3) {
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # . . .
            # # . # #
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    microbitChoice = randomMicrobitChoice
    if (playerChoice == microbitChoice) {
        basic.showString("Tie")
    } else if (playerChoice == 0 && microbitChoice == 2 || playerChoice == 1 && microbitChoice == 0 || playerChoice == 2 && microbitChoice == 1 || playerChoice == 3 && microbitChoice == 1 || playerChoice == 3 && microbitChoice == 4 || playerChoice == 4 && microbitChoice == 0 || playerChoice == 4 && microbitChoice == 2 || playerChoice == 0 && microbitChoice == 3 || playerChoice == 1 && microbitChoice == 4 || playerChoice == 2 && microbitChoice == 3) {
        basic.showString("You win")
    } else {
        basic.showString("You lose")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . # . #
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        `)
    playerChoice = 3
})
let randomMicrobitChoice = 0
let playerChoice = 0
let microbitChoice = 0
microbitChoice = 0
playerChoice = 0
