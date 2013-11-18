/**
 * Created by richardarrigo on 11/18/13.
 */

// Determine if it is a work day given that you have Sundays off

// user's input for the current day of the week
var day=prompt('What day is it today?');
// ternary operator to determine if it is Sunday or a work day
day=='Sunday'? console.log('You have the day off!') :
              console.log('You have work today.');



