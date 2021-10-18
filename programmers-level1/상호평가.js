function calculateRank(avg) {
    // 평균값을 받아 학점을 반환하는 함수
    if(avg >= 90){
       return 'A'
    }else if(avg < 90 && avg >= 80){
       return 'B'
    }else if(avg < 80 && avg >= 70){
       return 'C'
    }else if(avg < 70 && avg >= 50){
       return 'D'
    }else{
       return 'F'
    }
}

function solution(scores) {
  // 최종 결과를 담을 변수
  let result = '';
  
  for(let i = 0; i < scores.length; i++) {
      // 총합 변수
    let sum = 0;
      // 최소값 변수
    let min = 101;
      // 최대값 변수
    let max = -1;
      // 평균값 변수
    let avg = 0;
    
    for (let j=0; j < scores[i].length; j++){
        //학생의 점수는 열(j)이기에 [열][행]으로 값을 가져온다.
        //max값과 min값을 추출하기 위해서 매번 확인해줌
      max = Math.max(max, scores[j][i])
      min = Math.min(min, scores[j][i])
        //모든 점수를 더한다.
      sum += scores[j][i];
    }
      //최소값 최대값의 개수를 확인하기 위한 변수
  let maxCount = 0;
  let minCount = 0;
  
  for(let j=0; j < scores[i].length; j++) {
    if(scores[j][i] === max) {
        //현재 점수가 최대점수라면 최대점수 카운트 +1
      maxCount++;
    }else if(scores[j][i] === min) {
        //현재 점수가 최소점수라면 최소점수 카운트 +1
      minCount++;
    }
  }

    if ((maxCount === 1 && max === scores[i][i]) || 
        (minCount === 1 && min === scores[i][i])) {
       //만약에 최대값 최소값이 1인 상황에서 
      //최대값 최소값이 자신에게 준 점수일 경우에는 
      //그 값을 빼고 평균점수를 계산한다.  
      sum -= scores[i][i];
      avg = sum / (scores.length-1)
    } else {
      avg = sum / scores.length;
    }
      //학점 변환 함수를 호출하여 평균점수를 학점으로 변환
    const grade = calculateRank(avg)
      //최종 결과 변수에 하나씩 추가한다.
    result += grade
  }
  return result
}