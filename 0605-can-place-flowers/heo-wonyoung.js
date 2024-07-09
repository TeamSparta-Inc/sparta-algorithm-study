/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // const maxFlower = flowerbed.length % 2 ===0 ? flowerbed.length/2 : Math.round(flowerbed.length/2)
    // const flower = flowerbed.filter(e => e === 1).length

    // return maxFlower-flower === n
    let cnt = 0
    for(let i = 0; i < flowerbed.length ; i++){
        let pre = flowerbed?.[i-1]
        let current = flowerbed[i]
        let next = flowerbed?.[i+1]

        if(pre === undefined && current === 0 && next === 0){
            flowerbed[i] = 1
            cnt +=1
            continue
        }
        if (next === undefined && current === 0 && pre === 0){
            cnt +=1
            break
        }
        if (current === 1 || next === 1 || pre === 1){
            continue
        }
        cnt +=1
        flowerbed[i] = 1
    }
    
    return cnt >= n 
};