import { useState } from 'react';

const _Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { return setCount(count + 1); }}>Increase</button>
    </div>
  );
};

export default _Counter;