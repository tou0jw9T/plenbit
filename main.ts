input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        plenbit.servoWrite(1, 50)
        plenbit.servoWrite(5, 50)
        plenbit.servoInitialSet()
        basic.pause(500)
        plenbit.servoWrite(1, 130)
        plenbit.servoWrite(5, 130)
        plenbit.servoInitialSet()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    plenbit.servoInitialSet()
    plenbit.stdMotion(plenbit.StdMotions.WalkForward)
})
plenbit.servoInitialSet()
basic.forever(function () {
	
})
