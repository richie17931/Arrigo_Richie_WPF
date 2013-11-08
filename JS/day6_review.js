/**
 * Created by richardarrigo on 11/8/13.
 */


// Dog years problem.
var humanYears=Number(prompt('How many years old is the dog?'));
var dogYears=humanYears*7;
console.log('That is '+dogYears+' dog years.');

// functions

// inputs are 2 of 3 values
// calculate the third value
var global_a=prompt('A value');
var global_b=prompt('B value');
var global_c=prompt('C value');
//var calc=prompt('What would you like to calculate?');
//if(calc==c){
//    global_a=Number(prompt('enter a value for a'));
//    global_b=Number(prompt('enter a value for b'));
//    pythagorean(global_a,global_b,null)
//}
function pythagorean(a,b,c){
    if(a=='') {
        a==null;
    }
    if(b==''){
        b==null;
    }
    if(c==''){
        c==null;
    }

    if((a==null && b==null && c==null) ||
        (a==null && b==null && c!=null) ||
        (a==null && b!=null && c==null) ||
        (a!=null && b==null && c==null)){
        return 'Not enough information.'
    }
    else if(a,b,c==null){
        return Math.sqrt(a*a+b*b);
    }
    else if(a,b==null,c){
        return Math.sqrt(c*c-a*a);
    }
    else if(a==null,b,c){
        return Math.sqrt(c*c-b*b);
    }
    else{
        if(Math.sqrt(a*a+b*b)==c){
            return 'This is good data'
        }
        else{
            return 'Too much information.'
        }
    }
//    if(c==null){
//        return Math.sqrt(a*a+b*b);
//    }
}
console.log(pythagorean(null,null,null));
console.log(pythagorean(1,null,null));
console.log(pythagorean(null,1,null));
console.log(pythagorean(null,null,1));
console.log(pythagorean(3,4,null));
console.log(pythagorean(3,null,5));
console.log(pythagorean(null,4,5));
console.log(pythagorean(3,4,5));
console.log(pythagorean(3,4,6));

var nanCheck='sdesf';
console.log(isNaN(nanCheck));
nanCheck= 7;
console.log(isNaN(nanCheck));

if(pythagorean(null,null,null)=='Not enough information.'){
    console.log('(null,null,null) --Passed all null values');
}
else {console.log('Failed')}

