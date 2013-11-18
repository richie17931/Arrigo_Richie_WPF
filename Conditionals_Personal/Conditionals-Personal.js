/**
 * Created by richardarrigo on 11/15/13.
 */

//budget calculator

//the total amount of money the user has
var budget=Number(prompt('Enter your total budget amount: '));
//the total amount of the users bills and expenses
var expenses=Number(prompt('Enter your total expenses: '));
//calculates the amount of money left after bills are paid
var profit=budget-expenses;

if(profit>0){
    console.log('You have $'+profit+' extra to spend!');
}
else if(profit==0){
    console.log('Your bills are paid but you have no extra money!');
}
else{
    console.log('You are $'+Math.abs(profit)+' in debt!');
}