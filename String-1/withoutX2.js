function withoutX2(str) {
  let temp = "";
  if (str.charAt(0) !== "x") temp += str.charAt(0);
  if (str.charAt(1) !== "x") temp += str.charAt(1);
  return temp + str.substring(2);
}
