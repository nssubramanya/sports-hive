// Array of sports from the navigation in Index.html
const sports = [
  "Cricket",
  "Athletics (Track & Field)",
  "Badminton",
  "Basketball",
  "Boxing",
  "F1 Motorsport",
  "Football",
  "Swimming",
  "Tennis",
];

// Populate the dropdown menu with sports
const sportSelect = document.getElementById("sport-select");
sports.forEach((sport) => {
  const option = document.createElement("option");
  option.value = sport.toLowerCase().replace(/\s+/g, "").replace(/\(|\)/g, "");
  option.textContent = sport;
  sportSelect.appendChild(option);
});

// Questions array
const questions = {
  cricket: [
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],
      correct: 1,
    },
    {
      question: "What is the maximum number of overs in a Test match?",
      options: ["450", "400", "300", "Unlimited"],
      correct: 3,
    },
    {
      question: "Which country won the Cricket World Cup in 2015?",
      options: ["India", "Australia", "England", "New Zealand"],
      correct: 1,
    },
    {
      question: "How long is a cricket pitch?",
      options: ["18 yards", "20 yards", "22 yards", "24 yards"],
      correct: 2,
    },
    {
      question:
        "Which English cricketer has scored the most test runs of all time?",
      options: [
        "Alastair Cook",
        "Kevin Pietersen",
        "Ian Botham",
        "Andrew Strauss",
      ],
      correct: 0,
    },
  ],
  athletics: [
    {
      question: "Who holds the world record for the men's 100m sprint?",
      options: ["Tyson Gay", "Yohan Blake", "Usain Bolt", "Justin Gatlin"],
      correct: 2,
    },
    {
      question: "In which event did Jessica Ennis-Hill win Olympic gold?",
      options: ["Heptathlon", "Pentathlon", "Decathlon", "Triathlon"],
      correct: 0,
    },
    {
      question: "How many events are there in a decathlon?",
      options: ["7", "8", "9", "10"],
      correct: 3,
    },
    {
      question: "Which country has won the most Olympic medals in athletics?",
      options: ["Russia", "China", "USA", "Germany"],
      correct: 2,
    },
    {
      question: "What is the standard length of an outdoor athletics track?",
      options: ["200m", "300m", "400m", "500m"],
      correct: 2,
    },
  ],
  badminton: [
    {
      question:
        "What is the maximum number of points in a standard badminton game?",
      options: ["15", "21", "30", "40"],
      correct: 1,
    },
    {
      question:
        "Which country has won the most All England Open Badminton Championships?",
      options: ["China", "Denmark", "Indonesia", "England"],
      correct: 0,
    },
    {
      question: "What is the official name of the shuttlecock in badminton?",
      options: ["Birdie", "Feather", "Cork", "Shuttle"],
      correct: 3,
    },
    {
      question:
        "Who was the first Indian to win an Olympic medal in badminton?",
      options: [
        "Saina Nehwal",
        "P. V. Sindhu",
        "Prakash Padukone",
        "Pullela Gopichand",
      ],
      correct: 0,
    },
    {
      question: "In which year did badminton become an Olympic sport?",
      options: ["1988", "1992", "1996", "2000"],
      correct: 1,
    },
  ],
  basketball: [
    {
      question:
        "Which NBA team did Michael Jordan play most of his career for?",
      options: [
        "Los Angeles Lakers",
        "Chicago Bulls",
        "Miami Heat",
        "Boston Celtics",
      ],
      correct: 1,
    },
    {
      question:
        "How many players are on the court for each team during a basketball game?",
      options: ["5", "6", "7", "8"],
      correct: 0,
    },
    {
      question: "Which player has scored the most points in NBA history?",
      options: [
        "Michael Jordan",
        "Kareem Abdul-Jabbar",
        "LeBron James",
        "Kobe Bryant",
      ],
      correct: 1,
    },
    {
      question:
        "How many championships did Bill Russell win with the Boston Celtics?",
      options: ["9", "10", "11", "12"],
      correct: 2,
    },
    {
      question:
        "Which country won the gold medal in basketball at the 2020 Olympics?",
      options: ["USA", "France", "Australia", "Spain"],
      correct: 0,
    },
  ],
  boxing: [
    {
      question: "Who won the gold medal in boxing in the 2012 Olympics?",
      options: [
        "Anthony Joshua",
        "Vasyl Lomachenko",
        "Floyd Mayweather",
        "Oscar De La Hoya",
      ],
      correct: 0,
    },
    {
      question: "What is the standard duration of a professional boxing round?",
      options: ["2 minutes", "3 minutes", "4 minutes", "5 minutes"],
      correct: 1,
    },
    {
      question: "Who holds the record for the most heavyweight title defenses?",
      options: ["Muhammad Ali", "Joe Louis", "Mike Tyson", "Lennox Lewis"],
      correct: 1,
    },
    {
      question: "Which weight class is the heaviest in boxing?",
      options: [
        "Light Heavyweight",
        "Cruiserweight",
        "Heavyweight",
        "Super Heavyweight",
      ],
      correct: 3,
    },
    {
      question: "Who was the first female boxer to win Olympic gold?",
      options: ["Katie Taylor", "Nicola Adams", "Claressa Shields", "Mary Kom"],
      correct: 1,
    },
  ],
  "f1 motorsport": [
    {
      question: "Who has won the most Formula 1 World Championships?",
      options: [
        "Lewis Hamilton",
        "Michael Schumacher",
        "Ayrton Senna",
        "Sebastian Vettel",
      ],
      correct: 1,
    },
    {
      question: "Which F1 team has the most Constructors' Championships?",
      options: ["Ferrari", "McLaren", "Red Bull", "Mercedes"],
      correct: 0,
    },
    {
      question: "Which country hosts the Monaco Grand Prix?",
      options: ["Italy", "France", "Monaco", "Spain"],
      correct: 2,
    },
    {
      question: "Who won the F1 World Championship in 2021?",
      options: [
        "Max Verstappen",
        "Lewis Hamilton",
        "Valtteri Bottas",
        "Sebastian Vettel",
      ],
      correct: 0,
    },
    {
      question: "What is the term for the start of a Formula 1 race?",
      options: ["Grid", "Pole", "Lights out", "Formation lap"],
      correct: 2,
    },
  ],
  football: [
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Italy", "Argentina", "Brazil"],
      correct: 3,
    },
    {
      question: "What is the regulation time for a football match?",
      options: ["80 minutes", "90 minutes", "100 minutes", "70 minutes"],
      correct: 1,
    },
    {
      question: "Who scored the first ever Premier League goal?",
      options: [
        "Eric Cantona",
        "Alan Shearer",
        "Brian Deane",
        "Teddy Sheringham",
      ],
      correct: 2,
    },
    {
      question: "Which team won the UEFA Champions League in 2019?",
      options: ["Liverpool", "Tottenham Hotspur", "Real Madrid", "Barcelona"],
      correct: 0,
    },
    {
      question:
        "Who holds the record for the most goals in a single Premier League season?",
      options: [
        "Thierry Henry",
        "Cristiano Ronaldo",
        "Mohamed Salah",
        "Alan Shearer",
      ],
      correct: 2,
    },
  ],
};

