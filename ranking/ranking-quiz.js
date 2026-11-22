
// 問題データ
// 問題を増やすときは、ここに追加します

const choiceQuestions = [
  {
    number: 1,
    choices: ["①","②","③","④"],
    answerIndex: 2,
    description: "ちなみに6位はオーストラリア、7位はインド、8位はアルゼンチン。日本は、61位のノルウェーより小さく、63位のドイツより大きい。"
  },
  {
    number: 2,
    choices: ["①","②","③","④"],
    answerIndex: 1,
    description: "船をリベリアやパナマなどに便宜的に船籍を置くことで税金を安く抑える船主が多いため、船籍ベースだとリベリアやパナマが上位に。（便宜置籍船の制度）"
  },
  {
    number: 3,
    choices: ["①","②","③","④"],
    answerIndex: 3,
    description: "日本では少子高齢化や地方の過疎化による空き家の増加が問題となっているが、スペインの空き家の割合もかなり大きい。スペインでは2008年の金融危機で不動産バブルがはじけたことが原因らしい。"
  },
  {
    number: 4,
    choices: ["①","②","③","④"],
    answerIndex: 0,
    description: "石炭の輸入量上位が東アジアに集中している。陸上のパイプラインで天然ガスを輸送できる欧米と異なり、海上輸送が主な輸送手段となっている東アジアでは天然ガスよりも石炭の方が輸入しやすいことも一因か。"
  },
  {
    number: 5,
    choices: ["①","②","③","④"],
    answerIndex: 2,
    description: "やはり映画館は欧米に多い。ちなみに、映画製作本数ランキング（2017年）は上から順に、インド、中国、アメリカ、日本、韓国、フランス…（データ出典：グローバルノート - 国際統計・国別統計専門サイト https://www.globalnote.jp/p-data-g/?dno=8720&post_no=12665 最終閲覧日2026/11/16）"
  },
  {
    number: 6,
    choices: ["①","②","③","④"],
    answerIndex: 0,
    description: "やはり軽井沢のある長野県や河口湖のある山梨県が人口あたりの別荘数が多い。人口の多い東京都は最下位に。"
  },
  {
    number: 7,
    choices: ["①","②","③","④"],
    answerIndex: 3,
    description: "面積が広い北海道、多くの島をもつ沖縄県・鹿児島県の空港数が多くなっている。東京都の空港数が多いのは、伊豆諸島が東京都に属するため。なお小笠原諸島に民間空港はない。"
  },
];

const wordQuestions = [
    {
    number: 8,
    answers: ["ガソリンスタンド"],
    description: "車社会かつ住民が分散して生活している地域で多くなっている。これはガソリン需要が多く、また店舗の統廃合が難しいためであろう。"
    },
    {
    number: 9,
    answers: ["温水洗浄便座"],
    description: "1世帯当たりの貯金額や可処分所得の多さと正の相関を示すことからウォシュレットは嗜好品であることが見て取れる。また、都心部の普及率が高くないのは、賃貸が多く、ウォシュレットの設置が困難であるためであろう。また、ウォシュレットは一般名称ではなく株式会社TOTOの登録商標である。"
    },
    {
    number: 10,
    answers: ["Twitter"],
    description: "都市部ほど利用者数が多くなっているが、これは長距離電車通勤が多い地域とおおむね一致し、通勤中に利用する人が多いことが読み取れる。なお、プロフィール情報から計算したもので実際の数字とは乖離している可能性に留意されたし。"
    },
    {
    number: 11,
    answers: ["セイコーマート"],
    description: "北海道の雄セイコーマートは三道県にしか出店していないにもかかわらずコンビニ業界６位の店舗数を誇る。ホットシェフのかつ丼が名物。"
    },
    {
    number: 12,
    answers: ["鉄道路線の営業キロ数"],
    description: "面積の大きい地域や鉄道密度の高い都市部で長くなっている。"
    },
    {
    number: 13,
    answers: ["キリスト教会", "教会"],
    description: "沖縄県は在日米軍の影響か突出している。全体的に西日本が上位にランクインしているのは、キリスト教が九州から伝来し、西日本に切支丹大名やキリスト教徒が多かったことなどが原因であろう。"
    },
    {
    number: 14,
    answers: ["鰹節", "削り節"],
    description: "沖縄では古くから出汁や薬膳として親しまれていたため消費が多くなっている。他のランクインした地域は、太平洋側に位置しカツオが名産となっている地域が主となっている。"
    },
    {
    number: 15,
    answers: ["公立小中学校のエアコン設置率"],
    description: "北海道、青森県を中心に夏季冷涼な地域が名を連ねることから推測される。"
    },
    {
    number: 16,
    answers: ["鶏卵", "卵", "たまご"],
    description: "生産コストの低さや栄養価の高さ、宗教のタブーに触れにくいことから遍く好まれている。中米地域では、安価なたんぱく源であることから、不況にあえぐ国家で国家的に鶏卵の生産が奨励されている。また、卵は生産地を選ばず保存性が高いため、長い冬を乗り切る栄養源としてロシアで重宝されている。"
    },
    {
    number: 17,
    answers: ["捕鯨頭数"],
    description: "北大西洋、北極海に面する地域では大量の肉と脂質の得られる貴重な食材として古くから親しまれてきた。アメリカやイギリスといった国も18～19世紀にかけて捕鯨が盛んであったが、これは工業用途の鯨油を目的としたもので原油の普及とともに衰退した。そのため、今なお捕鯨を行う国は鯨食文化のある国が主である。"
    },
    {
    number: 18,
    answers: ["LINE月間アクティブユーザー数"],
    description: "日本でスタンプを利用した手軽さのため好まれている。基本的に普及は限定的だが、台湾では旧正月のスタンプ、タイでは仏教スタンプが功を奏し、ローカライゼーションがうまくいったため高い利用率を誇る。"
    },
    {
    number: 19,
    answers: ["首都名の文字数"],
    description: "南アフリカは行政府をプレトリアに、立法府をケープタウンに、司法府をブルームフォンテーンに持つが、ここでは司法府があるブルームフォンテーンを首都として採用。なお、ブルームフォンテーンはアフリカーンス語で花咲く泉を意味する。"
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

