/**
 * Created by richardarrigo on 11/18/13.
 */

// check bags to see if you have enough room to collect more loot

// prompt the user to enter the number of bag slots they have total
var slots=prompt('How many open slots are in your bag?');
// create an array to represent the backpack
var backpack=[slots];
// variable to check when to quit asking the user for input
var quitTest=true;

// do loop to get the user's input for what is in their inventory and quit when they enter a null value
do{
    // for loop to run the as long as there is space in the user's inventory and they have items to put in it
    for(i=0;i<backpack.length;i++){
        // fills the backpack array with the user's input
        backpack[i]=prompt('Enter an item from your inventory(Esc to finish filling bags):');
        if(backpack[i]==null){quitTest==false; break;}
    }
} while(quitTest)



