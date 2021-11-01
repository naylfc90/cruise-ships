//Ship test file
const Ship = require("../src/ship");
const Port = require("../src/port");

describe("Ship", () => {
    it("returns an object", () => {
      expect(new Ship("Albert Dock")).toBeInstanceOf(Object);
    });
    it("checks the object has a startingPort property", () => {
        const ship = new Ship("Albert Dock");
        expect(ship.currentPort).toEqual("Albert Dock");
    });
    it("checks the ship has not set sail without captains approval", () => {
      const ship = new Ship("Albert Dock");
      expect(ship.hasSetSail).toBeFalsy();
    });
    it("checks the ship has set sail", () => {
      const ship = new Ship("Albert Dock");
      ship.setSail();
      expect(ship.hasSetSail).toBeTruthy();
    });
    it("checks that ship object can be created with port object", () => {
      const isleOfMan = new Port("Isle of Man");
      const ship = new Ship(isleOfMan);
      expect(ship.currentPort).toEqual(isleOfMan);
    });
    it("checks the ship has docked at a new port", () => {
      const ship = new Ship("Albert Dock");
      ship.dock("Isle of Man");
      expect(ship.currentPort).toEqual("Isle of Man");
    });
    it("checks the ship has docked at a new port after being created using Port object", () => {
      const isleOfMan = new Port("Isle of Man");
      const ship = new Ship(isleOfMan);
      ship.dock("Albert Dock");
      expect(ship.currentPort).toEqual("Albert Dock");
    });
});