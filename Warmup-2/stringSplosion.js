function stringSplosion(str) {
  let temp = "";
  for (let i = 0; i <= str.length; i++) {
    temp += str.substring(0, i);
  }
  return temp;
}
