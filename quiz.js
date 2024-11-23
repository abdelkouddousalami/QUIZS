const Quest = [
    {
        question: "Which HTML tag is used to define a paragraph?",
        answers: [
            { text: "<para>", correct: false, feedback: "There is no `<para>` tag in HTML." },
            { text: "<p>", correct: true },
            { text: "<text>", correct: false, feedback: "There is no `<text>` tag in HTML." },
            { text: "<div>", correct: false, feedback: "`<div>` is a container tag, not specifically for paragraphs." }
        ]
    },
    {
        question: "The 'alt' attribute is used in HTML to add alternate text for an image. True or False?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false, feedback: "The `alt` attribute does provide alternate text for images." }
        ]
    },
    {
        question: "How do you create a numbered list in HTML?",
        answers: [
            { text: "<ul>", correct: false, feedback: "`<ul>` creates an unordered list with bullet points." },
            { text: "<li>", correct: false, feedback: "`<li>` is used for individual list items within lists." },
            { text: "<ol>", correct: true },
            { text: "<list>", correct: false, feedback: "There is no `<list>` tag in HTML." }
        ]
    },
    {
        question: "The `<tr>` tag is used to create a table row in HTML. True or False?",
        answers: [
            { text: "False", correct: false, feedback: "The `<tr>` tag is indeed used for table rows." },
            { text: "True", correct: true }
        ]
    },
    {
        question: "What does the `<meta charset='UTF-8'>` tag do?",
        answers: [
            { text: "Links to a CSS file", correct: false, feedback: "Linking to CSS requires the `<link>` tag." },
            { text: "Defines the document's", correct: false, feedback: "Defining the language uses `lang` on the `<html>` tag." },
            { text: "Creates a responsive layout", correct: false, feedback: "Responsiveness is managed through CSS and `<meta viewport>`." },
            { text: "Specifies the document's", correct: true }
        ]
    }
];


const Quest1 = [
    {
        question: "The <video> tag is used to embed video content in HTML.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which attribute on the <form> element specifies where to send the form data?",
        answers: [
            { text: "method", correct: false, feedback: "`method` specifies how the data is sent, not where." },
            { text: "target", correct: false, feedback: "`target` specifies how to open the result, not where to send the data." },
            { text: "action", correct: true },
            { text: "href", correct: false, feedback: "`href` is not used with forms; it's for links." }
        ]
    },
    {
        question: "Which attribute is used to set the text direction in HTML?",
        answers: [
            { text: "dir", correct: true },
            { text: "lang", correct: false, feedback: "`lang` specifies the language, not the text direction." },
            { text: "direction", correct: false, feedback: "There is no `direction` attribute in HTML." },
            { text: "text-align", correct: false, feedback: "`text-align` is a CSS property, not an HTML attribute." }
        ]
    },
    {
        question: "Which HTML attribute is used for creating a tooltip?",
        answers: [
            { text: "alt", correct: false, feedback: "`alt` is used for alternate text for images." },
            { text: "title", correct: true },
            { text: "tooltip", correct: false, feedback: "There is no `tooltip` attribute in HTML." },
            { text: "hover", correct: false, feedback: "There is no `hover` attribute in HTML." }
        ]
    },
    {
        question: "The 'title' attribute in HTML is used to create tooltips.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    }
];

const Quest2 = [
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "font-color", correct: false, feedback: "There is no `font-color` property in CSS." },
            { text: "text-color", correct: false, feedback: "There is no `text-color` property in CSS." },
            { text: "background-color", correct: false, feedback: "`background-color` changes the element's background color, not the text color." }
        ]
    },
    {
        question: "How do you center align text in CSS?",
        answers: [
            { text: "align: center;", correct: false, feedback: "There is no `align` property in CSS." },
            { text: "center-text: true;", correct: false, feedback: "There is no `center-text` property in CSS." },
            { text: "justify-content: center;", correct: false, feedback: "`justify-content` is used with flex containers, not for text alignment." },
            { text: "text-align: center;", correct: true },
        ]
    },
    {
        question: "Using 'rgba()' in CSS allows for semi-transparent backgrounds.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "How do you make the background of an element semi-transparent in CSS?",
        answers: [
            { text: "Use opacity property", correct: false, feedback: "`opacity` affects the entire element, not just the background." },
            { text: "Use color-transparency", correct: false, feedback: "There is no `color-transparency` property in CSS." },
            { text: "background-opacity", correct: false, feedback: "`background-opacity` is not a valid CSS property." },
            { text: "Use rgba() color values", correct: true },
        ]
    },
    {
        question: "What is the correct CSS syntax to select an element with the ID of 'header'?",
        answers: [
            { text: "#header", correct: true },
            { text: ".header", correct: false, feedback: "The `.` selector is used for classes, not IDs." },
            { text: "header", correct: false, feedback: "This would select all `<header>` elements, not an element with an ID." },
            { text: "*header", correct: false, feedback: "`*` is a universal selector and not specific to IDs." }
        ]
    }
];

