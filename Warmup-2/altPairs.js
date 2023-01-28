function altPairs(s) {
  let t = "";
  let l = s.length;
  if (l > 2) {
    for (let i = 0; i < l; i += 4) {
      t += s.charAt(i);
      if (i + 1 < l) {
        t += s.charAt(i + 1);
      }
    }
    return t;
  }
  return s;
}
