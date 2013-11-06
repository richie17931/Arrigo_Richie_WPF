/**
 * Created by richardarrigo on 11/6/13.
 */

//10x10 with 5 land types
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

        console.log('['+i+']['+j+']='+grid[i][j]);
    }
}