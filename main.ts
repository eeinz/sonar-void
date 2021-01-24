let distance = 0
function moveRight () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P15, 700)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function moveForward () {
    pins.analogWritePin(AnalogPin.P13, 700)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 700)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function moveStop () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function moveBackward () {
    pins.analogWritePin(AnalogPin.P14, 700)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P16, 700)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function moveLeft () {
    pins.analogWritePin(AnalogPin.P13, 700)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(200)
}
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.pause(100)
    if (distance > 3 && distance < 20) {
        moveBackward()
        basic.pause(500)
        moveLeft()
        basic.pause(250)
        moveForward()
    } else {
        moveForward()
    }
})
