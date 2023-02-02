function deFront(str) {
  let temp = "";
  if (str.charAt(0) == "a") temp += "a";
  if (str.charAt(1) == "b") temp += "b";

  return temp + str.substring(2);
}
