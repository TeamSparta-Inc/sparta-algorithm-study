var asteroidCollision = function (asteroids) {
    const res = []
    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]
        const cur = asteroids[i]
        //충돌 안하는경우
        if (!res.length || last < 0 || cur > 0) {
            res.push(cur)
        //절댓값이 같은 경우
        } else if (-cur == last) {
            res.pop()
        //현재가 마지막보다 크면 제거 후 다시 탐색
        } else if (-cur > last) {
            res.pop()
            i--
        }
    }
    return res
};