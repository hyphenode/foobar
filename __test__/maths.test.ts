import { addTwo } from "../src/maths";

describe("testing the maths module", () => {
    it("should add two numbers", () => {
        const result = addTwo(1, 2);
        expect(result).toBe(3);
    });
});