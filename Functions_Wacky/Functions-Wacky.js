/**
 * Created by richardarrigo on 11/20/13.
 */

// Richie Arrigo | 2492145 | 11/20/13

// create a backpack with twenty slots to store the user's items
// required parameters: user's items

var slots= Number(prompt('How many items do you have to store?'));
var backpack= [];

function inventory(slots){
    for(i=0; i<slots; i++){
        backpack[i]= prompt('Enter an item to add: ');
    }
}