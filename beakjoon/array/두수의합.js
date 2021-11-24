let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

let count = 0;

const len = input.shift();

console.log(len)

const result = input.pop()

input = input[0].split(" ")

const arr = input.map(el => Number(el)).sort((a, b) => a - b);

console.log(arr)

let left = 0;

let right = arr.length-1;


while ( left < right ) {

    if ( arr[left] + arr[right] === Number(result) ) {
        count ++;
    } 
    
    if ( arr[left] + arr[right] >= Number(result) ) {
        right --;
    }else if ( arr[left] + arr[right] < Number(result) ) {
        left ++;
    }

}


// for (let i = 0; i < len; i++) {

//     // for (let j = 1; j < len; j++) {
//         let j = i + 1;

//         if(!input[j]) {
//             break;
//         }else if (Number(result) === input[i] + input[j]) {
//             count++
//         }

//     // }

// }


console.log(count)
