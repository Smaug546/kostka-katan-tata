input.onGesture(Gesture.Shake, function () {
    liczba_oczek = randint(1, 36)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
let liczba_oczek = 0
liczba_oczek = 0
music.setVolume(255)
while (liczba_oczek == 0) {
    basic.showString("potrzasnij")
}
basic.forever(function () {
    if (liczba_oczek >= 16 && liczba_oczek <= 21) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
    }
    if (liczba_oczek >= 11 && liczba_oczek <= 15) {
        basic.showLeds(`
            . . . # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (liczba_oczek >= 26 && liczba_oczek <= 22) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `)
    }
    if (liczba_oczek >= 7 && liczba_oczek <= 10) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # .
            . . . . #
            . . # # .
            `)
    }
    if (liczba_oczek >= 27 && liczba_oczek <= 30) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . . . #
            . . # # .
            `)
    }
    if (liczba_oczek >= 4 && liczba_oczek <= 6) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `)
    }
    if (liczba_oczek >= 31 && liczba_oczek <= 33) {
        basic.showLeds(`
            # . . # .
            # . # . #
            # . # . #
            # . # . #
            # . . # .
            `)
    }
    if (liczba_oczek == 2 || liczba_oczek == 3) {
        basic.showLeds(`
            . . # # .
            . . . . #
            . . . # .
            . . . . #
            . . # # .
            `)
    }
    if (liczba_oczek == 35 || liczba_oczek == 34) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    }
    if (liczba_oczek == 1) {
        basic.showLeds(`
            . . # # .
            . . . . #
            . . . # .
            . . # . .
            . . # # #
            `)
    }
    if (liczba_oczek == 36) {
        basic.showLeds(`
            # . # # .
            # . . . #
            # . . # .
            # . # . .
            # . # # #
            `)
    }
})
