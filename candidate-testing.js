const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions;
 
let correctAnswers;
 
let candidateAnswers;


candidateName = input.question("What is your name?"); 
  // TODO 1.1b: Ask for candidate's name //



 candidateAnswer = input.question(question); 
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //




let gradeQuiz = ("candidateAnswers" && "correctAnswer"); 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if ("gradeQuiz" == true) {
    console.log("incorrect");
  } else {
    console.log('correct');
  }


    //TODO 3.2a use this variable to calculate the candidates score.
//TODO 3.2b calculate the candidate's percentage
// let grade = 
//   console.log(grade);


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello", + "candidateName");
   askQuestion();
   gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};