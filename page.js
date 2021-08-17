var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2");
var score1 = 0;
var score2 = 0;
document.getElementById("player1name").innerHTML=name1 + ": " + score1;
document.getElementById("player2name").innerHTML=name2 + ": " + score2;
function send(){
    number1 = document.getElementById("number1input").value;
    number2 = document.getElementById("number2input").value;
    answer = parseInt(number1) * parseInt(number2);
    questionnumber = "<h4 style='color: black'>" + number1 + " X " + number2 +"</h4>" + "<br>";
    inputbox = "<br>Answer : <input type='text' id='inputansbox'><br><br>";
    checkbutton = "<button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionnumber + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1input").value="";
    document.getElementById("number2input").value="";
    useranswer = document.getElementById("inputansbox").value;
}
