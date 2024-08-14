import { useState } from 'react';

const MyState = () => {
  let name = "jimin";
  const changeName = (evt) => {
    console.log(evt.target);
    name = 'Chulsu';
    console.log(name);
  } // 페이지 내에서는 바뀌었지만 페이지에서는 바뀌지 않았다. -> Re-Rendering이 되지 않음.

  let age = 28;
  const changeAge = (num, evt) => {
    age = num;
    console.log(age); // 마찬가지로 페이지 내에서만 바뀜
  }

  const [address, setAddress] = useState('Seoul');
  const [counter, setCounter] = useState(0);
  const [check, setCheck] = useState(true);
  const [array, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: 'Younghee', age: 30 });

  const changeAddress = () => setAddress('Busan');
  const increase = (num) => setCounter(counter + num);
  const decrease = () => setCounter(counter - 1);
  const changeCheck = () => setCheck(!check);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArray = array.concat(random);
    setArray(newArray);
  }
  const changeArray = (i, value) => {
    const newArray = array.map((item, idx) => idx == i ? value : item);
    setArray(newArray);
  }
  const delArray = (i) => {
    const newArray = array.filter((item, idx) => idx == i ? false : true); // filter로 입력받은 idx 빼고 새로운 배열 만듬.
    setArray(newArray);
  }

  const addObject = (key, value) => {
    const newObj = { ...user, [key]: value } // 기존 객체를 분해하고, 입력받은 key가 없다면 key와 value를 추가하고, 다시 {}로 감싸 객체를 만든다.
    setUser(newObj)
  }
  const changeObject = (key, value) => {
    const newObj = { ...user, [key]: value }; // 입력받은 key가 이미 있는 key라면 value를 수정. 
    setUser(newObj)
  }
  const deleteObject = (key) => {
    delete user[key]; // 객체에서 key를 제거한 객체를 새로 만듬.
    const newObj = { ...user }; // 주의: 주소복사가 안되어야 하니까 새로운 객체에 담아 반환
    setUser(newObj)
  }

  return (
    <div>
      <h2> function state</h2>
      <div>
        Name: {name}<br />
        Age : {age} <br />
        Address : {address} <br />
        Counter : {counter} <br />
        Check : {check ? '동의' : '동의안함'} <br />
        Array : {array[0]} / {array[1]} / {array[2]} <br />
        User : {user.name} / {user.age} / {user.address} <br />
      </div>
      <div>
        <button onClick={changeName}>Change Name</button>
        <button onClick={(evt) => { changeAge(50, evt) }}>Change Age</button>
        <button onClick={changeAddress}>Change Address</button>
        <button onClick={() => { increase(5); }}>Increase: 5</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={changeCheck}>Change Check</button>
      </div>
      <br />
      <hr />
      <div>
        <button onClick={addArray}>Add Array</button>
        <button onClick={() => { changeArray(1, 500) }}>Change Array</button>
        <button onClick={() => { delArray(1) }}>Delete Array</button>
      </div>
      <br />
      <hr />
      <div>
        <button onClick={() => { addObject('address', '서울시 영등포구') }}>Add Object</button>
        <button onClick={() => changeObject('age', 28)}>Change Object</button>
        <button onClick={() => (deleteObject('age'))}>Delete Object</button>
      </div>
    </div>
  );
};

export default MyState; <h2> function state</h2>
