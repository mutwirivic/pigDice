

//FRONT-END
$(document).ready(function(){

$("#nameForm").submit(function(event){
  event.preventDefault();
  var player1=$("#playerOneName").val();
  console.log(player1);
  var player2=$("#playerTwoName").val();
  console.log(player2)
})



});