const Quest3 = [
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "letter-spacing", correct: false, feedback: "`letter-spacing` controls space between characters, not lines." },
            { text: "text-spacing", correct: false, feedback: "`text-spacing` is not a valid CSS property." },
            { text: "margin", correct: false, feedback: "`margin` controls space outside the element, not between lines." }
        ]
    },
    {
        question: "How do you apply a box shadow to an element in CSS?",
        answers: [
            { text: "box-shadow", correct: true },
            { text: "shadow-box", correct: false, feedback: "There is no `shadow-box` property in CSS." },
            { text: "element-shadow", correct: false, feedback: "There is no `element-shadow` property in CSS." },
            { text: "border-shadow", correct: false, feedback: "`border-shadow` is not a valid CSS property." }
        ]
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false, feedback: "`font-style` changes the style, like italic, not the font." },
            { text: "font-type", correct: false, feedback: "`font-type` is not a valid CSS property." },
            { text: "font-size", correct: false, feedback: "`font-size` changes the size of the font, not the font itself." }
        ]
    },
    {
        question: "Which property would you use to hide an element from the page in CSS?",
        answers: [
            { text: "display: none;", correct: true },
            { text: "visibility: hidden;", correct: false, feedback: "`visibility: hidden;` hides the element but still takes up space." },
            { text: "hidden", correct: false, feedback: "`hidden` is not a valid CSS property." },
            { text: "remove", correct: false, feedback: "`remove` is not a valid CSS property." }
        ]
    },
    {
        question: "How do you specify the layout of elements using CSS Grid?",
        answers: [
            { text: "display: grid;", correct: true },
            { text: "grid-layout: true;", correct: false, feedback: "There is no `grid-layout` property in CSS." },
            { text: "flexbox: grid;", correct: false, feedback: "This is incorrect; `flexbox` and `grid` are two different layout systems." },
            { text: "grid-template", correct: false, feedback: "`grid-template` is used to define grid structure, but it requires `display: grid;` to work." }
        ]
    }
];


const Quest4 = [
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false, feedback: "`<ol>` creates an ordered (numbered) list." },
            { text: "<li>", correct: false, feedback: "`<li>` defines list items, but cannot create a list by itself." },
            { text: "<list>", correct: false, feedback: "There is no `<list>` tag in HTML." }
        ]
    },
    {
        question: "How can you make a website responsive using CSS?",
        answers: [
            { text: "Using media queries", correct: true },
            { text: "Using `@import` statements", correct: false, feedback: "`@import` is used to import external CSS files, not to create responsive layouts." },
            { text: "Using fixed widths", correct: false, feedback: "Fixed widths do not allow flexibility for responsiveness." },
            { text: "Using `position: absolute;`", correct: false, feedback: "`position: absolute;` is used for positioning, not for making a layout responsive." }
        ]
    },
    {
        question: "What does the `flexbox` layout system provide in CSS?",
        answers: [
            { text: "Flexible and responsive layouts", correct: true },
            { text: "A way to align content vertically only", correct: false, feedback: "Flexbox allows both vertical and horizontal alignment." },
            { text: "A way to create a grid system", correct: false, feedback: "For grids, use CSS Grid, not Flexbox." },
            { text: "A method for centering only", correct: false, feedback: "Flexbox is much more versatile and can do more than just centering." }
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false, feedback: "`color` changes the text color, not the background color." },
            { text: "background", correct: false, feedback: "`background` is shorthand, but `background-color` is more specific." },
            { text: "bg-color", correct: false, feedback: "`bg-color` is not a valid CSS property." }
        ]
    },
    {
        question: "Which CSS property is used to add space between the content of an element and its border?",
        answers: [
            { text: "padding", correct: true },
            { text: "margin", correct: false, feedback: "`margin` creates space outside of an element's border, not inside." },
            { text: "border-spacing", correct: false, feedback: "`border-spacing` is used in tables, not general elements." },
            { text: "content-spacing", correct: false, feedback: "`content-spacing` is not a valid CSS property." }
        ]
    }
];

