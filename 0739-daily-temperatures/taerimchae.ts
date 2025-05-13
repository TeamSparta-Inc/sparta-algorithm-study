function dailyTemperatures(temperatures: number[]): number[] {

    const stack = [];
    const result = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
        const j = stack.pop();
        result[j] = i - j;
        }
        stack.push(i);
    }
    
    return result;
};