/**
 * Control keyestudio servoCar
 * author: jieliang mo
 * github:https://github.com/mworkfun
 * Write the date: 2020-5-27
 */

//% color="#ff6800" icon="\uf1b9" 
//% groups='["Car", "Servo", "Configuration"]'
namespace ServoCar {

    //% fixedInstances
    export class Servo {
        private _minAngle: number;
        private _maxAngle: number;

        constructor() {
            this._minAngle = 0;
            this._maxAngle = 180;
        }

        private clampDegrees(degrees: number): number {
            degrees = degrees | 0;
            degrees = Math.clamp(this._minAngle, this._maxAngle, degrees);
            return degrees;
        }

        /**
         * Set the servo angle
         */
        //% weight=100 help=servos/set-angle
        //% blockId=servoservosetangle block="set %servo angle to %degrees=protractorPicker °"
        //% degrees.defl=90
        //% servo.fieldEditor="gridpicker"
        //% servo.fieldOptions.width=220
        //% servo.fieldOptions.columns=2
        //% parts=microservo trackArgs=0
        //% group="Servo"
        setAngle(degrees: number) {
            degrees = this.clampDegrees(degrees);
            this.internalSetAngle(degrees);
        }

        protected internalSetAngle(angle: number): void {

        }

        /**
         * Gets the minimum angle for the servo
         */
        public get minAngle() {
            return this._minAngle;
        }

        /**
         * Gets the maximum angle for the servo
         */
        public get maxAngle() {
            return this._maxAngle;
        }

    }

    export class PinServo extends Servo {
        private _pin: PwmOnlyPin;

        constructor(pin: PwmOnlyPin) {
            super();
            this._pin = pin;
        }

        protected internalSetAngle(angle: number): void {
            this._pin.servoWrite(angle);
        }

        InternalSetAngle(angle: number): void {
            this._pin.servoWrite(angle);
        }
    }
}
