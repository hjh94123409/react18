import React, { useState, useEffect } from 'react'

const App = () => {
    console.log('APP组件渲染了')
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(1)
    }, [count])

    return <div>{count}</div>
}

export default App
