/**
 * Created by richardarrigo on 11/18/13.
 */

// rolling a D20 for damage

// create a variable to store a random number between 1-20 to represent a D20 roll
var diceRoll=Math.round(Math.random()*(20-1)+1);
// display the dice roll
console.log('Your rolled a '+diceRoll+'!');

// checks if the dice roll is 1 to indicate if the player misses
if(diceRoll==1){
    console.log('Your attacked missed!');
}
// checks if the user rolls between 2-5 to determine if they just glanced the opponent with their attack.
// reduces damage done by 50%
else if(diceRoll<=5){
    console.log('You glanced your opponent and did '+diceRoll/2+' damage!');
}




