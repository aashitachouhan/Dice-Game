 var randomNumber1 = Math.floor(Math.random()*6)+1;
 var randomSource = "dice" + randomNumber1 + ".png";
 var ans = "images/" + randomSource;
 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var randomSource2 = "dice" + randomNumber2 + ".png";
 var ans2 = "images/" + randomSource2;
//  var image1 = document.querySelectorAll("img")[0];
//  image1.setAttribute("src", ans);
document.querySelector(".img1").setAttribute("src", ans);
document.querySelector(".img2").setAttribute("src", ans2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 WINS!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player2 WINS!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}