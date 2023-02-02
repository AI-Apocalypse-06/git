function catDog(str) {
  let dogc = 0;
  let catc = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) + str.charAt(i + 1) + str.charAt(i + 2) == "cat") {
      catc++;
    } else if (str.charAt(i) + str.charAt(i + 1) + str.charAt(i + 2) == "dog") {
      dogc++;
    }
  }
  return dogc == catc;
}
