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
  turn="protaganist"
} else {
function circle2() {
  var stepthree = document.createElementNS(namespace, "circle")
  stepthree.setAttribute("cx",90 )
  stepthree.setAttribute("cy",90)
  stepthree.setAttribute("r", 20)
  stepthree.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepthree)
  turn = "antagonist"
} else {
  var stepthree = document.createElementNS(namespace, "circle")
  stepthree.setAttribute("cx",90 )
  stepthree.setAttribute("cy",90)
  stepthree.setAttribute("r", 20)
  stepthree.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepthree)
  turn = "antagonist"
}
function circle3() {
  var stepfour = document.createElementNS(namespace, "circle")
  stepfour.setAttribute("cx",160)
  stepfour.setAttribute("cy",160)
  stepfour.setAttribute("r", 20)
  stepfour.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepfour)
}
function circle4() {
  var stepfive = document.createElementNS(namespace, "circle")
  stepfive.setAttribute("cx",230)
  stepfive.setAttribute("cy",230)
  stepfive.setAttribute("r", 20)
  stepfive.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepfive)
}
function circle5() {
  var stepsix = document.createElementNS(namespace, "circle")
  stepsix.setAttribute("cx",90)
  stepsix.setAttribute("cy",230)
  stepsix.setAttribute("r", 20)
  stepsix.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepsix)
}
function circle6() {
  var stepseven = document.createElementNS(namespace, "circle")
  stepseven.setAttribute("cx",160)
  stepseven.setAttribute("cy",90)
  stepseven.setAttribute("r",20)
  stepseven.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepseven)
}
function circle7() {
  var step8 = document.createElementNS(namespace, "circle")
  step8.setAttribute("cx",90)
  step8.setAttribute("cy",160)
  step8.setAttribute("r",20)
  step8.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(step8)
}
function circle8() {
  var step9 = document.createElementNS(namespace, "circle")
  step9.setAttribute("cx",230)
  step9.setAttribute("cy",160)
  step9.setAttribute("r",20)
  step9.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(step9)
}
function circle9() {
  var step10 = document.createElementNS(namespace, "circle")
  step10.setAttribute("cx",160)
  step10.setAttribute("cy",230)
  step10.setAttribute("r",20)
  step10.setAttribute("fill",)
  var canvas = document.getElementById("game-board")
  canvas.appendChild(step10)
}
