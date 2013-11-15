/**
 * Created by richardarrigo on 11/6/13.
 */

//10x10 with 5 land types

function createWorld(){
    var grid=[];
    var landType;

    //fill grid
    for(i=0;i<=9;i++){
        grid[i]=[];
        for(j=0;j<=9;j++){
            landType= Math.ceil(4*Math.random());
            if(landType==1){grid[i][j]='Swamp';}
            else if(landType==2){grid[i][j]='Desert';}
            else if(landType==3){grid[i][j]='Mountain';}
            else{grid[i][j]='Forest';}

           // console.log('['+i+']['+j+']='+grid[i][j]);
        }

    }
    return grid;
}

var world1= createWorld();
//var world2= createWorld();
//console.log('******UGLY VERSION******');
//for(i=0;i<world1.length;i++){
//    console.log(world1[i]);
//}


function worldDisplay(worldArray,xxx,yyy){
    //input world array
    console.clear();
    var formattedResult='';
    for(i=0;i<worldArray.length;i++){
        for(j=0;j<worldArray[i].length;j++){
            if(i==xxx && j==yyy){
                formattedResult+='<******> ';
            }
            else{
                formattedResult+= worldArray[i][j]+ ' ';
                if(worldArray[i][j].length==0){formattedResult+='        '}
                if(worldArray[i][j].length==1){formattedResult+='       '}
                if(worldArray[i][j].length==2){formattedResult+='      '}
                if(worldArray[i][j].length==3){formattedResult+='     '}
                if(worldArray[i][j].length==4){formattedResult+='    '}
                if(worldArray[i][j].length==5){formattedResult+='   '}
                if(worldArray[i][j].length==6){formattedResult+='  '}
                if(worldArray[i][j].length==7){formattedResult+=' '}
            }
        }
        formattedResult+='\n';
    }
    return formattedResult;
    //output the formatted array
}

var x= 1;
var y= 1;
var quitTest= true;

console.log(worldDisplay(world1,x,y));
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
        console.log(worldDisplay(world1,x,y));
        console.log(world1[x][y]);
    }
} while(quitTest);