const Quest5 = [
    {
        question: "How do you create a link in HTML?",
        answers: [
            { text: "<a href='URL'>", correct: true },
            { text: "<link>", correct: false, feedback: "`<link>` is used for linking external resources like stylesheets." },
            { text: "<url>", correct: false, feedback: "There is no `<url>` tag in HTML." },
            { text: "<anchor>", correct: false, feedback: "`<anchor>` is not a valid tag in HTML." }
        ]
    },
    {
        question: "What does the `<iframe>` element do in HTML?",
        answers: [
            { text: "It embeds another HTML page within the current page", correct: true },
            { text: "It creates a clickable link", correct: false, feedback: "`<iframe>` is used for embedding, not for creating links." },
            { text: "It inserts a form into the page", correct: false, feedback: "`<iframe>` is not used for forms, that is `<form>`." },
            { text: "It defines an image on the page", correct: false, feedback: "`<iframe>` does not deal with images, that is the `<img>` tag." }
        ]
    },
    {
        question: "Which HTML element is used to define a clickable button?",
        answers: [
            { text: "<button>", correct: true },
            { text: "<input type='button'>", correct: false, feedback: "`<input>` with `type='button'` is another way to create a button, but `<button>` is more flexible." },
            { text: "<link>", correct: false, feedback: "`<link>` is used to link external resources, not to create buttons." },
            { text: "<click>", correct: false, feedback: "There is no `<click>` element in HTML." }
        ]
    },
    {
        question: "Which element is used to define a navigation bar in HTML?",
        answers: [
            { text: "<nav>", correct: true },
            { text: "<menu>", correct: false, feedback: "`<menu>` is used for creating a list of commands, not a navigation bar." },
            { text: "<header>", correct: false, feedback: "`<header>` is used for defining the top section of a page, not specifically for navigation." },
            { text: "<navbar>", correct: false, feedback: "`<navbar>` is not a valid HTML element." }
        ]
    },
    {
        question: "Which HTML element is used to display an image?",
        answers: [
            { text: "<img>", correct: true },
            { text: "<image>", correct: false, feedback: "`<image>` is not a valid HTML element." },
            { text: "<picture>", correct: false, feedback: "`<picture>` is used for responsive images, but `<img>` is for displaying the image." },
            { text: "<photo>", correct: false, feedback: "`<photo>` is not a valid HTML element." }
        ]
    }
];

