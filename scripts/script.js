$(document).ready(function(){
    // when button is pressed
    $("#btnGo").click(function(){
      //alert("Hey, you clicked button");
      //get value of the input
      
      let $userName = $("#userName").val();
      let $sliced = $("#sliced").val();
      if($userName.length <= 1){
        $("#userMsg").text("Really, Get a real name");
      }
      else if($userName.length == 2){
        $("#userMsg").text("I said your NAME, not intials");
      }
      else if($userName == "Jayden"){
        $("#userMsg").text("Hey, that's a pretty cool name");
      }
      else if($userName.length < 10){
        $("#userMsg").text("Cool I can work with this");
        if($userName.length >=5){
          $sliced = $userName.slice(3,5);
          
          $("#slicedName").text("Here's your new name ... "+ $sliced +"dog");
        }  
      }
      else{
        $("#userMsg").text("YOUR NAME IS TOO LONG");
      }
      
      // alert($userName);
      
      //Display user input
      
    });
  //
});