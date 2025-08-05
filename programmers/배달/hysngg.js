function solution(N, road, K) {
    
    const townMap = {};
    for (const [a, b, c] of road) {
        if (!townMap[a]) townMap[a] = [];
        if (!townMap[b]) townMap[b] = [];
        townMap[a].push({ to: b, time: c });
        townMap[b].push({ to: a, time: c });
    }
    
    const roadTime = Array(N + 1).fill(Infinity);
    
    roadTime[1] = 0
    
    const willVisit = [{to:1, time: 0}]
    
    while(willVisit.length !== 0){
        const curr = willVisit.shift()
        if(roadTime[curr.to] < curr.time) continue
        
        for(const nextTown of townMap[curr.to] || []){
            const nextTime = curr.time + nextTown.time
            if(nextTime < roadTime[nextTown.to]){
                roadTime[nextTown.to] = nextTime
                willVisit.push({ to: nextTown.to, time: nextTime })
            }           
        }
    }

    return roadTime.filter((time) => time <= K).length;
}
