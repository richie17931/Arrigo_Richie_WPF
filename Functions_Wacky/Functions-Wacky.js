/**
 * Created by richardarrigo on 11/20/13.
 */

// Richie Arrigo | 2492145 | 11/20/13

// create a backpack with twenty slots to store the user's items
// required parameters: user's items

// variable to find out how many items the user needs to store
var slots= Number(prompt('How many items do you have to store?'));
// array to hold the contents of the user's inventory
var backpack= [];

// function body that takes in the number of items the user has
function inventory(slots){
    // loop the number of times you need to add an item
    for(i=0; i<slots; i++){
        // add the item that the user enters into their backpack
        backpack[i]= prompt('Enter an item to add: ');
    }
    // display the contents of their pack
    console.log(backpack);
}