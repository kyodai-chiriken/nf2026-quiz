
// 問題データ
// 問題を増やすときは、ここに追加します

const questions = [
  {
    number: 1,
    answer: ["亀岡", "かめおか", "カメオカ", "Kameoka", "kameoka"],
    displayAnswer: "亀岡",
    unit: "市"
  },
  {
    number: 2,
    answer: ["苫小牧", "とまこまい", "トマコマイ", "Tomakomai", "tomakomai"],
    displayAnswer: "苫小牧",
    unit: "市"
  },
  {
    number: 3,
    answer: ["加古川", "かこがわ", "カコガワ", "Kakogawa", "kakogawa"],
    displayAnswer: "加古川",
    unit: "市"
  },
  {
    number: 4,
    answer: ["台東", "たいとう", "タイトウ", "Taitou", "taitou"],
    displayAnswer: "台東",
    unit: "区"
  },
  {
    number: 5,
    answer: ["出雲", "いずも", "いづも", "イズモ", "イヅモ", "Izumo", "izumo"],
    displayAnswer: "出雲",
    unit: "市"
  },
  {
    number: 6,
    answer: ["弘前", "ひろさき", "ヒロサキ", "Hirosaki", "hirosaki"],
    displayAnswer: "弘前",
    unit: "市"
  },
  {
    number: 7,
    answer: ["大牟田", "おおむた", "オオムタ", "Oomuta", "Omuta", "Ohmuta", "oomuta", "omuta", "ohmuta"],
    displayAnswer: "大牟田",
    unit: "市"
  },
  {
    number: 8,
    answer: ["富士", "ふじ", "フジ", "Fuji", "Huji", "fuji", "huji"],
    displayAnswer: "富士",
    unit: "市"
  },
  {
    number: 9,
    answer: ["新潟", "にいがた", "ニイガタ", "Niigata", "niigata"],
    displayAnswer: "新潟",
    unit: "市"
  },
  {
    number: 10,
    answer: ["新居浜", "にいはま", "ニイハマ", "Niihama", "niihama"],
    displayAnswer: "新居浜",
    unit: "市"
  }
];

// 問題を表示する場所を取得
const quizList = document.getElementById("quiz-list");

// 問題を1つずつ表示する
questions.forEach(function(question) {

  // 問題カードを作る
  const card = document.createElement("div");
  card.className = "question-card";

  // HTMLを作成
  card.innerHTML = `
    <p class="question-number">
      問${question.number}
    </p>

    <div class="answer-row">
      <input
        type="text"
        class="answer-input"
        placeholder="回答を入力してください"
      >
      <span class="answer-unit">${question.unit || ""}</span>
    </div>

    <div class="button-area">

      <button class="check-button">
        答え合わせ
      </button>

      <button class="show-button">
        正解を見る
      </button>

    </div>

    <p class="result"></p>
  `;

  // ページに問題を追加
  quizList.appendChild(card);

  // この問題の入力欄とボタンを取得
  const input = card.querySelector(".answer-input");
  const checkButton = card.querySelector(".check-button");
  const showButton = card.querySelector(".show-button");
  const result = card.querySelector(".result");

  // 答え合わせボタン
  checkButton.addEventListener("click", function() {

    const userAnswer = input.value.trim();

    if (userAnswer === "") {
      result.textContent = "回答を入力してください。";
      result.style.color = "orange";
      return;
    }

    if (userAnswer === question.answer) {
      result.textContent = "正解です！";
      result.style.color = "green";
    } else {
      result.textContent = "不正解です。";
      result.style.color = "red";
    }

  });

  // 正解を見るボタン
  showButton.addEventListener("click", function() {

    result.textContent = "正解：" + question.answer;
    result.style.color = "#2864c5";

  });

});

  });

});
