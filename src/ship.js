//Ship src file
class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    }

    setSail() {
        return this.hasSetSail = true;
    };

    dock(port) {
        this.currentPort = port;
    }
}

module.exports = Ship;