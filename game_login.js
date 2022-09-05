// Create function addUser()
function addUser(){
  // Get value of user by id player1_name_input and player2_name_input
const player1Name = document.getElementById("player1_name_input").value
const player2Name = document.getElementById("player2_name_input").value
  // Store these values locally
localStorage.setItem("player1_name", player1Name)
localStorage.setItem("player2_name", player2Name)
  //Assign "game_page.html" to window.location
  window.location.assign("gamePage.html")
}