const Quest6 = [
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false, feedback: "`<link>` is used for linking external resources like stylesheets." },
            { text: "<href>", correct: false, feedback: "`<href>` is not a valid tag, it is an attribute used in `<a>`." },
            { text: "<url>", correct: false, feedback: "`<url>` is not a valid tag." }
        ]
    },
    {
        question: "Which attribute is used to define the destination of a hyperlink?",
        answers: [
            { text: "href", correct: true },
            { text: "src", correct: false, feedback: "`src` is used to define the source of an image or iframe." },
            { text: "alt", correct: false, feedback: "`alt` provides alternate text for images." },
            { text: "target", correct: false, feedback: "`target` specifies how the linked document will open, not where it links to." }
        ]
    },
    {
        question: "What is the purpose of the `<head>` tag in HTML?",
        answers: [
            { text: "Contains meta-information about the document", correct: true },
            { text: "Contains the main content of the page", correct: false, feedback: "The content goes inside the `<body>` tag, not the `<head>`." },
            { text: "Defines the title of the document", correct: false, feedback: "The title is defined inside the `<title>` tag, which is inside the `<head>`." },
            { text: "Defines a script", correct: false, feedback: "Scripts are defined using the `<script>` tag, which can be in the `<head>` or the `<body>`." }
        ]
    },
    {
        question: "What is the correct way to include a comment in HTML?",
        answers: [
            { text: "<!-- This is a comment -->", correct: true },
            { text: "// This is a comment", correct: false, feedback: "`//` is used for comments in JavaScript, not in HTML." },
            { text: "/* This is a comment */", correct: false, feedback: "`/* ... */` is used for comments in CSS, not in HTML." },
            { text: "<comment> This is a comment </comment>", correct: false, feedback: "`<comment>` is not a valid HTML tag." }
        ]
    },
    {
        question: "How do you add a JavaScript file to an HTML document?",
        answers: [
            { text: "<script src='file.js'></script>", correct: true },
            { text: "<js src='file.js'></js>", correct: false, feedback: "`<js>` is not a valid HTML tag for including scripts." },
            { text: "<link href='file.js' />", correct: false, feedback: "`<link>` is used for stylesheets, not scripts." },
            { text: "<javascript src='file.js'></javascript>", correct: false, feedback: "`<javascript>` is not a valid tag." }
        ]
    }
];


const Quest7 = [
    {
        question: "The `border-radius` property in CSS is used to make the corners of an element rounded.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false, feedback: "`border-radius` is used to round corners, so False is incorrect." }
        ]
    },
    {
        question: "Which of the following CSS properties controls the font style?",
        answers: [
            { text: "font-style", correct: true },
            { text: "text-style", correct: false, feedback: "`text-style` is not a valid CSS property." },
            { text: "font-type", correct: false, feedback: "`font-type` is not a valid CSS property." },
            { text: "style-font", correct: false, feedback: "`style-font` is not a valid CSS property." }
        ]
    },
    {
        question: "In JavaScript, `null` represents an absence of value.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false, feedback: "`null` is used to represent no value or an empty object reference." }
        ]
    },
    {
        question: "What is the correct syntax to select an element by its class in CSS?",
        answers: [
            { text: ".className", correct: true },
            { text: "#className", correct: false, feedback: "`#` is used for selecting elements by `id`, not by class." },
            { text: "class.className", correct: false, feedback: "`class.` is not valid syntax for selecting by class." },
            { text: "className", correct: false, feedback: "`className` is used in JavaScript, not in CSS for selection." }
        ]
    },
    {
        question: "In JavaScript, the `typeof` operator is used to check the data type of a variable.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false, feedback: "`typeof` is used to determine the type of a variable, so False is incorrect." }
        ]
    },
    {
        question: "Which method is used to add a new element to an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "append()", correct: false, feedback: "`append()` is not a valid JavaScript method for arrays." },
            { text: "add()", correct: false, feedback: "`add()` is not a method for arrays in JavaScript." },
            { text: "insert()", correct: false, feedback: "`insert()` is not a valid array method in JavaScript." }
        ]
    }
];

let dash = document.querySelector('.admp');

function view() {
    dash.classList.add('visible');
    
}

function remv() {
    dash.classList.remove('visible');
   
}


let currentQuestionIndex = JSON.parse(localStorage.getItem("currentQuestionIndex")) || 0;
let score = JSON.parse(localStorage.getItem("score")) || 0;
const questionElement = document.querySelector(".qst");
const answerElements = document.querySelectorAll(".answrs");
const nextButton = document.querySelector(".btn2");
const scoreElement = document.querySelector(".sd");
const questionCountElement = document.querySelector(".question-count");
const progressBar = document.getElementById("progress-bar");

