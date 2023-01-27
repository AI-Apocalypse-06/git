function frontTimes(str, n) {
  let temp = "";
  for (let i = 1; i < n+1; i++) {
    if (str.length > 3) {
      temp += str.substring(0, 3);
    } else temp += str;
  }
  return temp;
}
