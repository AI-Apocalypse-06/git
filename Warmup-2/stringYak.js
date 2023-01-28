function stringYak(str) {
  let temp = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (i + 2 < len && str.charAt(i) == "y" && str.charAt(i + 2) == "k") {
      i += 2;
    } else {
      temp += str.charAt(i);
    }
  }
  return temp;
}
