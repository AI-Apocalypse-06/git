function doubleX(str) {
  let idx = str.indexOf("x");
  if (idx >= 0 && idx < str.length - 1) {
    return str.charAt(idx + 1) == "x";
  }

  return false;
}
