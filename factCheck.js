// fact check program

const str = document.getElementById("opinion");
const opinion = str.value;

const answer = document.getElementById("answer");

const resetBtn = document.getElementById("reset");
resetBtn.style.display = "none";

function factCheck(){
    const factOrCap = Math.floor(Math.random() * 2);

    // failed test
    /*if (opinion != null || opinion != ""){
        console.log(factOrCap);
    } else{
        console.log("does it even matter?");
    }*/

    if (factOrCap == 0){
        answer.innerText = "CONGRATS! YOU ARE SPEAKING FACTS!";
    } else {
        answer.innerText = "YOUR OPINIONS ARE TRASH:(";
    }

    resetBtn.style.display = "inline"
}

function reset(){
    answer.innerText = "";
    resetBtn.style.display = "none";
}


