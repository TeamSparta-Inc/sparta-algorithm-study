const nearestExit = (maze: string[][], [y0, x0]: [number, number]): number => {
    const rows = maze.length;
    const cols = maze[0].length;


    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[y0][x0] = true;


    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // 상, 좌, 하, 우
    const queue: [number, number, number][] = [[y0, x0, 0]];
    let pointer = 0;

    while (pointer < queue.length) {
        const [y, x, step] = queue[pointer++];

        if ((y === 0 || y === rows - 1 || x === 0 || x === cols - 1) && step > 0) {
            return step;
        }

        for (const [dy, dx] of directions) {
            const ny = y + dy, nx = x + dx;

            if (ny >= 0 && ny < rows && nx >= 0 && nx < cols && maze[ny][nx] === '.' && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx, step + 1]);
            }
        }
    }

    return -1;
};