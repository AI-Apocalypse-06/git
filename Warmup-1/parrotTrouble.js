function parrotTrouble(talking, hour) {
  if (talking == false) return false;
  else if (hour > 20 || hour < 7) return true;
  else return false;
}
