/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const test = 'Hello World'
    
    return function(...args) {
        return test
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */