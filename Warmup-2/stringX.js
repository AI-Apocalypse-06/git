function stringX(str) {
  let temp = "";
  let front = str.charAt(0);
  let end = str.charAt(str.length - 1);
  for (let i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== "x") temp += str.charAt(i);
  }
  return front + temp + end;
}
