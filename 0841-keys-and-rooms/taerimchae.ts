function canVisitAllRooms(rooms: number[][]): boolean {
    
    let visited = new Set<number>();
    let stack = [0];
    
    while (stack.length > 0) {
        let room = stack.pop();
        visited.add(room);
        for (let key of rooms[room]) {
            if (!visited.has(key)) {
                stack.push(key);
            }
        }
    }
    
    return visited.size === rooms.length;
};