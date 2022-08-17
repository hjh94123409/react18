import React, { useState } from 'react'

import './App.css'

const App = () => {
    const [redBorder, setRedBorder] = useState(true)

    // const pStyle = {
    //     color: 'red',
    //     backgroundColor: 'lightyello',
    //     border: redBorder ? '10px solid red' : '10px solid blue',
    // }

    const clickHander = () => {
        setRedBorder(false)
    }

    return (
        <div>
            {/* <p style={pStyle}>我是一个段落</p> */}
            <p
                className={`border ${
                    redBorder ? 'redBorderColor' : 'blueBorderColor'
                }`}
            >
                我是一个段落
            </p>
            <button onClick={clickHander}>点我一下</button>
        </div>
    )
}

export default App
