var uniqueOccurrences = function(arr) {
    const arrObj ={}
    arr.forEach((arrValue) => {
        if (!arrObj[arrValue]) {
            arrObj[arrValue] = 1;
        } else {
            arrObj[arrValue] += 1;
        }
    })
    const valueArr= []
    for (const [key, value] of Object.entries(arrObj)) {
        valueArr.push(value)
    }
    const valueArrSet = new Set(valueArr)
    return valueArrSet.size === valueArr.length
};