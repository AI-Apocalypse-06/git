function max1020(a, b) {
  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (a >= 10 && a <= 20) return a;
  if (b >= 10 && b <= 20) return b;
  return 0;
}
