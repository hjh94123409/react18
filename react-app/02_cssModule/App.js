import React, { useState } from 'react'

import classess from './App.module.css'

import A from './A'

const App = () => {
    const [showBorder, setShowBorder] = useState(false)
    const clickHandler = () => {
        setShowBorder(true)
    }
    return (
        <div>
            <A />
            <p
                className={`${classess.p1} ${
                    showBorder ? classess.border : ''
                }`}
            >
                我是一个段落
            </p>
            <button onClick={clickHandler}>点我一下</button>
        </div>
    )
}

export default App
