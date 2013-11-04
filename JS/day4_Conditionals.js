/**
 * Created by richardarrigo on 11/4/13.
 */


//var i;
//for(i=0;i<10;i++){
//    if(i<=5){
//        console.log(i);
//    } else if(i<=7){
//        console.log(10-i);
//    } else {console.log('>7');}
//}

//Prompt the user to pick gray or blue and display
//var color=prompt('Choose either gray or blue');
//
//if(color=='blue'||color=='Blue'){
//    console.log('You chose blue!');
//}
//else{console.log('You chose gray!');}

//pick between boats and cars at random intervals
//var vehicle= Math.random();
//console.log(vehicle);
//if(vehicle<=0.5){
//    console.log('Boat');
//}
//else{console.log('Car');}

// Ternary
//(condition to be met) ? first set of stuff : else stuff;
//var tern = Math.random();
//(Math.round(tern)==0)?console.log('heads'):console.log('tails');

//Choose convert from fahrenheit to celcius
//var temp= Number(prompt('Enter temperature in fahrenheit:'));


//10x10 with 5 land types
var grid=[];
var land;
var landType;

//fill grid
for(i=0;i<=9;i++){
    grid[i]=[];
    for(j=0;j<=9;j++){
        landType= Math.random();
        if(landType<=.2){
            land = 'Cave';
        }
        else if(landType<=.4){
            land = 'Desert';
        }
        else if(landType<=.6){
            land = 'Forest';
        }
        else if(landType<=.8){
            land = 'Plains';
        }
        else
            land = 'Marsh';

        grid[i][j]=land;
        console.log(landType);
        console.log('Grid['+i+']['+j+']='+grid[i][j]);
    }
}

