//Port test file
const Port = require("../src/port");

describe("Port", () => {
    it("returns an object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("checks that ships can be added to the port", () => {
      const port = new Port("Albert Dock");
      const ship = {};
      port.addShip(ship);
      expect(port.ships).toContain(ship);
    });
    it("checks that ships can be removed from the port", () => {
      const port = new Port("Albert Dock");
      const ship = {};
      const shipTwo = {};
      port.addShip(ship);
      port.addShip(shipTwo);
      port.removeShip(ship);
      expect(port.ships).toEqual([shipTwo]);
    });
});