/**
 * Created by richardarrigo on 11/20/13.
 */

// Richie Arrigo | 2492145 | 11/20/13
// calculator for the area of a trapezoid in order to cover the surface area with tiles
// required parameters: base1, base2, height

// create a variable to hold the prompted value for base one of the trapezoid
var baseOne= Number(prompt('What is the length of base one(B1)?'));
// create a variable to hold the prompted value for base two of the trapezoid
var baseTwo= Number(prompt('What is the length of base two(B2)?'));
// create a variable to hold the prompted value for the height of the trapezoid
var height= Number(prompt('What is the height?'));

// create a function body
function trapezoidAreaCalc(b1,b2,h){
    var area= h/2*(b1+b2);
    return area;
}

var userArea= trapezoidAreaCalc(baseOne,baseTwo,height);
console.log(userArea);






