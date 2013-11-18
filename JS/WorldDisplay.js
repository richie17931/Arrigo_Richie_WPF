/**
 * Created by richardarrigo on 11/18/13.
 */

function worldDisplay(worldArray,xxx,yyy,charName){
    //input world array
    console.clear();
    var formattedResult='';
    for(i=0;i<worldArray.length;i++){
        for(j=0;j<worldArray[i].length;j++){
            if(i==xxx && j==yyy){
                formattedResult+= '<'+charName+'> ';
            }
            else{
                formattedResult+= worldArray[i][j][0]+ ' ';
                if(worldArray[i][j][0].length==0){formattedResult+='        '}
                if(worldArray[i][j][0].length==1){formattedResult+='       '}
                if(worldArray[i][j][0].length==2){formattedResult+='      '}
                if(worldArray[i][j][0].length==3){formattedResult+='     '}
                if(worldArray[i][j][0].length==4){formattedResult+='    '}
                if(worldArray[i][j][0].length==5){formattedResult+='   '}
                if(worldArray[i][j][0].length==6){formattedResult+='  '}
                if(worldArray[i][j][0].length==7){formattedResult+=' '}
            }
        }
        formattedResult+='\n';
    }
    return formattedResult;
    //output the formatted array
}