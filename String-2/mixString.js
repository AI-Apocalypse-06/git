function mixString(a, b) {
  let temp = "";
  for (let i = 0; i <= (a > b ? a.length : b.length) + 1; i++) {
    temp += a.charAt(i) + b.charAt(i);
  }
  return temp;
}
