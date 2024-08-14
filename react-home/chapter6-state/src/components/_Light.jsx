import { useState } from 'react';

const _Light = () => {
  const [light, setLight] = useState("off");
  return (
    <>
      <h1>{light}</h1>
      <button onClick={() => {
        return light == 'on' ? setLight('off') : setLight('on');
      }}>
        On/Off</button>
    </>
  );
};

export default _Light;