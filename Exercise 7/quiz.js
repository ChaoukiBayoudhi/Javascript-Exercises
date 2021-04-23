//let currentScoreZone=document.getElementById("currentScore_id");
//let rightResponseZone=document.getElementById("rightAnswer_id");
let container = document.getElementById("quizContainer_id");
let questionZone = document.getElementById("question_id");
let opt1 = document.getElementById("prop1");
let opt2 = document.getElementById("prop2");
let opt3 = document.getElementById("prop3");
let opt4 = document.getElementById("prop4");
let nextButton = document.getElementById("nextButton_id");
let resultZone = document.getElementById("result_id");

class Question {
    constructor(text, propositions, rightAnswer, points) {
        this.text = text;
        this.propositions = propositions;
        this.rightAnswer = rightAnswer;
        this.points = points;
    }

}

class Quiz {
    constructor(listQuestions, indexCourantQuestion, totalScore, correctAnswers) {
        this.listQuestions = listQuestions;
        this.indexCourantQuestion = indexCourantQuestion;
        this.totalScore = totalScore;
        this.correctAnswers = correctAnswers;
    }
    initializeQuestions() {
            listQuestions = [
                new Question("What is drone ?", ["a ground vehicule", "an air-ground vehicule", "an unpiloted aircraft", "I don't know"], "an unpiloted aircraft", 20),
                new Question("When the first pilote vehicule were developed ?", ["during the second world war", "during the first world war", "during the cold war", "I don't know"], "during the first world war", 30),
                new Question("Where the first pilote vehicule were developed ?", ["Russia", "Iran", "USA", "I don't know"], "USA", 30)
            ];
        }
        // totalScore()
        // {
        //     currentScoreZone.innerHTML="Your Current Score is <strong>"+totalScore+"</strong>";
        // }
        // showRightResponse(questionNum)
        // {
        //     rightResponseZone.innerHTML="The right answer is <strong>"+listQuestions[questionNum-1].rightAnswer+"</strong>";
        // }
    mixQuestions() {
            let temp;
            let steps = 10 + listQuestions.length / 10;
            for (let i = 1; i <= steps; i++) {
                let index1 = this.randomInt(listQuestions.length);
                let index2 = this.randomInt(listQuestions.length);
                //swap questions at index1 and index2
                temp = listQuestions[index1];
                listQuestions[index1] = listQuestions[index2];
                listQuestions[index2] = temp;

            }
        }
        //return a value between 0 and max-1
    randomInt(max) {
        return Math.floor(Math.random() * max);
    }
    setQuestion(questionNum) //initialize the HTML element of the Quiz Container
        {

            let question = listQuestions[questionNum - 1];
            this.indexCourantQuestion = questionNum - 1;
            questionZone.textContent = questionNum + '. ' + question.text;
            opt1.textContent = question.propositions[0];
            opt2.textContent = question.propositions[1];
            opt3.textContent = question.propositions[2];
            opt4.textContent = question.propositions[3];
        }
    showNextQuestion() {
        let selectedProposition = document.querySelector("input[type=radio]:checked");
        if (!selectedProposition)
            alert("You should select an answer");
        else {
            let numAnswer = selectedProposition.value;
            let answer = listQuestions[this.indexCourantQuestion].propositions[numAnswer - 1];
            let rtAnswer = listQuestions[this.indexCourantQuestion].rightAnswer;
            if (answer == rtAnswer) {
                this.totalScore += listQuestions[this.indexCourantQuestion].points;
                this.correctAnswers++;
            } else {
                alert("the right answer was \"" + rtAnswer + "\"");
            }
            selectedProposition.checked = false;
            this.indexCourantQuestion++;
            if (this.indexCourantQuestion == listQuestions.length - 1) { //the last question
                nextButton.textContent = "Finish";
                this.setQuestion(this.indexCourantQuestion + 1);
            } else
            if (this.indexCourantQuestion == listQuestions.length) { //the user has achieved the Quiz
                container.style.display = 'none';
                resultZone.style.display = '';
                let average = (this.correctAnswers / listQuestions.length).toFixed(2);
                let resultStr = "your total score is " + this.totalScore;
                if (average >= 0.8) {
                    resultStr += "<br>You <span style='color: green;'>won</span> !! <br>You have answered <span style='color: red;'>" + average * 100 + " % </span> of questions.";
                } else {
                    resultStr += "<br>You <span style='color: gray;'>lost</span>. <br>You have answered <span style='color: red;'>" + average * 100 + " % </span> of questions.";
                }
                resultZone.innerHTML = resultStr;
            } else {
                this.setQuestion(this.indexCourantQuestion + 1);
            }
        }

    }
}
let listQuestions = [];
let q1 = new Quiz(listQuestions, 0, 0, 0);
q1.initializeQuestions();
q1.mixQuestions();
window.onload = (function() { q1.setQuestion(1); });
//or
//window.onload=(x=>q1.setQuestion(1)); //using lambda expression
nextButton.onclick = (x => q1.showNextQuestion());