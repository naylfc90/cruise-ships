//Ship test file
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  describe("constructor", () => {
    let albertDock;
    let isleOfMan;
    let itinerary;
    let ship;
    beforeEach(() => {
      albertDock = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Albert Dock",
        ships: []
      };
      isleOfMan = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Isle of Man",
        ships: []
      };
      itinerary = new Itinerary([albertDock, isleOfMan]);
      ship = new Ship(itinerary);
    });
    it("returns an object", () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it("checks the object has a currentPort property", () => {
      expect(ship.currentPort).toEqual(albertDock);
    });
    it("checks the ship has set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(albertDock.removeShip).toHaveBeenCalledWith(ship);
    });
    it("checks the ship has docked at a new port", () => {
      ship.setSail();
      ship.dock();
      
      expect(ship.currentPort).toBe(isleOfMan);
      expect(albertDock.addShip).toHaveBeenCalledWith(ship);
    });
    it("ship cannot sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();
    
      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
    it("checks that ship has been added to port on creation", () => {
      expect(albertDock.addShip).toHaveBeenCalledWith(ship);
    });
  });
});