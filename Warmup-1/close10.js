function close10(a, b) {
  let s = Math.abs(a - 10);

  let d = Math.abs(b - 10);

  if (s > d) return b;
  else if (d > s) return a;
  else return 0;
}
