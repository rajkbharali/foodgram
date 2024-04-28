import { sum } from "../sum";

test("Gives sum of two variables", ()=>{
    const result = sum(2,3)

    //Assertion
    expect(result).toBe(5)
})