/**
 * Created by richardarrigo on 11/13/13.
 */

// variables- Pieces of memory reserved within the computer to store information. Data can be initialized and stored
// when creating the variable or the user can be prompted to enter the data.

var a= Number(prompt('Enter a value for a: '));
var b= 3;
var c= 0;
var d= [];

// for loop- A loop used in a programming language to repeat actions over and over a set number of times.
// for(start,stop,step){}
// loop to run 'a' number of times
for(i=0;i<a;i++){
    d[i]=Number(prompt('Enter a value:'));
    c= c+d[i];
    console.log('The sum of the values is: '+c);
}

// expressions- Operations done on variables to use them in a meaningful way.
// addition adds the values to find the sum
c= a+b;
console.log('The sum of '+a+ ' and '+b+' is: '+c);
// addition and division by the number of items to find the mean
c= (a+b)/2;
console.log('The average of '+a+ ' and '+b+ ' is: '+c);
// subtraction finds the difference between values
c= a-b;
console.log('The difference of '+a+ ' and '+b+ ' is: '+c);
// multiplication
c= a*b;
console.log(a+' x '+b+': '+c);
// modulus is used to return the remainder of values
c= a%b;
console.log('The remainder of '+a+'/'+b+': '+c);

// if statement- Conditional used to check values and execute code when conditions are met. Uses ==, <=, >=, != to
// compare and && (and) and || (or) check multiple conditions are met.
if(a<=b){
    console.log('The sum of '+a+' and '+b+' is: '+Number(a+b));
}
else{
    console.log('The difference of '+a+' and '+b+' is: '+Number(a-b));
}


