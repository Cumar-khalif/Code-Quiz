var questionNumber = 0;

function startTimer() {
    var timeleft = 5;

    var downloadTimer = setInterval(function () {

        document.getElementById("countdown").innerHTML = timeleft + "&nbsp" + "seconds remaining";

        timeleft -= 1;

        if (timeleft < -1) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Time is up!"
        }
    }, 1000);
}

var qList = [
    {
        question: "1.) what is the addition of 1+1",
        options: ['2', '3', '4'],
        correctAns: '2'
    },
    {
        question: "2.) What is the multiplcation of 10*1?",
        options: ['20', '30', '10'],
        correctAns: '10'
    },
    {
        question: "3.) What is the multiplication of  5*5?",
        options: ['25', '35', '15'],
        correctAns: '25'
    }
]

function displayQuestion () {
    if(questionNumber < qList.length) {
        var questionText = document.querySelector('#questionText');
        questionText.textContent = qList[questionNumber].question;
    
        // these are radio buttons
        var option1 = document.querySelector('#option1')
        var option2 = document.querySelector('#option2')
        var option3 = document.querySelector('#option3')
    
        // these are the text on the right side of each radio button
        var option1Text = document.querySelector('#option1-text')
        var option2Text = document.querySelector('#option2-text')
        var option3Text = document.querySelector('#option3-text')
    
        // change the value of radio button
        option1.value = qList[questionNumber].options[0]
        option2.value = qList[questionNumber].options[1]
        option3.value = qList[questionNumber].options[2]
    
    
        // change the text
        option1Text.textContent = qList[questionNumber].options[0]
        option2Text.textContent = qList[questionNumber].options[1]
        option3Text.textContent = qList[questionNumber].options[2]
    
        // adds 1 to question number so that next time will show next question
        questionNumber++;
    } else {
        window.location = './score.html'
    }

}

// event listener for next button
var nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', displayQuestion);


startTimer();
displayQuestion();