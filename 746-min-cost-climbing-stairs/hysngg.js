/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [cost[0], cost[1]]

    for(let i=2; i<cost.length; i++){
        dp[i] = dp[i-2] < dp[i-1] ? dp[i-2] + cost[i] : dp[i-1] + cost[i]
    }

    const lastElement = dp[dp.length - 1];
    const secondLastElement = dp[dp.length - 2];

    return Math.min(lastElement, secondLastElement);
};
