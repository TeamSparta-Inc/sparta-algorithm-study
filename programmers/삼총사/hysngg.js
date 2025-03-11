function solution(number) {
    const answer = {};
    
    for(let i=0; i<number.length; i++){
        for(let j=i; j<number.length; j++){
            for(let k=j; k<number.length; k++){
                if((i !== j && i !== k && k !== j) && number[i] + number[j] + number[k] === 0){
                    answer[`${i} + ${j} + ${k}`] = 1
                }
            }
        }
    }    
    
    return Object.values(answer).length;
}
