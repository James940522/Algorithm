// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result

    const sortedA = A.sort((a, b) => a- b) 

    const max = Math.max(...sortedA)

    if(max < 1){
        return 1
    } else {
        
    for (let i = 1; i<sortedA.length; i++){
        if(i === sortedA.length-1){
            result = sortedA[i]+1
        }

        if(sortedA.indexOf(i) !== -1){
            continue
        }else {
            result = i
            break
        }
    }
    }
    return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]))