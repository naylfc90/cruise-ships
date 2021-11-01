//Ship src file
class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    };

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];

        // if (this.currentPort === itinerary.ports.length) {
        //     throw new Error("End of itinerary reached");
        // }
    }
}

module.exports = Ship;