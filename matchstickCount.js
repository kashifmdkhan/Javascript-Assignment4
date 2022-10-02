const prompt = require("prompt-sync")();
function matchStickCount(step){
    if(step==1)
        return 6;
    return 6+(5*(step-1));
}

let step = prompt("Enter number of steps: ");
console.log(matchStickCount(step));