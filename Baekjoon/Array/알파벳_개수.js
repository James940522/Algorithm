let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");
['b a e k j o o n']
input = input[0].split('')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const result = new Array(26).fill(0)

input.forEach(el => result[alphabet.indexOf(el)]++)

console.log(result.join(" "))
