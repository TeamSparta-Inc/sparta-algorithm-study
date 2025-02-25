interface Counter {
  increment(): number;
  decrement(): number;
  reset(): number;
}

const createCounter = (init: number = 0): Counter => {
  let count: number = init;

  const increment = () => {
    return ++count;
  };

  const decrement = () => {
    return --count;
  };

  const reset = () => {
    count = init;
    return count;
  };

  return { increment, decrement, reset };
};

const counter: Counter = createCounter(5);