


for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML){
            case "w":
                var tom1 = new Audio("./sounds/tom1.mp3");
                tom1.play();
                break;
            case "a":
                var tom1 = new Audio("./sounds/tom2.mp3");
                tom1.play();
                break;
            case "s":
                var tom1 = new Audio("./sounds/tom3.mp3");
                tom1.play();
                break;
            case "d":
                var tom1 = new Audio("./sounds/tom4.mp3");
                tom1.play();
                break;
            case "j":
                var tom1 = new Audio("./sounds/crash.mp3");
                tom1.play();
                break;
            case "k":
                var tom1 = new Audio("./sounds/kick.mp3");
                tom1.play();
                break;
            case "l":
                var tom1 = new Audio("./sounds/snare.mp3");
                tom1.play();
                break;
            default:
        }
    })};





// var audio = new Audio("./sounds/crash.mp3");
// audio.play();