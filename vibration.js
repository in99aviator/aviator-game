function vibrate(duration = 200) {
  if ("vibrate" in navigator) navigator.vibrate(duration);
}