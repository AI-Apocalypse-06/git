function delDel(str) {
  if (str.substring(1, 4) == "del") return str.charAt(0) + str.substring(4);
  else return str;
}
