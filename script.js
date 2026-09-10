const getRandomNumber= function(min, max)
{
    min=Math.ceil(min);
    max=Math.floor(max);

    return Math.floor(Math.random() * (max-min+1) + min) 
    //In the above code I have written the code for genearating a random number.
}

let RandomNumber= getRandomNumber(1, 100)
let wrongans=0
let score=0
let guessnum

while(RandomNumber!=guessnum)   
    /* The logic is that the loop must run until the guessed number is not equals to randomly generated number. And once it is equals to it will break the loop and come out of loop. */

{
    guessnum=prompt("Enter the number you guess between 1 to 100")
    guessnum=Number.parseInt(guessnum)

    if(RandomNumber>guessnum)
    {
        alert("The number you guessed is lesser than the original number.")
        wrongans++;
    }

    else if(RandomNumber<guessnum)
    {
        alert("The number you guessed is greater than the original number.")
        wrongans++;
    }

    else if(RandomNumber==guessnum)
    {
        alert("Congratulations! You have guessed the number.")
        score=100-wrongans;
        alert("Your score is: " + score + " out of 100")
        break;
    }

    else
    {
        alert("You have entered an invalid character.")
        wrongans++;
    }
}
