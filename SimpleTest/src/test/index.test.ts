import { it, describe, test, expect } from "@jest/globals";
import { sum } from "../index";


describe("Testing Sum", () => {
    it("should 1+2 be equal to", ()=>{
        expect(sum(1,2)).toBe(3);
    })
})