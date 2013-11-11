/**
 * Created by richardarrigo on 11/11/13.
 */

// day trader
// string of numbers to count the number of
// increases/decreases

// create a random LIST of numbers
// house the numbers in an array
// loop to compare the number
// numeric bounds(1-3)

var storageArray=[];
var storageString=' ';
var storageCounter=0;
for(i=0;i<20;i++){
    storageArray[i]=Math.ceil(Math.random()*3);
    if(i>0 && storageArray[i-1]>storageArray[i]){
        storageCounter++;
        storageString+= 'D, ';
    }
    else if(i>0 && storageArray[i-1]<storageArray[i]){
        storageString+='I, ';
    }
    else{
        storageString+= 'S,  '
    }
}
console.log(storageArray);
console.log(storageString);
console.log(storageCounter);