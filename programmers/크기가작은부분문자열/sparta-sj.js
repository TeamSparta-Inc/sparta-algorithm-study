function solution(t, p) {
    const pNumber = Number(p);
    const pLength = p.length;
    const end = t.length - p.length;
    let result = 0;
    
    for (let i = 0; i <= end; i++) {
        const currentString = t.slice(i, i + pLength);
        
        if (currentString.length === pLength && pNumber >= Number(currentString)) result++;
    }
    
    return result;
}
