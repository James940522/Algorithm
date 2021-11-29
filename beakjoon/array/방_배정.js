let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

console.log(input)

const num = input.shift().split(" ").map(el => Number(el))

let boy1, boy2, boy3, boy4, boy5, boy6 = 0;

let girl1, girl2, girl3, girl4, girl5, girl6 = 0;

input.forEach(el => {
    if (el[0] === '1') {
        if(el[1] === '1') {

            

        } 
    } else if (el[0] === '0') {
        girl++;
    }
})

let room = 0;

if( boy%num[1] > 0) {
    room++;
}

if( girl%num[1] > 0) {
    room++;
}

room = room + Math.floor(boy/2) + Math.floor(girl/2)

console.log(room)


// console.log(boy, girl)

// const girl


// const room = new Array()

// console.log(room)

// for (let i = 0; i < student.length; i++) {

//     room.push(student[i])

// }



// console.log(student)

