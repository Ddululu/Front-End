//! 1. 브라우저에게 페이지를 감시할 이벤트 리스너를 알려줘야 한다. 
window.addEventListener('load', init, false);

function init() {
  const button = document.querySelector('button');
  button.addEventListener('click', check, false);
}

function check() {
  const browser = document.querySelector('#browser');
  // console.log(browser.options); // * 드롭다운 형태의 index 형태로 가져오는 options
  // console.log(browser.selectedIndex); //* 선택한 번호를 가져오는 selectedIndex
  const mybrowser = browser.options[browser.selectedIndex].value; //! 드롭다운 형태는 선택지와 선택한 번호를 가지고 값을 가져와야 한다.
  const regdate = document.querySelector('#regdate').value;
  const comment = document.querySelector("#comment").value;
  let result = `귀하가 좋아하시는 브라우저는 ${mybrowser}\n귀하가 등록한 날짜는 ${regdate} \n귀하의 코맨트는 ${comment}`
  console.log(result);
}
