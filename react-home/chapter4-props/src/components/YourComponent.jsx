import React from 'react';
import datatype from 'prop-types';

function YourComponent(props) {
  const {
    objValue,
    requiredStringValue
  } = props;
  return (
    <div>
      {/* <div>객체값 : {JSON.stringify(objValue)}</div> */}
      {/* Json 형식으로 객체를 입력받는 JSON.stringify(object) */}
      <div>객체값 : {(Object.entries(objValue))}</div>
      <div>필수값 : {requiredStringValue}</div>
    </div>
  );
}

YourComponent.propTypes = {
  objValue: datatype.shape({
    name: datatype.string,
    age: datatype.number,
  }),
  // object의 요소마다 형태를 지정할때는 shape()로 key마다 타입을 지정 가능.
  requiredStringValue: datatype.string.isRequired
  // isRequired는 전달받은 인수가 반드시 포함되어야 한다. 아니면 Warning 반환 -> 예외 처리용.
}
export default YourComponent; 