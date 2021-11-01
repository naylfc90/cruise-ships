//Ship test file
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
    it("returns an object", () => {
      const port = new Port("Albert Dock");
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);
      expect(ship).toBeInstanceOf(Object);
    });
    it("checks the object has a currentPort property", () => {
        const albertDock = new Port("Albert Dock");
        const isleOfMan = new Port("Isle of Man");
        const itinerary = new Itinerary([albertDock, isleOfMan]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toEqual(albertDock);
    });
    it("checks the ship has set sail", () => {
      const albertDock = new Port("Albert Dock");
      const isleOfMan = new Port("Isle of Man");
      const itinerary = new Itinerary([albertDock, isleOfMan]);
      const ship = new Ship(itinerary);

      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
    });
    it("checks the ship has docked at a new port", () => {
      const albertDock = new Port("Albert Dock");
      const isleOfMan = new Port("Isle of Man");
      const itinerary = new Itinerary([albertDock, isleOfMan]);
      const ship = new Ship(itinerary);
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toEqual(itinerary.ports[1]);
    });
    it("ship cannot sail further than its itinerary", () => {
      const albertDock = new Port("Albert Dock");
      const isleOfMan = new Port("Isle of Man");
      const itinerary = new Itinerary([albertDock, isleOfMan]);
      const ship = new Ship(itinerary);
    
      ship.setSail();
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
});