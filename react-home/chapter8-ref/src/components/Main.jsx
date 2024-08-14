import { useState, useRef } from 'react';


function Main(props) {
  const nameRef = useRef(); // Ref는 {current: value}를 갖고 있는 객체이다. 

  const onSubmit = () => {
    console.log(nameRef.current) // current는 event의 target과 같다.
    if (!nameRef.current.value || nameRef.current.value === "") {
      nameRef.current.style.border = "1px solid red"; // Re-Render를 하지 않으면서, UI에 변경을 줌.
      nameRef.current.focus();
    }
  }

  return (
    <div ref={nameRef}>
      Name: <input type="text" /> <br />
      <input type="button" value="Submit" onClick={onSubmit} />
    </div>
  );
}

export default Main;