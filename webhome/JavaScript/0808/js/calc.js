
// * .addEventListnner('event', 'callback_Function()') Method, Element, document(페이지)와 windows(브라우저)에서 사용.
// * load: 페이지가 로딩되면(body의 모든 Element가 메모리아 올라오면) -> Callback 함수를 실행해라.

// !  브라우저 상에 이벤트를 감지할 경우 window를 사용한다.
window.addEventListener('load', click_event);

// ! 페이지 내에 이벤트를 감지할 경우 document, 브라우저에게 페이지의 이벤트를 미리 알려줘야 한다.
function click_event() {
  const mybutton = document.getElementById('mybutton');
  mybutton.addEventListener('click', calc);
}

calc = () => {
  const f = document.forms[0]; // body를 f에 저장
  let result = parseInt(f.first.value) + parseInt(f.second.value); // body에서 first란 이름의 value와 second라는 이름의 value를 더하기.  
  document.getElementById('result').innerHTML = `<div style='color:red'>${result}</div>`;
};