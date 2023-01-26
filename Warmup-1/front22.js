function front22(str) {
  let a = str.substring(0, 2);
  if (str.length > 2) return a + str + a;
  else return str + str + str;
}
