function countXX(str) {
  let counter = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) + str.charAt(i + 1) == "xx") {
      counter++;
    }
  }
  return counter;
}
