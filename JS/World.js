/**
 * Created by richardarrigo on 11/6/13.
 */

//10x10 with 5 land types

var world1= createWorld();
//var world2= createWorld();
//console.log('******UGLY VERSION******');
//for(i=0;i<world1.length;i++){
//    console.log(world1[i]);
//}

var x= 1;
var y= 1;
var quitTest= true;
var charName=prompt('What is your name?');
charName= charName.substring(0,6);
console.log(charName);

if(charName.length==1){
    charName='  '+charName+'   ';
}
else if(charName.length==2){
    charName='  '+charName+'  ';
}
else if(charName.length==3){
    charName=' '+charName+'  ';
}
else if(charName.length==4){
    charName=' '+charName+' ';
}
else if(charName.length==5){
    charName+=' ';
}

console.log(worldDisplay(world1,x,y,charName));
console.log('Starting position: '+world1[1][1]);

do{
    var userInput=prompt('Which direction would you like to go? (N,S,E,W,Q)');
    if(userInput==null){quitTest==false; break;}
    if(userInput.toUpperCase()=='Q'){quitTest=false;}
    else{
        if(userInput.toUpperCase()=='N'){ x--;}
        if(userInput.toUpperCase()=='S'){ x++;}
        if(userInput.toUpperCase()=='E'){ y++;}
        if(userInput.toUpperCase()=='W'){ y--;}
        if(userInput.toUpperCase()=='Q'){quitTest=false;}
        if(x<0){x=9;}
        if(x>9){x=0;}
        if(y<0){y=9;}
        if(y>9){y=0;}
        console.log(worldDisplay(world1,x,y,charName));
        console.log('Current position: '+world1[x][y]);
    }
} while(quitTest);