

var randomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage1 = "images/images/dice" + randomNumber1 + ".png";
$(".dice1").attr("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 = "images/images/dice" + randomNumber2 + ".png";
$(".dice2").attr("src", randomDiceImage2);



if(randomNumber1 > randomNumber2){
    $("h1").text("HURRY! Player  1  wins 🚩")
} else if(randomNumber1 < randomNumber2){
    $("h1").text("HURRY! Player  2  wins 🚩")
}else {
    $("h1").text("DRAW! PLAY AGAIN😔")
}