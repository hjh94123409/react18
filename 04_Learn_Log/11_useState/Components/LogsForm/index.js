import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './index.css'
const LogsForm = () => {
    // let inputDate = ''
    // let inputDesc = ''
    // let inputTime = ''

    // const [inputDate, setInputDate] = useState('')
    // const [inputDesc, setInputDesc] = useState('')
    // const [inputTime, setInputTime] = useState('')

    const [formData, setFormData] = useState({
        inputDate: '',
        inputDesc: '',
        inputTime: '',
    })

    const timeHandler = (e) => {
        // inputTime = e.target.value
        // setInputTime(e.target.value)
        setFormData({
            ...formData,
            inputTime: e.target.value,
        })
    }

    const descHandler = (e) => {
        // inputDesc = e.target.value
        // setInputDesc(e.target.value)
        setFormData({
            ...formData,
            inputDesc: e.target.value,
        })
    }

    const dateHandler = (e) => {
        // inputDate = e.target.value
        // setInputDate(e.target.value)
        setFormData({
            ...formData,
            inputDate: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(formData.inputDate),
            desc: formData.inputDesc,
            time: +formData.inputTime,
        }
        console.log(newLog)
        // setInputTime('')
        // setInputDesc('')
        // setInputDate('')
        setFormData({
            inputTime: '',
            inputDate: '',
            inputDesc: '',
        })
    }

    return (
        <Card className="logs-form">
            <form onSubmit={submitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    <input
                        onChange={dateHandler}
                        value={formData.inputDate}
                        id="date"
                        type="date"
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    <input
                        onChange={descHandler}
                        value={formData.inputDesc}
                        id="desc"
                        type="text"
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    <input
                        onChange={timeHandler}
                        value={formData.inputTime}
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
