function solution(participant, completion) {
    const hash = {};
    
    participant.forEach(p => {
        hash[p] = hash[p] ? hash[p] + 1 : 1;
    })

    completion.forEach(c => {
        hash[c] -= 1;
    })
    
    const hashKeys = Object.keys(hash);
    for (let i = 0; i < hashKeys.length; i++) {
        const key = hashKeys[i];
        if (hash[key] > 0) return key;
    }
}
