
// 問題データ
// 問題を増やすときは、ここに追加します

const choiceQuestions = [
  {
    number: 1,
    choices: ["選択肢1","選択肢2","選択肢3","選択肢4"],
    answerIndex: 0,
    description: "テスト解説"
  },

];

const wordQuestions = [
    {
    number: 2,
    answers: ["テスト正答"],
    description: "テスト解説"
    }
];

// 問題を表示する場所を取得
const quizList = document.getElementById("quiz-list");

// 2種類の問題を問題番号順に表示します。
const questions = [
  ...choiceQuestions.map(question => ({ ...question, type: "choice" })),
  ...wordQuestions.map(question => ({ ...question, type: "word" }))
].sort((a, b) => a.number - b.number);

questions.forEach(function(question, questionIndex) {
  const card = document.createElement("div");
  card.className = "question-card";

  const heading = document.createElement("p");
  heading.className = "question-number";
  heading.textContent = `問${question.number}`;
  card.appendChild(heading);

  let input;
  let choices;

  if (question.type === "choice") {
    choices = document.createElement("fieldset");
    choices.className = "answer-choices";


    question.choices.forEach(function(choice, choiceIndex) {
      const label = document.createElement("label");
      label.className = "answer-choice";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${questionIndex}`;
      radio.value = String(choiceIndex);
      const text = document.createElement("span");
      text.textContent = choice;
      label.append(radio, text);
      choices.appendChild(label);
    });
    card.appendChild(choices);

  } else {
    input = document.createElement("input");
    input.type = "text";
    input.className = "answer-input";
    input.placeholder = "回答を入力してください";
    input.setAttribute("aria-label", `問${question.number}の回答`);
    card.appendChild(input);
  }

  const buttonArea = document.createElement("div");
  buttonArea.className = "button-area";
  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.className = "check-button";
  checkButton.textContent = "答え合わせ";
  const showButton = document.createElement("button");
  showButton.type = "button";
  showButton.className = "show-button";
  showButton.textContent = "正解を見る";
  buttonArea.append(checkButton, showButton);
  card.appendChild(buttonArea);

  const result = document.createElement("p");
  result.className = "result";
  result.setAttribute("aria-live", "polite");

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = question.description || "";
  description.hidden = true;
  card.append(result, description);
  quizList.appendChild(card);

  checkButton.addEventListener("click", function() {
    description.hidden = true;
    const selected = choices ? choices.querySelector("input:checked") : null;
    const answer = input ? input.value.trim() : "";

    if (question.type === "choice" ? !selected : answer === "") {
      result.textContent = question.type === "choice"
        ? "回答を選択してください。"
        : "回答を入力してください。";
      result.style.color = "orange";
      return;
    }

    const correct = question.type === "choice"
      ? Number(selected.value) === question.answerIndex
      : question.answers.includes(answer);
    result.textContent = correct ? "正解です！" : "不正解です。";
    result.style.color = correct ? "green" : "red";
  });

  showButton.addEventListener("click", function() {
    const answer = question.type === "choice"
      ? question.choices[question.answerIndex]
      : question.answers[0];
    result.textContent = "正解：" + answer;
    result.style.color = "#2864c5";
    description.hidden = !question.description;
  });
});

