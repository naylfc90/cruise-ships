//test file
const Ship = require("../src/ship");

describe("Ship", () => {
    it("returns an object", () => {
      expect(new Ship("Albert Dock")).toBeInstanceOf(Object);
    });
    it("checks the object has a startingPort property", () => {
        const ship = new Ship("Albert Dock");
        expect(ship.startingPort).toEqual("Albert Dock");
    });
    it("checks the ship has not set sail without captains approval", () => {
      const ship = new Ship("Albert Dock");
      expect(ship.hasSetSail).toBeFalsy();
    });
    it("checks the ship has set sail" ,() => {
      const ship = new Ship("Albert Dock");
      ship.setSail();
      expect(ship.hasSetSail).toBeTruthy();
    });
});