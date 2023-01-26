function front3(str) {
  let a = str.substring(0, 3);

  if (str.length >= 3) return a + a + a;
  else return str + str + str;
}
