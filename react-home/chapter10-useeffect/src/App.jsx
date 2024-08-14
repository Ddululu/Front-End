import { useState, useEffect, useRef } from 'react';
import MyComponents from './components/MyComponents';
function App() {
  const [count, setCount] = useState(0);
  const flag = useRef();

  // console.log(flag.current)

  // useEffect(callback, [deps]), deps는 의존성 배열로 이 배열의 값이 변경된 경우 callback 함수 실행.
  //아무것도 지정하지 않으면 page가 처음 rendering 될 때 한번만 호출
  useEffect(() => { console.log('mount...') }, [MyComponents]);

  // useEffect(() => { console.log('update...') });

  // if (flag.current) {
  //   flag.current = true;
  //   return;
  // }

  const myClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1> Count: {count}</h1>
      {count % 2 == 0 ? <MyComponents /> : null}
      <button onClick={myClick} type="button">Count up</button>
    </div>
  )
}

export default App
