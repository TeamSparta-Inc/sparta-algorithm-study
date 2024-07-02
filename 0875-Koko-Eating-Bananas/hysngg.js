/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */



var minEatingSpeed = function(piles, h) {

    const canEatInSpeed = (k) => {
        const totalHours = piles.reduce((hours, bananas) => hours + Math.ceil(bananas / k), 0);
        return totalHours <= h;
    }

    let left = 0
    let right = Math.max(...piles)

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatInSpeed(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};
