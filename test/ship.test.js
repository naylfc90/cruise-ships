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
    it("checks the object has a startingPort property", () => {
        const port = new Port("Albert Dock");
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toEqual(port);
    });
    it("checks the ship has not set sail without captains approval", () => {
      const port = new Port("Albert Dock");
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);
      expect(ship.setSail()).toBeFalsy();
    });
    it("checks the ship has set sail", () => {
      const port = new Port("Albert Dock");
      const itinerary = new Itinerary([port]);
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
    xit("ship cannot sail further than its itinerary", () => {
      const albertDock = new Port("Albert Dock");
      const isleOfMan = new Port("Isle of Man");
      const itinerary = new Itinerary([albertDock, isleOfMan]);
      const ship = new Ship(itinerary);
    
      ship.setSail();
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
    // xit("checks the ship has docked at a new port after being created using Port object", () => {
    //   const isleOfMan = new Port("Isle of Man");
    //   const ship = new Ship(isleOfMan);
    //   ship.dock("Albert Dock");
    //   expect(ship.currentPort).toEqual("Albert Dock");
    // });
    // xit("checks the ship has set sailed by showing previous port", () => {
    //   const albertDock = new Port("Albert Dock");
    //   const ship = new Ship(albertDock);
    //   ship.setSail();
    //   expect(ship.previousPort).toEqual(albertDock);
    // });
    // xit("checks the ship object can be created with Itinerary class", () => {
    //   const albertDock = new Port("Albert Dock");
    //   const isleOfMan = new Port("Isle of Man");
    //   const ship = new Ship([albertDock, isleOfMan]);
    //   expect(ship.currentPort).toEqual([albertDock, isleOfMan]);
    // });
});