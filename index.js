

(function () {
    //1.create a function constructor
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    //prototype function for inheritance
    Question.prototype.displayQuestion =
        function () {
            console.log(this.question);

            for (var i = 0; i < this.answer.length; i++) {
                console.log(i + ':' + this.answer[i]);
            }
        }

    Question.prototype.checkAnswer =
        function (answer, callback) {
            var sc;
            if (answer === this.correct) {
                console.log("Correct answer");
                sc = callback(true);
            }
            else {
                console.log("Wrong answer, Try Again!!!");
                sc = callback(false);

            } 
            this.displayScore(sc);
        }


    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('-----------------------');
    }

    //1. creating a question
    var q1 = new Question('Is the harley coolest bike in the world',
        ['Yes', 'No'],
        0);
    var q2 = new Question('Is the sport bike better than harley',
        ['mightBe', 'exactly', 'not at all'],
        1);
    var q3 = new Question('which bike is good',
        ['harley', 'ninja', 'RSV FACTORY'],
        2);

    //storing the questions in the array
    var question = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();


    function nextQuestion() {
        //generating random question
        var n = Math.floor(Math.random() * question.length);

        //printing the QA's on the console
        question[n].displayQuestion();

        //use prompt for asking question
        var answer = prompt('Please select the answer');

        //checking correct answer

        if (answer !== 'exit') {
            question[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();



