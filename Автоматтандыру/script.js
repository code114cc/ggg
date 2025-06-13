const questions = [
    {
        question: "HTML дегеніміз не?",
        options: ["Бағдарламалау тілі", "Гипермәтіндік белгілеу тілі", "Мәтіндік редактор", "Дерекқор тілі"],
        correctAnswer: 2
    },
    {
        question: "Веб-беттің құрылымын белгілейтін негізгі HTML тегі:",
        options: ["<body>", "<html>", "<head>", "<title>"],
        correctAnswer: 2
    },
    {
        question: "Веб-беттегі көрінетін мазмұн қандай тег ішінде орналасады?",
        options: ["<meta>", "<script>", "<body>", "<link>"],
                                correctAnswer: 3
    },
     {
        question: "Веб-бетке сурет енгізу үшін қай тег қолданылады?",
        options: ["<picture>", "<img>", "<src>", "<image>"],
                                correctAnswer: 2
    },
     {
        question: "Веб-беттегі көрінетін мазмұн қандай тег ішінде орналасады?",
        options: ["<meta>", "<script>", "<body>", "<link>"],
                                correctAnswer: 3
    },
     {
        question: "Веб-беттегі көрінетін мазмұн қандай тег ішінде орналасады?",
        options: ["<meta>", "<script>", "<body>", "<link>"],
                                correctAnswer: 3
    },
     {
        question: "Веб-беттегі көрінетін мазмұн қандай тег ішінде орналасады?",
        options: ["<meta>", "<script>", "<body>", "<link>"],
                                correctAnswer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Тіркелу және кіру функциялары
function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('login-username').value = '';
    document.getElementById('login-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function register() {
    let username = document.getElementById('username').value;
    if (username.trim() !== "") {
        localStorage.setItem('user', username);
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
    } else {
        alert("Аты-жөніңізді енгізіңіз!");
    }
}

function login() {
    let username = document.getElementById('login-username').value;
    if (localStorage.getItem('user') === username) {
        document.getElementById('user-name').innerText = username;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('test-container').style.display = 'block';
    } else {
        alert("Қате кіру мәліметтері!");
    }
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    document.getElementById('option1').innerText = question.options[0];
    document.getElementById('option2').innerText = question.options[1];
    document.getElementById('option3').innerText = question.options[2];
    document.getElementById('option4').innerText = question.options[3];
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (answer === correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('score').innerText = `Сіздің нәтижеңіз: ${score} / ${questions.length}`;
}

function restartTest() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    displayQuestion();
}

window.onload = function() {
    displayQuestion();
};


