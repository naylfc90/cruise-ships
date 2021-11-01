//Ship test file
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");
const Ship = require("../src/ship");

describe("Port", () => {
    it("returns an object", () => {
      expect(new Port("Albert Dock")).toBeInstanceOf(Object);
    });
    it("checks that ships can be added to the port", () => {
      const port = new Port("Albert Dock");
      const itinerary = new Itinerary(port);
      const ship = new Ship(itinerary);
      port.addShip(ship);
      expect(port.ships).toContain(ship);
    });
    it("checks that ships can be removed from the port", () => {
      const port = new Port("Albert Dock");
      const itinerary = new Itinerary([port]);
      const ship = new Ship(itinerary);
      const shipTwo = new Ship(itinerary);
      port.addShip(ship);
      port.addShip(shipTwo);
      port.removeShip(ship);
      expect(port.ships).toContain(shipTwo);
    });
});