/**
 * Created by richardarrigo on 11/18/13.
 */

function createWorld(){
    var grid=[];
    var landType;

    //fill grid
    for(i=0;i<=9;i++){
        grid[i]=[];
        for(j=0;j<=9;j++){
            var landName=0;
            var monsterList=[1];
            grid[i][j]=[];
            landType= Math.ceil(4*Math.random());
            if(landType==1){grid[i][j][landName]='Swamp';}
            else if(landType==2){grid[i][j][landName]='Desert';}
            else if(landType==3){grid[i][j][landName]='Mountain';}
            else{grid[i][j][landName]='Forest';}
            grid[i][j][monsterList]= monsterGen(grid[i][j][landName]);
            // console.log('['+i+']['+j+']='+grid[i][j]);
        }
    }
    return grid;
}

function monsterGen(landType){
    // create an array of monsters
    // make them appropriate for the land type using conditionals
    var randomEvent=Math.random();
    var monsterArray=[];
    if(landType=='Forest'){
        //Bugbear, kobold, spider
        if(randomEvent<.25){
            if(randomEvent<.125){
                monsterArray[0]='Bugbear';
            }
            else if(randomEvent<.225){
                monsterArray[0]='Kobold';
            }
            else{
                monsterArray[0]='Spider';
            }
        }
    }
    return monsterArray;
}

// gold 1-1000, gems 1-4, weapon 1
function monsterGen(monsterName){ // adding monsterName parameter for treasure
    // create an array for treasure
    var treasure= [];
    var treasureType= Math.random();
    var treasureAmount= Math.random();
    var minGold= 0;
    var maxGold= 0;
    var minGems= 0;
    var maxGems= 0;
    var minWeapons= 0;
    var maxWeapons= 0;

    if(monsterName){
        minGold= 1;
        maxGold= 1000;
        minGems= 1;
        maxGems= 4;
        minWeapons= 1;
        maxWeapons= 1;
    }

    // 10% chance to get gold, 5% chance for others, else null
    if(treasureType<=.1){

    }
    else if(treasureType<=.15){ // gems

    }
    else if(treasureType<=.2){ // weapon

    }
    else if(treasureType<=.25){ // gold, gems

    }
    else if(treasureType<=.3){ // gold, weapon

    }
    else if(treasureType<=.35){  //

    }
    else if(treasureType<=.4){ //

    }
    else{
        treasure[0]= 'You got hosed!';
    }

    return treasure;
}