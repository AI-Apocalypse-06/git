function lastTwo(str) {
  let a = str.substring(0, str.length - 2);
  let b = str.charAt(str.length - 2);
  let c = str.charAt(str.length - 1);
  return a + c + b;
}
