var calcScreen = document.getElementsByClassName("result").innerHTML;
console.log(calcScreen);

var buttons = document.querySelectorAll(".calc-button");
console.log(buttons);



var buttons = document.getElementsByClassName("calc-button");
buttons.addEventListener("click", determineAction);

function determineAction(value) {
    if (typeof(value)=="number"){
        if (screen == 0){
            screen = "";
            screen = screen.concat(screen, str(value)) ;
        }
    } else {

    }
}