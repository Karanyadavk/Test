import { describe, expect, it } from "vitest"
import request from "supertest"
import { app } from ".."



describe("POST /sum", ()=>{
    it("should return the sum of two numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: 0,
            b: 0
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
    });

    it("should return the sum of two numbers", async() => {
        const res = await request(app).post("/sum").send({
            a: ["slfjasmeiahfoewm"]
        });

        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect Inputs");
    });
})

app.listen(3000);