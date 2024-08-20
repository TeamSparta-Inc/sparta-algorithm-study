function minCostClimbingStairs(cost: number[]): number {
    const size = cost.length;

    for (let i = 2; i < size; i += 1) {
        cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[size - 1], cost[size - 2])
};