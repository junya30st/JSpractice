const quiz = [
  // 0
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドースイッチ'
    ],
    correct: 'ニンテンドースイッチ'
  },{
    // 1
    question: 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドースイッチ'
    ],
    correct: 'ニンテンドースイッチ'
  },{
    // 2
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション',
      'ニンテンドースイッチ'
    ],
    correct: 'ニンテンドースイッチ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button')


// クイズの問題文、選択肢定義
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question ;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数があればこちらを実行
  setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert('終了あなたの正解数は'+ score + '/'+ quizLength + 'です')
  }
};

// ボタンをクリックしたら正誤判定

let handlerIndex = 0;
const buttonLength = $button.length;
while( handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });