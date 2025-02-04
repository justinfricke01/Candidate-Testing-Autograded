const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
 
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
 
let candidateAnswers = [];

function askForName() {
candidateName = input.question("What is your name? ");
}  
// TODO 1.1b: Ask for candidate's name //


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0;i<questions.length;i++){
    candidateAnswers[i] = input.question(questions[i]);
    console.log("Your Answer:",candidateAnswers[i]);
    console.log("Correct Answer:",correctAnswers[i],"\n");
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let numberOfCorrectAnswers = 0;
  let numberOfQuestions=candidateAnswers.length;

for (let i = 0; i < numberOfQuestions; i++){
  if (String(candidateAnswers[i]).toLowerCase() == correctAnswers[i].toLowerCase()){
    numberOfCorrectAnswers +=1;
   }
  }
  let grade = numberOfCorrectAnswers / numberOfQuestions * 100;
  let status = "passed";
  if (grade<80){
    status = "failed";
  } 
console.log(`Grade: ${grade} % ${numberOfCorrectAnswers} of ${numberOfQuestions} responses correct`);
console.log(`${status}`)
  return grade;
}
  
function runProgram() {
    askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}`);
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