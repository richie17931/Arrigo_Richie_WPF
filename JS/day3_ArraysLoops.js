/**
 * Created by richardarrigo on 11/1/13.
 */
/*var arrayLayerOne = [];
arrayLayerOne[0]=[];
arrayLayerOne[1]=[];
arrayLayerOne[2]=[];

arrayLayerOne[0][0]='Dog';
arrayLayerOne[0][1]='Cat';
arrayLayerOne[0][2]='Bird';

arrayLayerOne[1][0]=1;
arrayLayerOne[1][1]=10;
arrayLayerOne[1][2]=908277.28827;

arrayLayerOne[2][0]=['Dog', 'monkey'];
arrayLayerOne[2][1]=['Cat', 'dolphin'];
arrayLayerOne[2][2]=['Bird', 'whale'];

console.log(arrayLayerOne[0][0]);
console.log(arrayLayerOne[2][0]);
console.log(arrayLayerOne[2][0][0]);
*/

//seed value for 0,0
//modifier to add to seed

//var arrayLayer=[];
//var number=Number(prompt('Enter a number:'));
//var seed=Number(prompt('Enter a number to start at:'));
//var modifier=Number(prompt('Enter a modifier:'));
//
//arrayLayer[0]=[];
//arrayLayer[1]=[];
//arrayLayer[2]=[];
//arrayLayer[3]=[];
//
//
//arrayLayer[0][0]=seed;
//arrayLayer[0][1]=seed+modifier;
//arrayLayer[0][2]=seed+(modifier*2);
//arrayLayer[0][3]=seed+(modifier*3);
//
//arrayLayer[1][0]=seed+modifier;
//arrayLayer[2][0]=seed+(modifier*2);
//arrayLayer[3][0]=seed+(modifier*3);
//
//arrayLayer[1][1]=arrayLayer[0][1]*arrayLayer[1][0]*number;//4
//arrayLayer[1][2]=arrayLayer[0][2]*arrayLayer[1][0]*number;//6
//arrayLayer[1][3]=arrayLayer[0][3]*arrayLayer[1][0]*number;//8
//
//arrayLayer[2][1]=arrayLayer[0][1]*arrayLayer[2][0]*number;//6
//arrayLayer[2][2]=arrayLayer[0][2]*arrayLayer[2][0]*number;//9
//arrayLayer[2][3]=arrayLayer[0][3]*arrayLayer[2][0]*number;//12
//
//arrayLayer[3][1]=arrayLayer[0][1]*arrayLayer[3][0]*number;//8
//arrayLayer[3][2]=arrayLayer[0][2]*arrayLayer[3][0]*number;//12
//arrayLayer[3][3]=arrayLayer[0][3]*arrayLayer[3][0]*number;//16
//
//arrayLayer[0][0]= arrayLayer[0][0]*number;
//arrayLayer[0][1]= arrayLayer[0][1]*number;
//arrayLayer[0][2]= arrayLayer[0][2]*number;
//arrayLayer[0][3]= arrayLayer[0][3]*number;
//arrayLayer[1][0]= arrayLayer[1][0]*number;
//arrayLayer[2][0]= arrayLayer[2][0]*number;
//arrayLayer[3][0]= arrayLayer[3][0]*number;
//
//console.log(arrayLayer[0]);
//console.log(arrayLayer[1]);
//console.log(arrayLayer[2]);
//console.log(arrayLayer[3]);


/*
console.log(arrayLayer[2][1]);
console.log(arrayLayer[2][2]);
console.log(arrayLayer[2][3]);
console.log(arrayLayer[3][1]);
console.log(arrayLayer[3][2]);
console.log(arrayLayer[3][3]);
*/
//
//for(i=0;i<=2;i=i+1){
//    for(j=0;j<=2;j++){
//        console.log('[' +i +'][' +j +']');
//    }
//}

var num=Number(prompt('Enter a number:'));

for(i=num;i<=num*num;i=i+num){
    console.log(i);
}

