/**
 * Created by richardarrigo on 11/15/13.
 */

//budget calculator
var budget=Number(prompt('Enter your total budget amount: '));
var expenses=Number(prompt('Enter your total expenses: '));
var profit=budget-expenses;

if(profit>0){
    console.log('You have $'+profit+' extra to spend!');
}
else if(profit==0){
    console.log('Your bills are paid but you have no extra money!');
}
