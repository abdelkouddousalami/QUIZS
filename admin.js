document.getElementById('question-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve question details
    const questionText = document.getElementById('question-text').value;
    const questionType = document.getElementById('question-type').value;
    const correctAnswer = document.getElementById('correct-answer').value;

    // Handle options for multiple-choice questions
    const optionsContainer = document.getElementById('options-container');
    let options = [];
    if (questionType === 'multiple-choice') {
        options = [
            document.getElementById('option-1').value,
            document.getElementById('option-2').value,
            document.getElementById('option-3').value,
            document.getElementById('option-4').value
        ].filter(option => option.trim() !== '');
    }

    // Create question object
    const newQuestion = {
        text: questionText,
        type: questionType,
        options: questionType === 'multiple-choice' ? options : [],
        correctAnswer: questionType === 'true-false' ? (correctAnswer.toLowerCase() === 'true') : correctAnswer
    };

    // Save the question in localStorage
    let questions = JSON.parse(localStorage.getItem('questions')) || [];
    questions.push(newQuestion);
    localStorage.setItem('questions', JSON.stringify(questions));

    // Reset form and alert success
    document.getElementById('question-form').reset();
    alert('Question ajoutée avec succès!');
});

// Dynamically show/hide options based on question type
document.getElementById('question-type').addEventListener('change', function () {
    const optionsContainer = document.getElementById('options-container');
    if (this.value === 'multiple-choice') {
        optionsContainer.style.display = 'block';
    } else {
        optionsContainer.style.display = 'none';
    }
});
