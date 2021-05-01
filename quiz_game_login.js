function addUser(){
    player1= document.getElementById("login_div1").value;
    player2= document.getElementById("login_div2").value;
  
    localStorage.setItem("player1",player1 );
    localStorage.setItem("player2", player2);

    window.location="quiz_game_page.html";
}