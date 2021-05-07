player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

document.getElementById("name1").innerHTML=player1_name;
document.getElementById("name2").innerHTML=player2_name;

document.getElementById("player1").innerHTML=player1_name;
document.getElementById("player2").innerHTML=player2_name;


score1=0;
score2=0;

document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;


function send(){
   number1 = document.getElementById("number1").value;
   number2 = document.getElementById("number2").value;
   actual_answer = parseInt(number1) * parseInt(number2);

   question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
   input_box = "<br>Answer: <input type='number' id='input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

   row = question_number + input_box + check_button;

   document.getElementById("output").innerHTML = row;

   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
}

question_turn= "player1";
answer_turn= "player2";



function check(){
  input_answer= document.getElementById("input_check_box").value;
 


if(input_answer==actual_answer){



  if(answer_turn=="player2"){
    score2=score2+1;

    document.getElementById("score2").innerHTML=score2;



  }  else if(answer_turn== "player1"){

  score1=score1+1;

  document.getElementById("score1").innerHTML=score1;


}


}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("write").innerHTML="Question Turn - " + player2_name;
  } else{
      question_turn="player1";
      document.getElementById("write").innerHTML="Question Turn - " + player1_name;
  
  }
  
  if(answer_turn=="player1"){
      answer_turn="player2";
      document.getElementById("answer").innerHTML= "Answer Turn - " + player2_name;
    } else{
        answer_turn="player1";
        document.getElementById("answer").innerHTML="Answer Turn - " + player1_name;
    
    }



document.getElementById("output").innerHTML="";
}