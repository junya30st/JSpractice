// 1.問題文・選択肢・回答の3つを変数・定数で定義する
// 選択肢は複数あるため配列を使う
// 任意の問題文を表示する(getElementById().textContent = 変数 で差し替え)
// 任意の選択肢を表示する
// ボタンをクリックしたら正誤判定する(if文)

let quiz = [
  {
    question: '私は何歳でしょう？',
    answers: [
      '29歳', '30歳', '31歳'
    ],
    correct: '31歳'
  },
  {
    question: '私の血液型は何でしょう？',
    answers: [
      'A', 'B', 'O'
    ],
    correct: 'O'
  },
  {
    question: '私の出身はどこでしょう？',
    answers: [
      '千葉', '福岡', '東京'
    ],
    correct: '福岡'
  }
]

let quizIndex = 0
// let question = "私は何歳でしょう？"
// let answers = [
//   '28歳',
//   "30歳",
//   "31歳"
// ]
// const correct = "31歳"
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length
// htmlへの代入を全て関数化する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
  handlerIndex++;
};

// $button[0].addEventListener('click', (e) =>{
//   clickHandler(e);
// })
// $button[1].addEventListener('click', (e) =>{
//   clickHandler(e);
// })
// $button[2].addEventListener('click', (e) =>{
//   clickHandler(e);
// })


// $button[0].addEventListener('click', (e) =>{
//   if (quiz[quizIndex].correct === e.target.textContent){
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// })