
// 問題データ
// 問題を増やすときは、ここに追加します

const questions = [
  {
    number: 1,
    answer: ["旭川"],
    displayAnswer: "旭川",
    unit: "市",
    description: "標高100m台の内陸に大きな格子状の市街地が広がり、石狩川(上流部)や忠別川の広い河川敷が街を囲んでいます。"
  },
  {
    number: 2,
    answer: ["呉"],
    displayAnswer: "呉",
    unit: "市",
    description: "標高100〜300m級の急な山が海に迫り、入り江の港と埠頭のまわりに市街地が細長く続いています。"
  },
  {
    number: 3,
    answer: ["四日市"],
    displayAnswer: "四日市",
    unit: "市",
    description: "海側の埋立地に円形のタンクがマス目状に並び、市街地の東で複数の鉄道が並走します。鉄道の配置も判断材料です。"
  },
  {
    number: 4,
    answer: ["天理"],
    displayAnswer: "天理",
    unit: "市",
    description: "南北のJRに西から来る近鉄線が突き当たる駅前に市役所があり、西側は条里制の農地とため池の盆地、東側は山地です。"
  },
  {
    number: 5,
    answer: ["丸亀"],
    displayAnswer: "丸亀",
    unit: "市",
    description: "市街地の中にある標高約 66m の小さな城山(丸亀城)を堀が囲み、周りには平坦な農地とため池が広がります。"
  },
  {
    number: 6,
    answer: ["富田林"],
    displayAnswer: "富田林",
    unit: "市",
    description: "広い河川敷の石川の西に、細かな格子状の旧市街(寺内町)があり、市役所と多くの寺院の記号が集まっています。"
  },
  {
    number: 7,
    answer: ["亘理"],
    displayAnswer: "亘理",
    unit: "町",
    description: "東に潟湖があり、南北方向に連なる浜堤があります。南北には常磐自動車道、北西から南東にはJR常磐線が走り、標高約0〜5mの水田地帯が広がります。"
  },
  {
    number: 8,
    answer: ["赤"],
    displayAnswer: "赤",
    unit: "村",
    description: "標高約80mの谷底に村役場と単線の鉄道があり、周りは約200〜300mの山で、平地はごく狭くなっています。"
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

    if (question.answer.includes(userAnswer)) {
      result.textContent = "正解：" + question.displayAnswer;
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