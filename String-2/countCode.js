function countCode(str) {
  let codeCount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str.charAt(i) == "c" &&
      str.charAt(i + 1) == "o" &&
      str.charAt(i + 3) == "e"
    ) {
      codeCount++;
    }
  }
  return codeCount;
}
