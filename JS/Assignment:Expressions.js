/**
 * Created by richardarrigo on 11/6/13.
 */

var width=Number(prompt('What is the width?'));
var height=Number(prompt('What is the height?'));
var value=Number(prompt('Enter a number:'));
var numberOfQuizzes=Number(prompt('How many quiz grades to calculate?'));

var quizzes=[numberOfQuizzes];
var total= 0;
for(i=0;i<numberOfQuizzes;i++){
    var grade=Number(prompt('Enter quiz grade:'));
    quizzes[i]=grade;
    total+=quizzes[i];
}

var perimeterLength=Number(prompt('Enter the length:'));
var perimeterHeight=Number(prompt('Enter the height:'));

// Basic Expressions
var a= 7;
var b= a+3;
console.log("A:" + a);
console.log("B:" + b);


// Example Expressions
var yearBorn= 1992;
var age= 2013-yearBorn;
console.log('Age:'+age);


// Arithmetic Operators
// area of a triangle is half the width x height
var area= width*height/2;
console.log("Area:"+area);


// Using Modulus
var remainder= 101%10;
console.log("Remainder of 101/10= "+remainder);

value=value%2;
if(value==0){console.log('Your number is even.');}
else{console.log('Your number is odd');}


// Order of Operations(PEMDAS)
var quiz1= 100;
var quiz2= 95;
var quiz3= 78;
var quiz4= 90;
var quiz5= 93;
var quiz6= 84;
var average= (quiz1+quiz2+quiz3+quiz4+quiz5+quiz6)/6;
console.log('Quiz Average:'+average);
console.log('Quiz Average:'+total/numberOfQuizzes);

// Perimeter
console.log('The perimeter= '+((perimeterLength*2)+(perimeterHeight*2)));


// Using Arrays in Expressions



