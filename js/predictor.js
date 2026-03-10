function predict(){

let english = parseInt(document.getElementById("english").value);
let math = parseInt(document.getElementById("math").value);
let science = parseInt(document.getElementById("science").value);
let e1 = parseInt(document.getElementById("elective1").value);
let e2 = parseInt(document.getElementById("elective2").value);
let e3 = parseInt(document.getElementById("elective3").value);

let aggregate = english + math + science + e1 + e2 + e3;

let result = document.getElementById("result");

result.innerHTML = "Your Aggregate is: " + aggregate;

if(aggregate <= 18){

result.innerHTML += "<br>Possible Programs:<br>";
result.innerHTML += "Computer Science – University of Ghana<br>";
result.innerHTML += "Computer Engineering – KNUST<br>";
result.innerHTML += "IT – UCC";

}

else{

result.innerHTML += "<br>You may need alternative programs.";

}

}
