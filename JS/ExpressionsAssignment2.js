/**
 * Created by richardarrigo on 11/8/13.
 */

// Industry Expressions example
// Quiz average

var numberOfQuizzes=Number(prompt('How many quiz grades to calculate?'));
var quizzes=[numberOfQuizzes];
var total= 0;

for(i=0;i<numberOfQuizzes;i++){
    var grade=Number(prompt('Enter quiz grade:'));
    quizzes[i]=grade;
    total+=quizzes[i];
}
console.log('Quiz Average:'+total/numberOfQuizzes);