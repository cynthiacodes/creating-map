/*
Write a function  called `map` which takes two arguments:

- `inputArray` : an array (of anything)
- `callbackFn`: a function

It should return a new array with the collected results of calling `callbackFn` on every element of `inputArray`.

`callbackFn` should be a function which takes a single argument and returns a transformed value based on that argument.  

(e.g. takes a number and returns its double, or takes a string and returns its length)

map([10, 30, 20],  v => v * 2);
//should return [20, 60, 40]


PSEUDOCODE

input: array of strings
output: array of numbers. 

callbackFunction takes each element in input array and returns its lengths

*/

function map(inputArray, callbackFn){

    let transformedArray = [];

    for(let element of inputArray){

        const transformed = callbackFn(element);

        transformedArray.push(transformed);
    
    }

    return transformedArray;

}

// const outputArray = map(["hello", "hi", "goodbye"],  string => string.length);

// console.log(outputArray);

export { map };
