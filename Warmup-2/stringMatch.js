function stringMatch(a, b) {
  let min = a.length > b.length ? b.length : a.length;
  let count = 0;
  for (let i = 0; i < min - 1; i++) {
    if (a.charAt(i) == b.charAt(i) && a.charAt(i + 1) == b.charAt(i + 1)) {
      count++;
    }
  }
  return count;
}
