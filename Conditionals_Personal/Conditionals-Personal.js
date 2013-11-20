/**
 * Created by richardarrigo on 11/15/13.
 */

// Richie Arrigo | 2492145 | 11/18/2013
// budget calculator

// do while loop to run until the user enters a valid amount for their budget
do{
    //the total amount of money the user has
    var budget=parseFloat(prompt('Enter your total budget amount: '));
} while(isNaN(budget)==true)
// do while loop to run until the user enters a valid amount for their expenses
do{
    //the total amount of the users bills and expenses
    var expenses=parseFloat(prompt('Enter your total expenses: '));
} while(isNaN(expenses)==true)

//calculates the amount of money left after bills are paid
var profit= budget-expenses;

// to check if the user has money left over after bills are paid
if(profit>0){
    console.log('You have $'+profit.toFixed(2)+' extra to spend!');
}
// check if the user has exactly $0.00 left over after paying bills
else if(profit==0){
    console.log('Your bills are paid but you have no extra money!');
}
// check if the user is in debt after paying their bills
else{
    console.log('You are $'+Math.abs(profit.toFixed(2))+' in debt!');
}