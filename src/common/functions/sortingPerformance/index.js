const { performance } = require('perf_hooks');

exports.sortingPerformace = (func, list, ...rest) => {
  const times = [];

  for (let i = 1; i <= 10000; i++) {
    const copy = [...list];
    const parameters = [copy, ...rest];
    const t0 = performance.now();
    func.apply(null, parameters);
    const t1 = performance.now();
    times.push(t1 - t0);
  }

  const sum = times.reduce((accum, curr) => {
    return accum + curr;
  }, 0);

  const first = times[0];
  const average = sum / times.length;
  const last = times[times.length - 1];

  console.table({ first, average, last });
};
