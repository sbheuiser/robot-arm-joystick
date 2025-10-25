radio.onReceivedNumber(function (receivedNumber) {
    i = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    j = 1 - j
    if (j == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    } else if (i == 0) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    i = 1 - i
    if (i == 1) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
    } else if (i == 0) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 45)
    }
})
let v = 0
let j = 0
let i = 0
radio.setGroup(16)
i = 99
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -10)
    } else if (input.buttonIsPressed(Button.B)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 10)
    } else {
        wuKong.stopAllMotor()
    }
    if (i == 1) {
        if (v < 90) {
            v = v + 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    } else if (i == 2) {
        if (v > 0) {
            v = v - 2
            basic.pause(100)
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, v)
        }
    }
    if (i == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 25)
    }
    if (i == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -35)
    }
    if (i == 5) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -80)
    }
    if (i == 6) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    }
    if (i == 0) {
        wuKong.stopAllMotor()
    }
})