// Get sport name from URL
const urlParams = new URLSearchParams(window.location.search);
let sport = urlParams.get("sport");
const sportQuestions = sport ? questions[sport] : [];

// Show sport selection if no sport is selected
if (!sport) {
  document.getElementById("sport-name").style.display = "none";
  document.getElementById("select-sport-container").style.display = "flex";
} else {
  startQuiz();
}

function startQuiz() {
  if (!sport) {
    sport = document.getElementById("sport-select").value;
  }

  document.getElementById("sport-name").textContent =
    sport.charAt(0).toUpperCase() + sport.slice(1);
  document.getElementById("sport-name").style.display = "block";
  document.getElementById("select-sport-container").style.display = "none";

  // Generate questions dynamically
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  questions[sport].forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = `question ${index === 0 ? "active" : ""}`;
    questionDiv.id = `question-${index}`;

    const optionsHtml = item.options
      .map(
        (option, i) => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question-${index}" id="question-${index}-option-${i}" value="${i}">
                <label class="form-check-label" for="question-${index}-option-${i}">${option}</label>
            </div>
        `
      )
      .join("");

    questionDiv.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            ${optionsHtml}
        `;
    quizContainer.appendChild(questionDiv);
  });

  currentQuestion = 0;
  showQuestion(currentQuestion);
  updateProgress();
}

// Navigation
let currentQuestion = 0;

function updateProgress() {
  document.getElementById("progress").textContent = `Question ${
    currentQuestion + 1
  } of ${questions[sport].length}`;
}

function showQuestion(index) {
  document.querySelectorAll(".question").forEach((q, i) => {
    q.classList.toggle("active", i === index);
  });
  document.getElementById("prev-button").disabled = index === 0;
  document.getElementById("next-button").style.display =
    index === questions[sport].length - 1 ? "none" : "inline-block";
  document.getElementById("submit-button").style.display =
    index === questions[sport].length - 1 ? "inline-block" : "none";
  updateProgress();
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function nextQuestion() {
  if (currentQuestion < questions[sport].length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function submitQuiz() {
  const answers = questions[sport].map((_, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    return selectedOption ? parseInt(selectedOption.value) : null;
  });

  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[sport][index].correct
  ).length;

  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = "block";
  resultContainer.innerHTML = `<h3>You answered ${correctAnswers} out of ${questions[sport].length} questions correctly.</h3>`;

  document.getElementById("submit-button").style.display = "none";
  document.getElementById("home-button").style.display = "inline-block";
}

// Initialize progress
if (sport) updateProgress();
