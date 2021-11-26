let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

let count = 0;

const len = input.shift();

const result = input.pop()

input = input[0].split(" ")

input.forEach(el => {
    if( el === result) {
        count ++;
    }
})

console.log(count)