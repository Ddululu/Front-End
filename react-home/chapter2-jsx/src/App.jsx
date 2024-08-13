import './App.css'
import Child from './components/ChildComponent'
import FragmentComp from './components/FragmentComp'
//React에서 js나 jsx는 생략 한다.

const elem = <h1>Hello,World!</h1>
const name = 'Jimin';
const age = 28;
const array = [10, 20];
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
const MakeDom = () => {
  return (
    <div>
      <h3> Make DOM</h3>
      <div>Hello, World</div>
      <div>
        Name: {name}<br />
        Age : {age} <br />
        Array : {array[0]} / {array[1]} / {array[2]} <br />
        onAdd : {onAdd(4, 8)} <br /> <hr />
      </div>
    </div>
  )
}


function App() {
  return (
    <>
      <Child />
      <FragmentComp />
      <hr />
      <MakeDom />
    </>
  )
}

export default App
