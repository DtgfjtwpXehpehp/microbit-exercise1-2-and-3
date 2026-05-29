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
        tieScore += 1
    } else if (playerChoice == 0 && microbitChoice == 2 || playerChoice == 1 && microbitChoice == 0 || playerChoice == 2 && microbitChoice == 1 || playerChoice == 3 && microbitChoice == 1 || playerChoice == 3 && microbitChoice == 4 || playerChoice == 4 && microbitChoice == 0 || playerChoice == 4 && microbitChoice == 2 || playerChoice == 0 && microbitChoice == 3 || playerChoice == 1 && microbitChoice == 4 || playerChoice == 2 && microbitChoice == 3) {
        basic.showString("You win")
        playerScore += 1
    } else {
        basic.showString("You lose")
        microbitScore += 1
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
let playerScore = 0
let microbitScore = 0
let tieScore = 0
basic.forever(function () {
    if (input.logoIsPressed() && input.buttonIsPressed(Button.A)) {
        basic.showString("Games played: ")
        basic.showNumber(microbitScore + (playerScore + tieScore))
        basic.pause(2000)
        basic.showString("You have: ")
        basic.showNumber(playerScore)
        basic.pause(2000)
        basic.showString("Microbit: ")
        basic.showNumber(microbitScore)
        basic.pause(2000)
        basic.showString("Ties: ")
        basic.showNumber(tieScore)
        basic.pause(2000)
    }
})
