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