import useInputValue from '../hooks/useInputValue'

function MyHook(props) {
  const [input, myChange] = useInputValue();
  return (
    <div>
      <input type="text" onChange={myChange} value={input} />
    </div>
  );
}

export default MyHook;