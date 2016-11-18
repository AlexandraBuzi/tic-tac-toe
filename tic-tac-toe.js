// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = "protaganist"
function circle1() {
  if(turn=="protaganist"){
  var stepone = document.createElementNS(namespace, "circle")
  stepone.setAttribute("cx",230 )
  stepone.setAttribute("cy",90 )
  stepone.setAttribute("r", 20)
  stepone.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepone)
  turn="antagonist"
} else {
  var stepone = document.createElementNS(namespace, "circle")
  stepone.setAttribute("cx",230 )
  stepone.setAttribute("cy",90 )
  stepone.setAttribute("r", 20)
  stepone.setAttribute("fill","#ffcc66")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepone)
}
}

function circle2() {
  if(turn=="protagonist"){
    var step2 = document.createElementNS(namespace, "circle")
    step2.setAttribute("cx",90)
    step2.setAttribute("cy",90)
    step2.setAttribute("r",20)
    step2.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step2)
    turn = "protagonist"
  } else {
    var step2 = document.createElementNS(namespace, "circle")
    step2.setAttribute("cx",90)
    step2.setAttribute("cy",90)
    step2.setAttribute("r",20)
    step2.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step2)
  }
}
