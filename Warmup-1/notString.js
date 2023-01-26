function notString(str) {
  if (str.length >= 3) {
    if (str.substring(0, 3) == "not") return str;
    else return "not " + str;
  } else return "not " + str;
}
