import React from 'react';
import { useState } from 'react';
// useState는 컴포넌트에 state 변수를 추가할 수 있는 React Hook입니다. 반복문이나 조건문 안에서는 호출 불가.

function Button(props) {
  // const [state, setState()] = useState(initialState)
  // state는 현재 상태이고, setState(state)는 state를 입력받아  바꾸는 메소드.
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>현재 카운터 : {count} </h1>
      <button onClick={(evt) => { setCount(count + 1) }}>{props.up}</button>
      <button onClick={(evt) => { setCount(count - 1) }}>{props.down}</button>
    </div>
  );
}

export default Button;