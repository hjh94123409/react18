import React, { useState, useCallback } from 'react'
import A from './A'
const App = () => {
    console.log('组件App渲染了')
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(1)
    const addHandler = useCallback(() => {
        setCount((preState) => preState + num)
        setNum((preState) => preState + 1)
    }, [num])
    return (
        <div>
            <div style={{ padding: 15, border: '1px solid #bfa' }}>
                App -- {count}
                <br />
                <button onClick={addHandler}>+1</button>
            </div>
            <div style={{ padding: 15, border: '1px solid #bfa' }}>
                <A count={count} onAdd={addHandler} />
            </div>
        </div>
    )
}

export default App
