
let questions = [
    {
      question: "کدام گزینه برای تعریف متغیر در جاوااسکریپت استفاده می‌شود؟",
      options: ["var", "int", "define", "new"],
      answer: 0
    },
    {
      question: "کدام نوع داده در جاوااسکریپت وجود ندارد؟",
      options: ["string", "boolean", "float", "undefined"],
      answer: 2
    },
    {
      question: "کدام علامت برای مقایسه دقیق استفاده می‌شود؟",
      options: ["==", "===", "!=", "&&"],
      answer: 1
    },
    {
      question: "کدام متد آرایه‌ای یک مقدار جدید تولید می‌کند؟",
      options: ["push", "pop", "map", "splice"],
      answer: 2
    },
    {
      question: "کدام کلمه کلیدی برای شرط استفاده می‌شود؟",
      options: ["loop", "forEach", "if", "when"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let time = 30;
  let timerInterval;
  
  window.onload = () => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("quiz-container").style.display = "block";
      loadQuestion();
    }, 3000);
  };
  
  function loadQuestion() {

    clearInterval(timerInterval);



    time = 30;


    document.getElementById("timer").textContent = time;
    timerInterval = setInterval(() => {
      time--;
      document.getElementById("timer").textContent = time;

      if (time === 0) nextQuestion();

    }, 1000);

  
    let q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;
  
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    q.options.forEach((option, index) => {

      let btn = document.createElement("div");
      btn.classList.add("answer");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index);
      answersDiv.appendChild(btn);

    });
  }
  
  function checkAnswer(selected) {


    if (selected === questions[currentQuestion].answer) {

      score++;

    }
    nextQuestion();


  }
  
  function nextQuestion() {



    clearInterval(timerInterval);
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }



  }
  
  function showResult() {


    document.getElementById("quiz-box").style.display = "none";

    let percent = (score / questions.length) * 100;

    let result = `امتیاز شما: ${score} از ${questions.length} (${percent.toFixed(0)}%)`;

    let msg = percent >= 80 ? "عالی بودی" : percent >= 50 ? "خوبی ولی جای پیشرفت داری" : "باید بیشتر تمرین کنی ";
    document.getElementById("result-box").innerHTML = result + "<br>" + msg;

    document.getElementById("result-box").style.display = "block";
    
  }
  
