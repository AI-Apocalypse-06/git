function stringE(str) {
  let result = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) == "e") result++;
  }
  if (result > 3 || result < 1) return false;
  else return true;
}
