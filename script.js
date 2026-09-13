const getRandomNumber = function(min, max) 
{ 
    min = Math.ceil(min); 
    max = Math.floor(max); 
 
    return Math.floor(Math.random() * (max - min + 1) + min);  
    // In the above code I have written the code for generating a random number.
} 
 
let RandomNumber = getRandomNumber(1, 100); 
let guessnum; 
 
let chance = 10; 
let chanceleft = document.getElementById("chancelft"); 
chanceleft.textContent = chance; 
 
let score = 0; 
let scoreis = document.getElementById("score"); 
scoreis.textContent = score; 
 
let messageis = document.getElementById("message"); 
let messageis1 = document.getElementById("message1"); 
 
let wrongans = 0; 
let won = false; 


/* =========================
   MESSAGE POPUP FUNCTION
   ========================= */

function showMessage() 
{
    messageis.style.animation = "none";
    messageis1.style.animation = "none";

    void messageis.offsetWidth;
    void messageis1.offsetWidth;

    if(messageis.textContent !== "")
    {
        messageis.style.animation = "popupMessage 3.5s ease forwards";
    }

    if(messageis1.textContent !== "")
    {
        messageis1.style.animation = "popupMessage 3.5s ease forwards";
    }
}


/* =========================
   RESTART BUTTON
   ========================= */

let restart = document.getElementById("restartBtn");

restart.addEventListener("click", function() 
{ 
    RandomNumber = getRandomNumber(1, 100); 
 
    chance = 10; 
    chanceleft.textContent = chance; 
 
    score = 0; 
    scoreis.textContent = score; 
 
    wrongans = 0; 
    won = false; 
     
    messageis.textContent = ""; 
    messageis1.textContent = ""; 

    messageis.style.animation = "none";
    messageis1.style.animation = "none";

    document.getElementById("guessInput").value = ""; 
}); 


/* =========================
   GUESS BUTTON
   ========================= */

let guessButton = document.getElementById("guessBtn");

guessButton.addEventListener("click", function() 
{ 
    if(won == true || chance == 0) 
    { 
        return; 
    } 
 
    messageis.textContent = "";
    messageis1.textContent = "";

    guessnum = Number(document.getElementById("guessInput").value); 
 
    if(document.getElementById("guessInput").value === "") 
    { 
        messageis.textContent = "The entered number is invalid."; 

        chance--; 
        chanceleft.textContent = chance; 

        wrongans++; 
    } 
 
    else if(!Number.isInteger(guessnum)) 
    { 
        messageis.textContent = "The entered number is not an Integer."; 

        chance--; 
        chanceleft.textContent = chance; 

        wrongans++; 
    } 
 
    else if(guessnum < 1 || guessnum > 100) 
    { 
        messageis.textContent = "The entered number is: " + guessnum; 
        messageis1.textContent = "It is not allowed."; 

        chance--; 
        chanceleft.textContent = chance; 

        wrongans++;   
    } 
 
    else 
    { 
        if(RandomNumber > guessnum) 
        { 
            messageis.textContent = "The entered number you guessed is lesser than the original number."; 

            chance--; 
            chanceleft.textContent = chance; 

            wrongans++; 
        } 
 
        else if(RandomNumber < guessnum) 
        { 
            messageis.textContent = "The entered number you guessed is greater than the original number."; 

            chance--; 
            chanceleft.textContent = chance; 

            wrongans++; 
        } 
 
        else if(RandomNumber == guessnum) 
        { 
            won = true; 
 
            messageis.textContent = "Congratulations! You have guessed the original number."; 

            score = 100 - (10 * wrongans); 
            scoreis.textContent = score; 
 
            messageis1.textContent = "Chances left: " + chance; 
        } 
    } 
 
    document.getElementById("guessInput").value = ""; 
 
    if(won == false && chance == 0) 
    { 
        messageis.textContent = "Oops! You ran out of chances."; 
        messageis1.textContent = "Your number was: " + RandomNumber; 
    }

    showMessage();
}); 


let guessInput = document.getElementById("guessInput");

guessInput.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        guessButton.click();
    }
});