//! 1. 브라우저에게 페이지를 감시할 이벤트 리스너를 알려줘야 한다. 
window.addEventListener('load', init, false);

//? Document: querySeclector() method
//? document 상에 일치하는 첫번째 Element를 가져옵니다.
//? () 안에는 CSS Selector와 같은 형식으로 입력받는다. 
function init() {
  const original = document.querySelector('#original'); //* id가 original인 첫번째 element를 리턴 
  original.addEventListener('change', change, false); //* change 이벤트는 대상이 포커스를 잃으면 반영된다.

  const email = document.querySelector('#email');
  email.addEventListener('change', verify, false);
}


function change(evt) {
  console.log(evt);
}

function verify(evt) {
  const user = evt.target.value;
  const regex = new RegExp('[a-z0-9]+@[a-z].[a-z]{2,3}') //? 정규식 객체는 RegExp로 만든다. 정규식은 검색.
  if (regex.exec(user)) //? 정규식 객체는 입력받은 값이 자신의 규칙과 일치하는지 검증할 수 있다. 일치하면 true, 다르면 false
  {
    document.body.style.backgroundColor = 'yellow';
    alert('Success');
  } else {
    document.body.style.backgroundColor = 'red';
    alert('Failure');
  }
}

