import React from 'react'
import MyDate from '../MyDate'
import Card from '../UI/Card/Card'
import './index.css'
const LogItem = () => {
    return (
        <Card className="item">
            <MyDate />
            <div className="content">
                <h2 className="desc">学习React</h2>
                <div className="time">40分钟</div>
            </div>
        </Card>
    )
}

export default LogItem
