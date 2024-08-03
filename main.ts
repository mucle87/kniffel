let VersucheNum = 0
let WürfelTemp = 0
let SaveWürfel0 = 0
let SaveWürfel1 = 0
input.onGesture(Gesture.Shake, function () {
    VersucheNum = 1
    for (let Index = 0; Index <= 4; Index++) {
        WürfelTemp = randint(1, 6)
        basic.showNumber(WürfelTemp)
        basic.pause(2000)
        music.playTone(262, music.beat(BeatFraction.Half))
        if (Index == 0) {
            SaveWürfel0 = WürfelTemp
        }
        if (Index == 1) {
            SaveWürfel1 = WürfelTemp
        }
    }
    if (SaveWürfel0 == 1 && SaveWürfel1 > 1) {
        basic.showLeds(`
            # . . . .
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (SaveWürfel0 >= 2 && SaveWürfel1 > 1) {
        basic.showLeds(`
            # # . . .
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    VersucheNum = 2
    for (let Index = 0; Index <= 2; Index++) {
        WürfelTemp = randint(1, 6)
        basic.showNumber(WürfelTemp)
        basic.pause(2000)
        music.playTone(262, music.beat(BeatFraction.Half))
        if (Index == 0) {
            SaveWürfel0 = WürfelTemp
        }
        if (Index == 1) {
            SaveWürfel1 = WürfelTemp
        }
    }
    if (SaveWürfel0 == 1 && SaveWürfel1 > 1) {
        basic.showLeds(`
            # . . . .
            # # # # .
            # # # . .
            # # # # #
            . . . . .
            `)
    } else if (SaveWürfel0 >= 2 && SaveWürfel1 > 1) {
        basic.showLeds(`
            # # . . .
            # # # # .
            # . . . .
            # # # . .
            . . . . .
            `)
    }
})
