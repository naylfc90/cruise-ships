//test file
const Ship = require("../src/ship");

describe("Ship constructor", () => {
    it("returns an object", () => {
      expect(new Ship("Albert Dock")).toBeInstanceOf(Object);
    });
    it("checks the object has a startingPort property", () => {
        const ship = new Ship("Albert Dock");
        expect(ship.startingPort).toEqual("Albert Dock");
      });
});