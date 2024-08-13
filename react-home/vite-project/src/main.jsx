import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// DOM에 Element ID가 root를 생성한다. 그리고 페이지에 렌더링한다.
// 파일은 App를 사용한다.
createRoot(document.getElementById('root')).render(
  <App />
)
