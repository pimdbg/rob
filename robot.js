/**
 * @class Robot
 */

module.exports = class Robot {
    runsManual = false;

    constructor() {
        console.log('Robot is running');
    }

    moveForward() {
        console.log('Moving forward');
    }
    moveBackwards() {
        console.log('Moving backward');
    }
    moveLeft() {
        console.log('Moving left');
    }
    moveRight() {
        console.log('Moving right');
    }
}