enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    } else if (receivedNumber == 2) {
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
        neZha.setMotorSpeed(neZha.MotorList.M1, 60)
        basic.pause(500)
        neZha.setMotorSpeed(neZha.MotorList.M1, 200)
    } else if (receivedNumber == 3) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M2, 60)
        basic.pause(500)
        neZha.setMotorSpeed(neZha.MotorList.M2, 100)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("parar")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    neZha.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
neZha.setMotorSpeed(neZha.MotorList.M1, 0)
neZha.setMotorSpeed(neZha.MotorList.M2, 0)
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # #
        # # . # #
        . . . # .
        . . . . .
        `)
})