let userName = localStorage.getItem("userName") || prompt("Please enter your name to start the quiz:");
if (!localStorage.getItem("userName") && userName) {
    localStorage.setItem("userName", userName);
}

let currentQuiz = JSON.parse(localStorage.getItem("quiz")) || Quest;

function saveProgress() {
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
    localStorage.setItem("score", score);
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / currentQuiz.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showQuestion() {
    const currentQuestion = currentQuiz[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    questionCountElement.innerText = `${currentQuestionIndex + 1}/${currentQuiz.length}`;

    // Determine if the question has only two answers
    const isTrueFalse = currentQuestion.answers.length === 2;

    answerElements.forEach((element, index) => {
        if (currentQuestion.answers[index]) {
            element.innerText = currentQuestion.answers[index].text;
            element.parentElement.style.display = "flex";
            element.parentElement.classList.remove("correct", "wrong");
            element.parentElement.style.pointerEvents = "auto";

            element.parentElement.onclick = () => selectAnswer(currentQuestion.answers[index], element);
        } else {
            element.parentElement.style.display = "none";
        }
    });

    if (isTrueFalse) {
        document.querySelectorAll(".listans li").forEach((li, idx) => {
            if (idx > 1) {
                li.style.display = "none";
            }
        });
    } else {
        document.querySelectorAll(".listans li").forEach((li) => {
            li.style.display = "flex";
        });
    }

    updateProgressBar();
}


function selectAnswer(answer, element) {
    if (answer.correct) {
        element.parentElement.classList.add("correct");
        score += 10;
        score++;
        scoreElement.innerText = `${score} pts`;
    } else {
        element.parentElement.classList.add("wrong");
        showFeedback(answer.feedback);
    }

    answerElements.forEach(el => el.parentElement.style.pointerEvents = "none");
    saveProgress();
}

function showFeedback(message) {
    const feedbackElement = document.createElement("p");
    feedbackElement.classList.add("feedback");
    feedbackElement.innerText = message;
    document.querySelector(".firstquiz").appendChild(feedbackElement);
}

function nextQuestion() {
    currentQuestionIndex++;
    const feedbackElement = document.querySelector(".feedback");
    if (feedbackElement) feedbackElement.remove();
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    localStorage.setItem("score", score);
    localStorage.setItem("userName", userName);
    localStorage.removeItem("currentQuestionIndex");
    window.location.href = "score.html";
}

nextButton.addEventListener("click", () => {
    answerElements.forEach(el => el.parentElement.style.pointerEvents = "auto");
    nextQuestion();
});

function validateTextAnswer(userInput, correctAnswer) {
    if (userInput.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        showFeedback("Correct!");
        return true;
    } else {
        const suggestion = correctAnswer.split(' ').find(word => userInput.toLowerCase().includes(word.toLowerCase()));
        if (suggestion) {
            showFeedback(`Did you mean: ${suggestion}?`);
        } else {
            showFeedback("Incorrect, try again.");
        }
        return false;
    }
}

showQuestion();

document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');

    // Load questions from localStorage or initialize an empty array
    const questions = JSON.parse(localStorage.getItem('Quest')) || [];
    console.log('Loaded questions from localStorage:', questions);

    if (!questions || questions.length === 0) {
        quizContainer.innerHTML = '<p>No quizzes available. Please add quizzes through the admin page.</p>';
        return;
    }

    questions.forEach((quiz, index) => {
        console.log(`Processing quiz ${index + 1}:`, quiz);

        const quizCard = document.createElement('div');
        quizCard.classList.add('quiz');
        quizCard.innerHTML = `
            <img src="images/px1.jpg" alt="Quiz Image">
            <h1>Quiz ${index + 1}</h1>
            <h3>${quiz.question}</h3>
            <button class="btn" onclick="startQuiz(${index})">Play Now</button>
        `;
        quizContainer.appendChild(quizCard);
    });
});

function startQuiz(index) {
    localStorage.setItem('currentQuiz', index);
    window.location.href = 'quiz.html';
}
