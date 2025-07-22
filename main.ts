//% color=#0fbc11 icon="\uf2db" block="L298ServoUltra"
namespace L298ServoUltra {

    /**
     * Kør motor A fremad med angiven hastighed (0-1023)
     */
    //% block="Motor A fremad med hastighed %speed"
    //% speed.min=0 speed.max=1023
    export function motorAFrem(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
    }

    /**
     * Kør motor A baglæns med angiven hastighed (0-1023)
     */
    //% block="Motor A baglæns med hastighed %speed"
    //% speed.min=0 speed.max=1023
    export function motorABaglæns(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
    }

    /**
     * Stop motor A
     */
    //% block="Stop motor A"
    export function stopMotorA(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }

    /**
     * Kør motor B fremad med angiven hastighed (0-1023)
     */
    //% block="Motor B fremad med hastighed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBFrem(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Kør motor B baglæns med angiven hastighed (0-1023)
     */
    //% block="Motor B baglæns med hastighed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBBaglæns(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P8, speed)
    }

    /**
     * Stop motor B
     */
    //% block="Stop motor B"
    export function stopMotorB(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }

    /**
     * Drej servo til bestemt vinkel (0-180 grader)
     */
    //% block="Drej servo til %vinkel grader"
    //% vinkel.min=0 vinkel.max=180
    export function drejServo(vinkel: number): void {
        pins.servoWritePin(AnalogPin.P1, vinkel)
    }

    /**
     * Mål afstand i cm med HC-SR04 (P16 trigger, P10 echo)
     */
    //% block="Mål afstand i cm"
    export function målAfstand(): number {
        basic.clearScreen()
        led.enable(false)
        
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone)
        pins.digitalWritePin(DigitalPin.P16, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P16, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P16, 0)

        const tid = pins.pulseIn(DigitalPin.P10, PulseValue.High)
        const afstand = tid / 58
        return Math.round(afstand)
    }
}

