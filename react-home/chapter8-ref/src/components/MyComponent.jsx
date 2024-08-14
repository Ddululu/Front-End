import { useState, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const useRefObj = useRef(0); // 현재 상태값만 저장.
  console.log('useRef 렌더링');
  console.log('useState 렌더링');
  console.log(useRefObj)
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count + 1)}>stat: Count up</button>
      <h1>useRef: {useRefObj.current}</h1>
      <button onClick={() => setCount(useRefObj.current++)}>ref: Count up</button>
    </div>
  );
};

export default MyComponent;