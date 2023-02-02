function doubleChar(str) {
  let temp = "";
  for (let i = 0; i <= str.length; i++) {
    temp += str.charAt(i) + str.charAt(i);
  }
  return temp;
}
