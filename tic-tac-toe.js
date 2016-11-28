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
turn="antagonist"}
  else {
  var stepone = document.createElementNS(namespace, "circle")
  stepone.setAttribute("cx",230 )
  stepone.setAttribute("cy",90 )
  stepone.setAttribute("r", 20)
  stepone.setAttribute("fill","#ffcc66")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(stepone)
turn="protagonist"}
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
   turn="antagonist"}
    else {
    var step2 = document.createElementNS(namespace, "circle")
    step2.setAttribute("cx",90)
    step2.setAttribute("cy",90)
    step2.setAttribute("r",20)
    step2.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step2)
    turn="protagonist"
  }
}

function circle4(){
  if(turn=="protagonist"){
    var step4 = document.createElementNS( namespace, "circle")
    step4.setAttribute("cx",160)
    step4.setAttribute("cy",90)
    step4.setAttribute("r",20)
    step4.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step4)
    turn="antagonist"
  }
     else{
    var step4 = document.createElementNS( namespace, "circle")
    step4.setAttribute("cx",160)
    step4.setAttribute("cy",90)
    step4.setAttribute("r",20)
    step4.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step4)
    turn="protagonist"
  }
}
function circle5() {
  if(turn=="protagonist"){
    var step5 = document.createElementNS(namespace, "circle")
    step5.setAttribute("cx",90)
    step5.setAttribute("cy",160)
    step5.setAttribute("r",20)
    step5.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step5)
    turn="antagonist"}
    else {
    var step5 = document.createElementNS(namespace, "circle")
    step5.setAttribute("cx",90)
    step5.setAttribute("cy",160)
    step5.setAttribute("r",20)
    step5.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step5)
    turn="protagonist"
  }
}

function circle6() {
  if(turn=="protagonist"){
    var step6 = document.createElementNS(namespace, "circle")
    step6.setAttribute("cx",160)
    step6.setAttribute("cy",160)
    step6.setAttribute("r",20)
    step6.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step6)
    turn="antagonist"}
    else {
    var step6 = document.createElementNS(namespace, "circle")
    step6.setAttribute("cx",160)
    step6.setAttribute("cy",160)
    step6.setAttribute("r",20)
    step6.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step5)
    turn="protagonist"
  }
}

function circle7() {
  if(turn=="protagonist"){
    var step7 = document.createElementNS(namespace, "circle")
    step7.setAttribute("cx",230)
    step7.setAttribute("cy",160)
    step7.setAttribute("r",20)
    step7.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step7)
    turn="antagonist"}
    else {
    var step7 = document.createElementNS(namespace, "circle")
    step7.setAttribute("cx",230)
    step7.setAttribute("cy",160)
    step7.setAttribute("r",20)
    step7.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step7)
    turn="protagonist"
  }
}

function circle8() {
  if(turn=="protagonist"){
    var step8 = document.createElementNS(namespace, "circle")
    step8.setAttribute("cx",90)
    step8.setAttribute("cy",230)
    step8.setAttribute("r",20)
    step8.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step8)
    turn="antagonist"}
    else {
    var step8 = document.createElementNS(namespace, "circle")
    step8.setAttribute("cx",90)
    step8.setAttribute("cy",230)
    step8.setAttribute("r",20)
    step8.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step8)
    turn="protagonist"
  }
}

function circle9() {
  if(turn=="protagonist"){
    var step9 = document.createElementNS(namespace, "circle")
    step9.setAttribute("cx",160)
    step9.setAttribute("cy",230)
    step9.setAttribute("r",20)
    step9.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step9)
    turn="antagonist"}
    else {
    var step9 = document.createElementNS(namespace, "circle")
    step9.setAttribute("cx",160)
    step9.setAttribute("cy",230)
    step9.setAttribute("r",20)
    step9.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step9)
    turn="protagonist"
  }
}

function circle10() {
  if(turn=="protagonist"){
    var step10 = document.createElementNS(namespace, "circle")
    step10.setAttribute("cx",230)
    step10.setAttribute("cy",230)
    step10.setAttribute("r",20)
    step10.setAttribute("fill","#ffcccc")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step10)
    turn="antagonist"}
    else {
    var step10 = document.createElementNS(namespace, "circle")
    step10.setAttribute("cx",230)
    step10.setAttribute("cy",230)
    step10.setAttribute("r",20)
    step10.setAttribute("fill","#ffcc66")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(step10)
    turn="protagonist"
  }
}
