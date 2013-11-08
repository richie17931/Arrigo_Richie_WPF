/**
 * Created by richardarrigo on 11/8/13.
 */

// Richie Arrigo | 2492145 | 11/08/2013
// Personal Expressions example
// Age Calculator

//var yearBorn=Number(prompt('What year were you born?'));
//var currentYear=Number(prompt('What year is it currently?'));
//var age= currentYear-yearBorn;
//console.log('Your age:'+age);

var birthMonth=Number(prompt('What month were you born?(1-12)'));
var birthDay=Number(prompt('What day were you born?(1-31)'));
var birthYear=Number(prompt('What year were you born?'));
var currentMonth=Number(prompt('What month is it?(1-12)'));
var currentDay=Number(prompt('What day is it?(1-31)'));
var currentYear=Number(prompt('What year is it?'));
var age= 0;

console.log('Your birthday is '+birthMonth+'/'+birthDay+'/'+birthYear);
if(currentMonth<birthMonth){
    age= currentYear-birthYear-1;
    console.log('Your age:'+age);
}
else if(currentMonth==birthMonth && currentDay<birthDay){
    age= currentYear-birthYear-1;
    console.log('Your age:'+age);
}
else{
    var age= currentYear-birthYear;
    console.log('Your age:'+age);
}

