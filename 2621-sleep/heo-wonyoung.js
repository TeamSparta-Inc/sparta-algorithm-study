/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const timeFn = (fn) => setTimeout(fn, millis)
    return new Promise(timeFn)
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */