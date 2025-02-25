function map<T, U>(arr: T[], fn: (value: T, index: number) => U): U[] {
  const result = new Array<U>(arr.length);
  
  arr.forEach((value, index) => {
    result[index] = fn(value, index);
  });
  
  return result;
}