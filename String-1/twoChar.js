function twoChar(str, index) {
  if (str.length - 1 <= index || index < 0) {
    return str.substring(0, 2);
  }
  return str.substring(index, index + 2);
}
