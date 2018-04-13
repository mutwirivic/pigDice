function Player(){
  this.roll=0;
  this.roundScore=0;
}

function resetFields(){
 $("#playerOneName").val('');
 $("#playerTwoName").val('');
}
var rollDice = function () {
  return Math.floor(6*Math.random()+1);
  push(this.roll)

}

//FRONT-END
$(document).ready(function(){

  $("#nameForm").submit(function(event){
    event.preventDefault();
    //player101=new Player;

    var player1=$("#playerOneName").val();
    var player2=$("#playerTwoName").val();
    resetFields();

  //  console.log(player101);

    $("#nameForm").hide();
    $("#player-section").show();
    $("#playerOneShow").text(player1);
    $("#playerTwoShow").text(player2);

  })


  $("#new-game").click(function(){
    $("#nameForm").show();
    $("#player-section").hide();
  });


  //roll dice 1
  $("#playerOneRollBtn").click(function(){
    var player1roll=rollDice();
    //console.log(player1roll);
    $("#playerOneRoll").text(player1roll);

  })

  //roll dice two
  $("#playerTwoRollBtn").click(function(){
    var player2roll=rollDice();
    $("#playerTwoRoll").text(player2roll);
  })
});
