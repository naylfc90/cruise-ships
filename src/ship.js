//Ship src file
class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
        
        //making sure we cannot sail past the itinerary
        if (currentPortIndex === (itinerary.ports.length - 1)) {
            throw new Error("End of itinerary reached");
        }

        this.previousPort = this.currentPort;
        this.previousPort.removeShip(this);
        this.currentPort = null;
    };

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
}

module.exports = Ship;