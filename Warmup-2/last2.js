function last2(str) {
  let end = str.substring(str.length - 2);
  let count = 0;
  for (let i = 0; i <= str.length - 3; i++) {
    if (str.charAt(i) + str.charAt(i + 1) == end) {
      count++;
    }
  }
  return count;
}
