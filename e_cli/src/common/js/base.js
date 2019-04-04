window.onresize = function () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth * 100 / 720 + 'px'
}
window.onload = function () {
  window.onresize()
}
window.onresize()
