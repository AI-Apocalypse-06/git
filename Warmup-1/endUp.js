function endUp(str) {
  let a = str.substring(str.length - 3, str.length);
  if (str.length > 3) return str.substring(0, str.length - 3) + a.toUpperCase();
  else return str.toUpperCase();
}
