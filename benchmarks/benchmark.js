const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e7;

const a = 1;
const b = 2;

const add = (x, y) => x + y;

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  add(a, b);
}

// 🔚 EXERCISE

performance.mark('end');

console.log(performance.measure('My Special Benchmark', 'start', 'end'), '1');

// console.log(performance.getEntriesByName('My Special Benchmark'));
