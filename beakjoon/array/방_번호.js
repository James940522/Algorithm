let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = `${input[0]}`

const set = '0123456789'

const result = new Array(10).fill(0)

for (let i = 0; i < input.length; i++) {

    result[set.indexOf(input[i])]++

    if( i+1 === input.length ) {
        result[6] = (result[6]/2)
        result[9] = (result[9]/2)
    }

}

console.log(Math.max(...result))

