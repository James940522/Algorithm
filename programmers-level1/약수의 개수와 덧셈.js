function solution(left, right) {
    let count = 0;
    let result = 0;
        
    for (let j = left; j <= right; j++ ){
      count = 0;
      for(let i = 1; i <= j; i++){
        if (j%i===0){
            count ++;
        }
        if (i === j){
         if(count%2 === 0){
          result += j;
         }
         else{
         result -= j;
         }
        }
      }
    }
     return result;
    }