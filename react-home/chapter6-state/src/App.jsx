import Counter from './components/_Counter';
import Light from './components/_Light'
import MyState from './components/MyState'
function App() {
  console.log('update'); //페이지가 Re-Rendering 되는지 확인.
  return (
    <>
      <Counter />
      <Light />
      <MyState />
    </>
  )
}

export default App
