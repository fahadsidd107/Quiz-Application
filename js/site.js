
let questions = [
  {
    id: 1,
    question: "What is the full form of FIFA?",
    answer: "Fédération Internationale de Football Association",
    options: [
      "France India Football Arena",
      "Foundation of Football Auction",
      "Fédération Internationale de Football Association",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "UCL is organised by",
    answer: "UEFA",
    options: [
      "UEFA",
      "FIFA",
      "NATO",
      "ICC"
    ]
  },
  {
    id: 3,
    question: "Which club won the most number of UCLs",
    answer: "Real Madrid CF",
    options: [
      "FC Barcelona",
      "Juventus",
      "Real Madrid CF",
      "Dortmund"
    ]
  },
  {
    id: 4,
    question: "Who is the greatest Football player of all times",
    answer: "Cristiano Ronaldo",
    options: [
      "Cristiano Ronaldo",
      "Cristiano Ronaldo",
      "Cristiano Ronaldo",
      "Cristiano Ronaldo"
    ]
  },
  {
    id: 5,
    question: "Which country won 2014 world cup?",
    answer: "Germany",
    options: [
      "France",
      "Brazil",
      "Germany",
      "Portugal"
    ]
  },
  {
    id: 6,
    question: "Which country won 2016 Euro?",
    answer: "Portugal",
    options: [
      "France",
      "Brazil",
      "Germany",
      "Portugal"
    ]
  },
  {
    id: 7,
    question: "Who is the captain of FC Barcelona",
    answer: "Lionel Messi",
    options: [
      "Andres Iniesta",
      "Carlos Puyol",
      "Sergio Busquets",
      "Lionel Messi"
    ]
  },
  {
    id: 8,
    question: "Who is the top Assist maker in the history of Football?",
    answer: "Lionel Messi",
    options: [
      "Andres Iniesta",
      "Mesut Ozil",
      "Cristiano Ronaldo",
      "Lionel Messi"
    ]
  },
  {
    id: 9,
    question: "Who is the top Goal scorer in the history of Football ?",
    answer: "Cristiano Ronaldo",
    options: [
      "Andres Iniesta",
      "Mesut Ozil",
      "Cristiano Ronaldo",
      "Lionel Messi"
    ]
  },
  {
    id: 10,
    question: "What is Arsenal ?",
    answer: "All of the above",
    options: [
      "Pain",
      "Shame",
      "Disgrace",
      "All of the above"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // agar akhri sawal hai to humko yeh result k page pe le jaye
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check krne k liye k jawab ghlt hai ya sahi.
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
