// import Button from "./components/Button"
import Header from "./components/Header"
import Article from "./components/Article"
import Nav from "./components/Nav"
import MyComponent from "./components/MyComponent"
import YourComponent from "./components/YourComponent";
// const buttonProps = {
//   title: 'Red',
//   color: 'Red',
// }
// const array = [1, 2, 3];
// const node = <h1>Node</h1>
// function func() { return console.log("function Return") }
// const student = {
// name: "jimin",
// age: 28
// }
function App() {
  // const topics = [
  //   { id: 1, title: 'html5', body: 'html5 is ...' },
  //   { id: 2, title: 'css', body: 'css is ...' },
  //   { id: 3, title: 'javascript', body: 'javascript is ...' },
  // ]

  const employee = { age: 30 };
  return (
    <>
      {/* <Header title="React"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web" /> */}

      {/* <Button {...buttonProps} />
      <Button title={'Green'} color='green' />
      <Button title={'Blue'} color='blue' />
      <Button title={'Black'}>
        <div>자식 요소</div>
      </Button> */}

      {/* <MyComponent stringValue="name" booleanValue={1 == 1} numberValue={28} arrayValue={array} nodeValue={node} functionValue={func()} objectValue={student} /> */}

      <YourComponent objValue={employee} requiredStringValue={'문자'}></YourComponent>

    </>
  )
}
export default App
