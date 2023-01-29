var buttonColours = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function soundToPlay(yourSelector) {
        switch (yourSelector) {
            case "red" :
                var playSound = new Audio("sounds/red.mp3");
                playSound.play();
            break;
            
            case "blue" :
                var playSound = new Audio("sounds/blue.mp3");
                playSound.play();
            break;

            case "yellow" :
                var playSound = new Audio("sounds/yellow.mp3");
                playSound.play();
            break;

            case "green" :
                var playSound = new Audio("sounds/green.mp3");
                playSound.play();
            break;

            default: console.log(event.target.id);
        }
}

function nextSequence() {
    $("h2").removeClass("pressToStart");
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * $("button").length);
    var randomChosenCorlour = buttonColours[randomNumber];
    level++;
    gamePattern.push(randomChosenCorlour);
    soundToPlay(randomChosenCorlour);
    $("button")[randomNumber].classList.add("randomPress");
    setTimeout(function(){$("button")[randomNumber].classList.remove("randomPress")}, 100);
    $("h2").text("Level " + level);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {nextSequence();}, 1000);
        }
    } else {
        var playSound = new Audio("sounds/wrong.mp3");
        playSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")}, 200)
        $("h2").text("Game Over, Press Here to Restart");
        $("h2").addClass("pressToStart");
        StartOver();
        console.log("wrong");
    }
}

function StartOver() {
    level = 0;
    gamePattern = [];
    started = false
}


$("button").click(function(event) {
    var userChosenColour = event.target.id;
    soundToPlay(userChosenColour);
    userClickedPattern.push(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
});


$("h2").click(function(){
    if (!started) {
        setTimeout(function(){nextSequence()}, 1000);
        started = true;
    }   
});


