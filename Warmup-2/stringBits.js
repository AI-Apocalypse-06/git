function stringBits(str) {
  let temp = "";
  for (let i = 0; i <= str.length; i += 2) {
    temp += str.charAt(i);
  }
  return temp;
}
