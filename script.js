let currentQuestion = 0;

const quiz = [
    {
        question: "When did we first meet?",
        options: [
            "10 May 2022",
            "12 May 2022",
            "10 June 2022",
            "You forgot already? 😏"
        ],
        correct: 0
    },
    {
        question: "Who said 'I love you' first?",
        options: [
            "Me 😌",
            "You ❤️",
            "We said it together",
            "Still waiting… 😂"
        ],
        correct: 0
    },
    {
        question: "Where did we spend our best memory together?",
        options: [
            "Class",
            "Upvan 🌳",
            "Mall",
            "At home"
        ],
        correct: 1
    },
    {
        question: "What is your favorite memory of us?",
        input: true
    }
];

function loadQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerHTML = q.question;
    const optionsDiv = document.getElementById("options");
    const message = document.getElementById("message");
    message.innerHTML = "";
    optionsDiv.innerHTML = "";

    if (q.input) {
        optionsDiv.innerHTML = `
            <input type="text" id="textAnswer" placeholder="Write your answer here">
            <button onclick="checkText()">Submit 💌</button>
        `;
    } else {
        q.options.forEach((option, index) => {
            const btn = document.createElement("button");
            btn.innerHTML = option;
            btn.onclick = () => checkAnswer(index, btn);
            optionsDiv.appendChild(btn);
        });
    }
}

function checkAnswer(selected, button) {
    const message = document.getElementById("message");

    if (selected === quiz[currentQuestion].correct) {
        button.classList.add("correct");
        message.style.color = "green";
        message.innerHTML = "Correct baby 💚";

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                loadQuestion();
            } else {
                showFinal();
            }
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerHTML = "It's wrong babe 😝";
    }
}

function checkText() {
    const text = document.getElementById("textAnswer").value.trim();
    const message = document.getElementById("message");

    if (text !== "") {
        message.style.color = "green";
        message.innerHTML = "Aww that’s cute 💕";

        setTimeout(() => {
            showFinal();
        }, 1000);
    } else {
        message.style.color = "red";
        message.innerHTML = "It's wrong babe 😝";
    }
}

function showFinal() {
    document.getElementById("quizBox").innerHTML = `
        <div class="final">
            <h2>You passed our love test 😏💖</h2>
            <p>No matter what… you are my favorite person forever 💕</p>
        </div>
    `;
}

loadQuestion();
