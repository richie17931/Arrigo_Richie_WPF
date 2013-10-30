/**
 * Created by richardarrigo on 10/30/13.
 */
// a^2 + b^2 = c^2 store in an array

var array = [];
array[0] = prompt('What is your value for A?');
array[1] = prompt('What is your value for B?');
array[2] = Math.sqrt((array[0]*array[0])+(array[1]*array[1]));
console.log(array[2]);

