//! 1. 브라우저에게 페이지를 감시할 이벤트 리스너를 알려줘야 한다. 
window.addEventListener('load', init, false);

function init() {
  const button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', my_click, false);
}

function my_click(evt) {
  console.log(evt);
}

