function everyNth(str, n) {
  let temp = "";
  for (let i = 0; i <= str.length; i += n) {
    temp += str.charAt(i);
  }
  return temp;
}
