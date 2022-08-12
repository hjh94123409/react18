import { useRef } from 'react'
import './App.css'
const App = () => {
    const h1Ref = useRef()
    const clickHandler = () => {
        h1Ref.current.innerText = '呵呵了'
    }
    return (
        <div className="app">
            <h1 ref={h1Ref}>我是标题</h1>
            <button onClick={clickHandler}>1</button>
            <button>2</button>
        </div>
    )
}

export default App
