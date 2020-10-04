// 1.問題文・選択肢・回答の3つを変数・定数で定義する
// 選択肢は複数あるため配列を使う
// 任意の問題文を表示する(getElementById().textContent = 変数 で差し替え)
// 任意の選択肢を表示する
// ボタンをクリックしたら正誤判定する(if文)

let question = "私は何歳でしょう？"
let answers = [
  '28歳',
  "30歳",
  "31歳"
]
const correct = "31歳"
const $button = document.getElementsByTagName('button')

// htmlへの代入を全て関数化する
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0
  let buttonLength = $button.length
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

$button[0].addEventListener('click', () =>{
  if (correct === $button[0].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
})
$button[1].addEventListener('click', () =>{
  if (correct === $button[1].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
})
$button[2].addEventListener('click', () =>{
  if (correct === $button[2].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
})


