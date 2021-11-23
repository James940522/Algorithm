function solution(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let answer = max + min;

    if(max === min) {
        return max
    }

    for ( let i = min+1; i < max; i++ ) {

        answer = answer + i ;

    }

    return answer

}
