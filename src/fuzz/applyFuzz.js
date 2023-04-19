function apply_fuzz(interval, fuzz_factor) {
  //todo:  move to init
  // if (!enable_fuzz || interval < 2.5) return inter;
  if (interval < 2.5) return interval;
  interval = Math.round(interval);
  const min_interval = Math.max(2, Math.round(interval * 0.95 - 1));
  const max_interval = Math.round(interval * 1.05 + 1);
  return Math.floor(
    fuzz_factor * (max_interval - min_interval + 1) + min_interval
  );
}
module.exports = apply_fuzz;
