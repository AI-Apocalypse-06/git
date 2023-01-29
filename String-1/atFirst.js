function atFirst(str) {
  return str.length > 1
    ? str.substring(0, 2)
    : str.length > 0
    ? str + "@"
    : "@@";
}
