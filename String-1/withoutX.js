function withoutX(str) {
  let temp = "";
  if (str.length > 1) {
    if (str.startsWith("x") && str.endsWith("x")) {
      return str.substring(1, str.length - 1);
    }
    if (str.endsWith("x")) {
      return str.substring(0, str.length - 1);
    }
    if (str.startsWith("x")) {
      return str.substring(1, str.length);
    }
    return str;
  }
  return "";
}
