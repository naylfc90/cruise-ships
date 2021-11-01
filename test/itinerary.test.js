//Itinerary test file
const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("Itinerary", () => {
    it("returns an object", () => {
      expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it("returns the ports in the itinerary", () => {
        const itinerary = new Itinerary("Albert Dock");
        expect(itinerary.ports).toEqual("Albert Dock");
    });
    it("returns the ports in the itinerary using Ports class", () => {
        const albertDock = new Port("Albert Dock");
        const isleOfMan = new Port("Isle of Man");

        const itinerary = new Itinerary([albertDock, isleOfMan]);
        expect(itinerary.ports).toEqual([albertDock, isleOfMan]);
    });
});