import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './index.css'
const LogsForm = (props) => {
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    // console.log(props)

    const timeHandler = (e) => {
        setInputTime(e.target.value)
    }

    const descHandler = (e) => {
        setInputDesc(e.target.value)
    }

    const dateHandler = (e) => {
        setInputDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime,
        }
        // console.log(newLog)

        props.onSaveLogHandler(newLog)

        setInputTime('')
        setInputDesc('')
        setInputDate('')
    }

    return (
        <Card className="logs-form">
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input
                        onChange={dateHandler}
                        value={inputDate}
                        id="date"
                        type="date"
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input
                        onChange={descHandler}
                        value={inputDesc}
                        id="desc"
                        type="text"
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input
                        onChange={timeHandler}
                        value={inputTime}
                        id="time"
                        type="number"
                    />
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
}

export default LogsForm
