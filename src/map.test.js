import { map } from "./map.js";

test("return an array of numbers which are the length of each string", () => {
    expect(map(["hello", "hi", "goodbye"],string => string.length )).toEqual([5,2,7]);
});

test("should return synax error ", () => {
    expect(map([75, 66, 6],string => string.length )).toEqual([undefined,undefined,undefined]);
});