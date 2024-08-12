//! 1. 브라우저에게 페이지를 감시할 이벤트 리스너를 알려줘야 한다. 
window.addEventListener('load', init, false);

function init() {
  const button = document.querySelector('button');
  button.addEventListener('click', check, false);
}

function check() {
  const gender = document.getElementsByName('gender');
  if (gender[0].checked) console.log("남성")
  else console.log("여성");

  const hobby = document.getElementsByName('hobby');
  let myhobby = "당신의 취미는 ";

  if (hobby.length = 0) {
    myhobby += "없군요."
  }
  else {
    for (let i = 0; i < hobby.length; i++) {
      if (hobby[i].checked) myhobby += (" | " + hobby[i].defaultValue);
    }
  }

  console.log(myhobby);
}

