basic.forever(function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    if (input.compassHeading() < 315) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 45) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
    }
})
