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

