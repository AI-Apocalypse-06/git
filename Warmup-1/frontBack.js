function frontBack(str) {
  let front = str.charAt(0);
  let back = str.charAt(str.length - 1);
  let center = str.substring(1, str.length - 1);

  if (str.length > 1) return back + center + front;
  else return str;
}
