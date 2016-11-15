// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function circle1() {
  var stepone = document.createElementNS(namespace, "circle")
  stepone.setAttribute("cx",230 )
  stepone.setAttribute("cy",90 )
  stepone.setAttribute("r", 20)
  stepone.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepone)
}
}
function circle2() {
  var stepthree = document.createElementNS(namespace, "circle")
  stepthree.setAttribute("cx",90 )
  stepthree.setAttribute("cy",90)
  stepthree.setAttribute("r", 20)
  stepthree.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepthree)
}
function circle3() {
  var stepfour = document.createElementNS(namespace, "circle")
  stepfour.setAttribute("cx",160)
  stepfour.setAttribute("cy",160)
  stepfour.setAttribute("r", 20)
  stepfour.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepfour)
}
function circle4() {
  var stepfive = document.createElementNS(namespace, "circle")
  stepfive.setAttribute("cx",230)
  stepfive.setAttribute("cy",230)
  stepfive.setAttribute("r", 20)
  stepfive.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepfive)
}
function circle5() {
  var stepsix = document.createElementNS(namespace, "circle")
  stepsix.setAttribute("cx",90)
  stepsix.setAttribute("cy",230)
  stepsix.setAttribute("r", 20)
  stepsix.setAttribute("fill", "#ffcccc")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepsix)
}

function square1() {
  var squareone = document.createElementNS(namespace,"rect")
  squareone.setAttribute("width",10)
  squareone.setAttribute("height",10)
  squareone.setAttribute("x",130)
  squareone.setAttribute("y",60)
  squareone.setAttribute("fill","orange")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(squareone)
}
