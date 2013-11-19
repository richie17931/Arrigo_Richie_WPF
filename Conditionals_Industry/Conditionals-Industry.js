/**
 * Created by richardarrigo on 11/18/13.
 */

// Richie Arrigo | 2492145 | 11/18/2013
// Determine if it is a work day given that you have Sundays off
// you are allowed 3 sick days per year

// user's input for the current day of the week
var day=prompt('What day is it today?');
// ternary operator to determine if it is Sunday or a work day
day.toUpperCase()=='SUNDAY' ? console.log('You have the day off!') :
                              console.log('You have work today.');

// asks the user if they have any sick days left
var sickDays=prompt('How many sick days do you have left?(1-3)');
// ternary operator to determine if they have days to take off
sickDays!=0 && sickDays<=3 ? console.log('You have '+sickDays+' left and can call off.') :
                             console.log('You no longer have any days to call off and must go to work!');

// prompts the user to enter if they want to call off work
var callOff=prompt('Would you like to call off work today?(Yes/No)');
// ternary operator to show the user's choice of calling off or going to work
callOff.toUpperCase()=='YES' ? console.log('You have the day off!') :
                               console.log('Get ready and get to work!');





