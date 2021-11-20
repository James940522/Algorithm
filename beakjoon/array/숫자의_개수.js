let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

input = `${input[0] * input[1] * input[2]}`

const num = '0123456789'

const result = new Array(10).fill(0)

for (let i = 0; i < input.length; i++) {
    
    result[num.indexOf(input[i])]++
    
}
console.log(result.join("\n"))


//"/dev/stdin"