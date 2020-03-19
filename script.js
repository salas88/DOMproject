
var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);


var str1 = "images/dice" + player1 + ".png";
var str2 = "images/dice" + player2 + ".png";


var i1 = document.querySelector("img");
var i2 = document.querySelector(".img2");

i1.setAttribute("src", str1);
i2.setAttribute("src", str2);

var h2 = document.querySelector("h2").innerHTML = "hello";


if(player1 > player2) {
  var h2 = document.querySelector("h2").innerHTML = "Player 1 is win";
} else if (player1 < player2) {
  var h2 = document.querySelector("h2").innerHTML = "Player 2 is win";
} else {
  var h2 = document.querySelector("h2").innerHTML = "Draw";
}
