import React, { useState } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    city: '',
    age: 0,
    gender: '',
  });
  const onMyChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: [evt.target.value]
    })
  }


  const cityArray = ['Seoul', 'Busan', 'Incheon', 'Taegu', "gwangju"]

  const mySubmit = () => {
    const result = `<ul>
  <li>이름:${input.name}</li>
  <li>생년월일:${input.birth}</li>
  <li>도시:${input.city}</li>
  <li>나이:${input.age}</li>
  <li>성별:${input.gender}</li>
  </ul>`;
    document.querySelector('#result').innerHTML = result;
  }
  console.log(input)
  console.log('update')
  return (
    <>
      <form>
        <fieldset>
          <legend>개인정보</legend>
          <p>Name : <input type="text" placeholder="이름을 입력하세요." name="name" onChange={onMyChange} /> </p>
          <p>Birth : <input type="date" name="birth" onChange={onMyChange} /></p>
          <p>City :
            <select name="city" onChange={onMyChange}>
              <option value="">---선택하세요---</option>
              {cityArray.map((item, index) =>
                <option key={index} value={item}>{item}</option>
              )}
            </select>
          </p>
          <p>Age : <input type="number" name="age" max="60" onChange={onMyChange} placeholder="0" /></p>
          <p>Gender :
            <input type="radio" name="gender" value="남성" onChange={onMyChange} />남성&nbsp;&nbsp;
            <input type="radio" name="gender" value="여성" onChange={onMyChange} />여성
          </p>
        </fieldset>
        <fieldset>
          <legend>제출하기</legend>
          <button type="button" onClick={mySubmit}>Submit</button>
        </fieldset>
      </form>
      <hr />
      <div id="result">결과는 여기에
        <p>Name: {input.name}</p>
        <p>Birth: {input.birth}</p>
        <p>City: {input.city}</p>
        <p>Age: {input.age}</p>
        <p>Gender: {input.gender}</p>
      </div>
    </>
  );
};

export default Register;