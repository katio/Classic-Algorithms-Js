const { performance } = require('perf_hooks');

function measureFunction(functionToMeasure, iterations){
  const times = [];
  for (let i = 1; i <= iterations; i++) {
    const t0 = performance.now();
    functionToMeasure();
    const t1 = performance.now();
    times.push(t1 - t0);
  }

  const sum = times.reduce((accum, curr) => {
    return accum + curr;
  }, 0);

  const first = times[0];
  const average = sum / times.length;
  const last = times[times.length - 1];

  console.table({ function: functionToMeasure.name, first, average, last });
}

module.exports = measureFunction;
