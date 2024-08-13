import './App.css'
import Header from './components/Header'
import Button from './components/Button'
function App() {
  return (
    <>
      <Header title={"WEB"} />
      <Button up={'Count Up'} down={'Count Down'} />
    </>
  )
}

export default App
