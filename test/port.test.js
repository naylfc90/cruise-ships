//Ship test file
const Port = require("../src/port");

describe("Port", () => {
    it("returns an object", () => {
      expect(new Port("Albert Dock")).toBeInstanceOf(Object);
    });
});