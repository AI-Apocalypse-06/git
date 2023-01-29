function hasBad(str) {
  for (let i = 0; i < 2; i++) {
    return str.substring(i, i + 3) == "bad";
  }
}
