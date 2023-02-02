function startWord(str, word) {
  if (
    str.substring(0, word.length) === word ||
    str.substring(1, word.length) === word.substring(1)
  )
    return str.substring(0, word.length);
  else return "";
}
