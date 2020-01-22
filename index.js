function startQuiz() {
    $('#begin-quiz button').click(function() {
        const parentID = $(this).closest('section').attr('id');
        console.log(parentID);
        renderQuestions(parentID);
    });
}

function nextQuestion() {
    $('body').on("click", 'form #submit-button', function(event) {
            event.preventDefault();
            console.log('Form button was pressed');
            const parentID = $(this).closest('section').attr('id');
            STORE.questionIndex += 1;
            renderQuestions(parentID);
        }
    )
}

function renderQuestion(index, parentId) {
    const questionIndex = STORE.questionIndex + 1;
    $('#' + parentId).replaceWith(
        "<section id='question-quiz'>" +
            "<p id='score'>"+ "SCORE:" + STORE.score + "</p>" +
            "<p id='question-num'>" + "QUESTION:" + (questionIndex) +"</p>" +
            "<h2>" + STORE.questions[index].question + "</h2>" +
            "<form onsubmit='return false;' class='js-quiz-form'>" +
                "<input type='button' name='answer' value='" + STORE.questions[index].choices[0] + "' class='button'>" +
                "<input type='button' name='answer' value='" + STORE.questions[index].choices[1] + "' class='button'>" +
                "<input type='button' name='answer' value='" + STORE.questions[index].choices[2] + "' class='button'>" +
                "<input type='button' name='answer' value='" + STORE.questions[index].choices[3] + "' class='button'>" +
                "<input type='submit' id='submit-button' value='Submit'>" +
            "</form>" +
        "</section>"
    );
}

function renderResults(parentID) {
    $('#' + parentID).replaceWith(
        '<section id="results-quiz">' +
            '<h2>Quiz Results</h2>' +
            '<p id="results">Results: 4/5</p>' +
            '<button type="button">Try Again</button>' +
        '</section>'
    )
}

function renderQuestions(parentID) {
    const index = STORE.questionIndex;
    if(STORE.questionIndex == 5) {
        renderResults(parentID);
    } else {
        renderQuestion(index, parentID);
    }
}


function results() {
    console.log('results')
}

function handleQuizApp() {
    startQuiz();
    nextQuestion();
    results();
}

$(handleQuizApp)