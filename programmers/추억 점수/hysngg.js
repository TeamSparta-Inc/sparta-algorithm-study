function solution(name, yearning, photo) {
    const nostal = {}
    
    const answer = []
    
    for(let i=0; i<name.length; i++){
        nostal[name[i]] = yearning[i]
    }
    
    for(let i=0; i<photo.length; i++){
        let sum = 0
        for(j=0; j<photo[i].length; j++){
            const name = photo[i][j]
            const score = nostal[name]
            sum += score ? score : 0
        }
        answer[i] = sum
    }
    
    
    return answer;
}
