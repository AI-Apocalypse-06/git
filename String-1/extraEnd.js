function extraEnd(str) {
  let a = str.substring(str.length - 2);
  if (str.length > 2) {
    return a + a + a;
  } else return str + str + str;
}
