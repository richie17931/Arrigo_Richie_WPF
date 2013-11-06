/**
 * Created by richardarrigo on 11/6/13.
 */

// area of a trapezoid

//var base1= Number(prompt('Enter a value for base 1:'));
//var base2= Number(prompt('Enter a value for base 2:'));
//var height= Number(prompt('Enter the height:'));
//
//console.log(((base1+base2)*height)/2);
//

//var equity=1;
//var assets=2;
//var liability=3;
//
//var eCalc= assets-liability;
//console.log(eCalc+':'+equity);
//var aCalc= equity+liability;
//console.log(aCalc+':'+assets);
//var lCalc= -1*(equity-assets);
//console.log(lCalc+':'+liability);

//// prompt user for a number and display that index
//var shoppingList=['Milk','Eggs','Bread','Bacon'];
//
//var item=Number(prompt('Which item would you like to select(1-4)?'));
//console.log(shoppingList[item-1]);
//
//// show the array length then add an item
//// use a for loop to display everything in the array and no more or less than the number of items
//// add another item and display
//
//console.log(shoppingList.length);
//shoppingList.push('Waffles');
//console.log(shoppingList.length);
//
//for(i=0;i<shoppingList.length;i++){
//    console.log(shoppingList[i]);
//}
//
//shoppingList.push('Ketchup');
//
//for(i=0;i<shoppingList.length;i++){
//    console.log(shoppingList[i]);
//}

var storedPromptValue=prompt('E(100%), G(75%), F(30%), P(0 for entire assignment)');
var percentageFromPrompt= 0;
var percentageOfPoints= 10;

// .toUpperCase() takes user input as uppercase
if(storedPromptValue.toUpperCase()=='E')
{
    percentageFromPrompt= 1;
}
else if(storedPromptValue.toUpperCase()=='G'){
    percentageFromPrompt= .75;
}
else if(storedPromptValue.toUpperCase()== 'F'){
    percentageFromPrompt= .3;
}
else{
    percentageFromPrompt= 0;
}

percentageOfPoints*=percentageFromPrompt;
console.log(percentageOfPoints);