//Landing page
$(document).ready(readyFn);

function readyFn () {
    document.getElementById('submit').style.visibility = 'hidden';
}

//Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time remaining - " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//Quiz page
$("#start").on("click", function() {
        var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
        startTimer(twoMinutes, display);
        $("#clear").empty();
        display= document.querySelector('#questions');
        buildQuiz();
        diplay= document.querySelector('#submit');
        document.getElementById('submit').style.visibility = 'visible';
        // setTimeout(twoMinutes, 1000 * 2);
});

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");

}


var quizContainer = document.getElementById("quiz");
var myQuestions = [{
    question: "Who is the Vice President of the United States?",
    answers: {
      a: "Tim Kaine",
      b: "Mike Pence",
      c: "John Kasich",
      d: "Donald Trump"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is the Secretary of Transportation?",
    answers: {
      a: "Elaine Chao",
      b: "Steven Mnuchin",
      c: "Jim Mattis",
      d: "Ryan Zinke"
    },
    correctAnswer: "a"
  },
  {
    question: "Who is the Secretary of State?",
    answers: {
      a: "Sonny Perdue",
      b: "Jeff Sessions",
      c: "Hillary Clinton",
      d: "Mike Pompeo"
    },
    correctAnswer: "d"
  },
  {
    question: "Who is the White House Chief of Staff?",
    answers: {
      a: "Wilbur Ross",
      b: "Alex Acosta",
      c: "John Kelly",
      d: "Alex Azar"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is the Senate Minority Leader?",
    answers: {
      a: "Mitch McConnell",
      b: "John Cornyn",
      c: "Charles Schumer",
      d: "Dick Durbin"
    },
    correctAnswer: "c"
  },
];
  document.getElementById("start").addEventListener('click',buildQuiz);


//Results page
var right = 0;
var wrong = 0; 
var unAnswered = 0;

function done() {
    document.getElementById('time').style.visibility = 'hidden';
    $("#quiz").empty();
    document.getElementById('submit').style.visibility = 'hidden';
    $("#questions").html("Correct: " + right);
    $("#questions").append("<br>Incorrect: " + wrong);
    // keepScore();
}

$("#submit").on("click", done);

// I couldn't crack storing user input from the radio buttons, but if I did, I would have created a var 'input' (array with the inputs) and I would write the below function in a loop (and fire it upon submit: 

// for (var i = 0; i < input.length; i++) {
// function keepScore () {
//      if (input === myQuestions[i].correctAnswer) {
//         right++;
//     }
//     else if (input !== correct.answer) {
//         wrong++;
//     }
//     else {
//         noAnswer++
//     }   
//     }; 



