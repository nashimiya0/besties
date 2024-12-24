const display = document.getElementById("Display");

function appendToDisplay (input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "tanga ampt";
        alert ('wtf pre ang bobo mo naman error yan!!');
        console.log('tangina mo naman pre!')
    }
}