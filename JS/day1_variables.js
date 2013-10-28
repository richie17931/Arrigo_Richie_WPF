// Comment Type 1
/* Comment Type 2

    multiple line comment

 */

var name;
//name = 'Richie Arrigo'; // string example
name = prompt('What is your name?'); // string example

var age = 21; // number example
age = prompt('How old are you?');

var pet = 'Apollo';

var petAge = 7;

//console.log(name);
/*console.log(age);
age = age + 1;
console.log(age);
age = age - 10;
console.log(age);
age = age * 2;
console.log(age);
*/

// Three ways to tell a string to be a number
console.log(parseInt(petAge) + Number(age) + age*1);

var outputString;
outputString =
'User age is : \t\t' + age + '\n' +
'User name is : \t\t' + name + '\n' +
'User Pet name is : \t' + pet + '\n' +
'User Pet age is : \t' + petAge;

console.log(outputString);

console.log(age*1 + petAge);





