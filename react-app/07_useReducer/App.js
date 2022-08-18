import React, { useState, useReducer } from 'react'

const countReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}

const App = () => {
    // const [count, setCount] = useState(0)

    const [count, countDispatch] = useReducer(countReducer, 1)

    const addHandler = () => {
        // setCount((preState) => preState + 1)
        countDispatch({ type: 'ADD' })
    }

    const subHandler = () => {
        // setCount((preState) => preState - 1)
        countDispatch({ type: 'SUB' })
    }

    return (
        <div>
            <button onClick={subHandler}>减少</button>
            <span>{count}</span>
            <button onClick={addHandler}>增加</button>
        </div>
    )
}

export default App
