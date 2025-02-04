function createCounter(n: number): () => number {
    let count = 0

    return function() {
        count += 1;
        return n + count - 1;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */