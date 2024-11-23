document.getElementById('add-answer').addEventListener('click', () => {
    const answersContainer = document.getElementById('answers-container');
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answer');
    answerDiv.innerHTML = `
        <input type="text" placeholder="Answer text" class="answer-text" required>
        <input type="checkbox" class="answer-correct"> Correct
        <input type="text" placeholder="Feedback (optional)" class="answer-feedback">
    `;
    answersContainer.appendChild(answerDiv);
});

document.getElementById('add-question-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const questionText = document.getElementById('question').value;
    const answers = Array.from(document.querySelectorAll('.answer')).map(answerDiv => {
        return {
            text: answerDiv.querySelector('.answer-text').value,
            correct: answerDiv.querySelector('.answer-correct').checked,
            feedback: answerDiv.querySelector('.answer-feedback').value || null
        };
    });

    const questions = JSON.parse(localStorage.getItem('Quest')) || [];
    questions.push({ question: questionText, answers });
    localStorage.setItem('Quest', JSON.stringify(questions));

    alert('Question saved successfully!');
    document.getElementById('add-question-form').reset();
    document.getElementById('answers-container').innerHTML = `
        <h3>Answers</h3>
        <div class="answer">
            <input type="text" placeholder="Answer text" class="answer-text" required>
            <input type="checkbox" class="answer-correct"> Correct
            <input type="text" placeholder="Feedback (optional)" class="answer-feedback">
        </div>
    `;
});
