import React, { useState, useMemo } from 'react'

const Some = () => {
    const [count, setCount] = useState(1)

    const sum = (a, b) => {
        const begin = Date.now()
        while (1) {
            if (Date.now() - begin > 3000) {
                break
            }
        }
        console.log('函数执行了')

        return a + b
    }

    // const result = sum(123, 456)

    let a = 123
    let b = 456

    if (count % 10 === 0) {
        a += count
    }

    const result = useMemo(() => {
        return sum(a, b)
    }, [a, b])

    return (
        <div>
            <h2>result: {result}</h2>
            <h4>{count}</h4>
            <button onClick={() => setCount((preState) => preState + 1)}>
                点我
            </button>
        </div>
    )
}

export default Some
