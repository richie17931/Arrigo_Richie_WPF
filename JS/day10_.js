/**
 * Created by richardarrigo on 11/18/13.
 */

function cylinder(r,h){
    r*r*Math.PI*2+r*h*Math.PI*2;
}

function circle(r){
    return r*r*Math.PI;
}

console.log(cylinder(circle(10),15));

function areaPrism(xx,yy,zz){
    return xx*yy*2+yy*zz*2+zz*xx*2;
}