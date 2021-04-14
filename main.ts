basic.showIcon(IconNames.Ghost)
for (let index = 0; index < 4; index++) {
    led.plot(2, 2)
}
basic.forever(function () {
    cuteBot.forward()
})
