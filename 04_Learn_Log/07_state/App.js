import { useState } from 'react'
import './App.css'
const App = () => {
    console.log('App渲染了')

    const [counter, setCounter] = useState(1)
    const [user, setUser] = useState({ name: '孙悟空', age: 18 })

    const addHandler = () => {
        // setCounter(counter + 1)
        setTimeout(() => {
            setCounter((preCounter) => {
                return preCounter + 1
            })
        }, 1000)
    }
    const updateUserHandler = () => {
        // const newUser = Object.assign({}, user)
        // newUser.name = '猪八戒'
        // setUser(newUser)
        setUser({ ...user, name: '猪八戒' })
    }
    return (
        <div className="app">
            <h1>
                {counter} -- {user.name} -- {user.age}
            </h1>
            <button onClick={updateUserHandler}>1</button>
            <button onClick={addHandler}>2</button>
        </div>
    )
}

export default App
