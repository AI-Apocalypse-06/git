function lastChars(a, b) {
  if (a.length == 0) {
    a = "@";
  }
  if (b.length == 0) {
    b = "@";
  }
  return a.charAt(0) + b.charAt(b.length - 1);
}
