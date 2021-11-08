//Itinerary test file
const Itinerary = require("../src/itinerary");
const Port = require("../src/port");
const Ship = require("../src/ship");

describe("Itinerary", () => {
    describe("constructor", () => {
        let albertDock;
        let isleOfMan;
        let itinerary;
        let ship;
        beforeEach(() => {
          albertDock = new Port("Albert Dock");
          isleOfMan = new Port("Isle of Man");
          itinerary = new Itinerary([albertDock, isleOfMan]);
          ship = new Ship(itinerary);
        });
        it("returns an object", () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
        });
        it("returns the ports in the itinerary", () => {
            expect(itinerary.ports).toEqual([albertDock, isleOfMan]);
        });
    });
});