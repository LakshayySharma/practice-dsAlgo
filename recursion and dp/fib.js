function fib(n, cache = {}) {
  if (n == 0 || n == 1) return n;

  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
}

console.log(fib(10));
