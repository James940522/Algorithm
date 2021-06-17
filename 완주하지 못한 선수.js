function solution(participant, completion) {
    
    completion.sort();
    participant.sort();
    
    for (let i = 0; i < participant.length; i++ ){
        if (participant[i] !== completion[i]){
            return participant[i]
        }
    }
}