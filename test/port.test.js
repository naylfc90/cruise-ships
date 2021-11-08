//Port test file
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");
const Ship = require("../src/ship");

describe("Port", () => {
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
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("checks that ships can be added to the port", () => {
      const shipTwo = {};
      albertDock.addShip(shipTwo);
      expect(albertDock.ships).toContain(shipTwo);
    });
    it("checks that ships can be removed from the port", () => {
      const shipTwo = {};
      albertDock.addShip(shipTwo);
      albertDock.removeShip(shipTwo);
      expect(albertDock.ships).toEqual([ship]);
    });
  });
});