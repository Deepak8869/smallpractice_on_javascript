let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses")


let ans = Math.floor(Math.random()*100) + 1;
let numGusses = 0;

btn.addEventListener('click' , () => {
  guessNumber();
})

function guessNumber(){
  if(input.value < 1 || input.value > 100 || isNaN(input.value)){
    wrng.innerHTML = "Enter the no. between 1 to 100";
  }
  else{
    numGusses++;
    guesses.innerHTML = "No. of guesses : " + numGusses;

     if(input.value > ans) {
      wrng.innerHTML = "Number is Greater";
     }
     else if(input.value < ans){
      wrng.innerHTML = "Number is Smaller";
     }
     else{
      wrng.innerHTML = "Congratulations 🔥 You Got the Correct Number";

      setTimeout(() => {
        resetGame();
      },5000)
     }
  }
}

function resetGame(){
  numGusses = 0;
  ans = Math.floor(Math.random()*100) + 1;
  input.value = "";
  guesses.innerHTML = "No. of guesses : 0 " ;
}