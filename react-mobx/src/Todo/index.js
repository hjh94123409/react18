import './index.css'
import { useState } from 'react'
import useStore from '../store'
import { observer } from 'mobx-react-lite'
import uuid from 'react-uuid'

function Task() {
    const { taskStore } = useStore()
    // console.log(taskStore)
    // const [check, setCheck] = useState
    const changeHandler = (id, e) => {
        // console.log(id, e.target.value)
        taskStore.singleCheck(id, e.target.checked)
    }
    const allChangeHandler = (e) => {
        // console.log(e.target.checked)
        taskStore.allCheck(e.target.checked)
    }
    const delTaskHandler = (id) => {
        taskStore.delTask(id)
    }
    const [taskValue, setTaskValue] = useState('')
    const addTaskHandler = (e) => {
        // console.log(e)
        if (taskValue === '') return
        if (e.keyCode === 13) {
            taskStore.addTask({
                id: uuid(),
                name: taskValue,
                isDone: false,
            })
            setTaskValue('')
        }
    }
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    autoFocus
                    autoComplete="off"
                    placeholder="What needs to be done?"
                    value={taskValue}
                    onChange={(e) => setTaskValue(e.target.value)}
                    onKeyUp={addTaskHandler}
                />
            </header>
            <section className="main">
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    checked={taskStore.isAll}
                    onChange={allChangeHandler}
                />
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {/* completed */}
                    {taskStore.list.map((item) => {
                        return (
                            <li
                                className={
                                    item.isDone ? 'todo completed' : 'todo'
                                }
                                key={item.id}
                            >
                                <div className="view">
                                    <input
                                        className="toggle"
                                        type="checkbox"
                                        checked={item.isDone}
                                        onChange={(e) =>
                                            changeHandler(item.id, e)
                                        }
                                    />
                                    <label>{item.name}</label>
                                    <button
                                        className="destroy"
                                        onClick={() => delTaskHandler(item.id)}
                                    ></button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count">
                    任务总数：{taskStore.list.length} -|- 已完成：
                    {taskStore.isFinishedLength}
                </span>
            </footer>
        </section>
    )
}

export default observer(Task)
