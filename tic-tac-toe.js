// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function circle1() {
  var stepone = document.createElementNS(namespace, "circle")
  circle1.setAttribute("cx",200 )
  circle1.setAttribute("cy",60 )
  circle1.setAttribute("r", 20)
  circle1.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepone)
}
