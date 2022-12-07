/**
 * @class Robot
 */

const five = require("johnny-five");
const board = new five.Board();
 
module.exports = class Robot {
    runsManual = false;
    isConnected = false;

    constructor() {
        board.on('ready', function() {
            this.isConnected = true;

            console.log('Robot is running');
        })
    }

    
    pulse(port = 10) {
        try {
            const led = new five.Led(port);

            led.pulse();

            board.wait(1000, () => {
                led.stop().off();
            });
        } catch(e) {
            console.error(e);
        }
    }
    moveForward() {
        this.pulse(10);
        console.log('Moving forward');
    }
    moveBackwards() {
        this.pulse(11);
        console.log('Moving backward');
    }
    moveLeft() {
        this.pulse(3);
        console.log('Moving left');
    }
    moveRight() {
        this.pulse(5);
        console.log('Moving right');
    }
}