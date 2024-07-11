var gamePattern = [];
var userClickPattern = [];
var buttonColours = ["red", "blue", "green", "yellow" ];

var started = false;
var level=0;


function checkAnswer(currrentlevel)
{
   if(gamePattern[currrentlevel] == userClickPattern[currrentlevel])
   {
      if(gamePattern.length == userClickPattern.length)
      {
        setTimeout(function(){
            nextSequence();

        },1000);
      }
      
   }
   else{
    playSound("wrong");

        $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
        
    },200);

    $("#level-title").text("Game Over, Press Any Key to Restart " );
  
  
        startOver();

       
   
     
   }
}
$(document).keypress(function(){
    if(!started)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        
        started=true;
    }
   
  });


$(".btn").on("click", function()
{
    var userChosenColour= $(this).attr("id");
    userClickPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickPattern.length-1);
});




function nextSequence()
{
    userClickPattern = [];
    var randomNumber=Math.floor(Math.random()*4) ;   
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
$('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);
level++;
$("#level-title").text("Level " + level);
}


function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {


    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
 
  
function startOver()
{
    level = 0;
    gamePattern = [];
    started = false;
}