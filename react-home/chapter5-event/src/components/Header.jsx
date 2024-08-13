function Header(props) {
  // react의 event는 SyntheticBaseEvent 객체이다.
  // 구조는 비슷하고 event를 발생시킨 target을 object로 갖고 있다.
  const clickHandler = (evt) => {
    console.log(evt);
  }
  return (
    <header>
      {/* <h1 onClick={clickHandler}>{props.title}</h1> */}
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;