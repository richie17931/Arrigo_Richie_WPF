/**
 * Created by richardarrigo on 11/20/13.
 */

// Richie Arrigo | 2492145 | 11/20/13

// calculator to find the area or volume of a sphere depending on the user's input
// required parameters: radius, calculation

// create a variable to hold the radius of the sphere
var radius= parseFloat(prompt('What is the radius of the sphere?'));
// create a loop to run until the user inputs what they want to calculate(area or volume)
do{
    var calculation= prompt('Would you like to find the area or volume?');
} while(calculation.toUpperCase()!= 'AREA' && calculation.toUpperCase()!= 'VOLUME')

// create a function that takes in the radius and what they want to calculate
function sphereCalc(rad, calc){
    var area= calc.toUpperCase()=='AREA'? 4*Math.PI*(rad*rad): (4/3)*Math.PI*(rad*rad*rad)
    return area;
}

var userArea= sphereCalc(radius, calculation);
console.log(userArea.toFixed(3));

