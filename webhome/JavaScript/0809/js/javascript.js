//! 1. 브라우저에게 페이지를 감시할 이벤트 리스너를 알려줘야 한다. 
window.addEventListener('load', init, false);

function init() {
  const button = document.querySelector('button')
  button.addEventListener('click', () => {
    const correct = [11, 5, 42, 18, 11];
    const date = new Date();
    let count = 5;

    const name = document.getElementById('name').value; // name 입력박스에서 입력받은 값(이름) 가져오기
    const exam = document.getElementsByName('exam'); // exam 입력박스에서 입력받은 답들을 가져오기

    // 박스 별로 정답 배열과 비교하여 맞으면 틀린 갯수 - , 틀렸으면 빨간색으로 스타일 변경
    console.log(exam[0].value);
    for (i = 0; i < exam.length; i++) {
      if (parseInt(exam[i].value) === correct[i]) {
        count--;
      } else {
        exam[i].style.backgroundColor = "red"
        exam[i].style.color = 'white';
      }
    }
    let score = (5 - count) / 5 * 100

    let p = document.createElement('p'); //<p></p>
    let text = `
    ${name}님의 ${date.toLocaleDateString()} 계산 퀴즈 결과<br>
    총 5문제 중 ${count} 문제를 틀리셨습니다.<br><br>
    틀린 답은 빨간색으로 표시하였습니다.<br><br>
    최종 점수는 <span style="color:red; font-weight:bold;">${score}</span>점 입니다.
`;
    p.innerHTML = text;
    const output = document.querySelector('#output');
    output.appendChild(p);
    output.style.visibility = 'visible';

  })
}