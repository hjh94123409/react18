import React from 'react'
import MyDate from '../MyDate'
import './index.css'
const LogItem = (props) => {
    /* 
        props是只读的，不能修改
    */
    return (
        <div className="item">
            <MyDate date={props.date} />
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>
        </div>
    )
}

export default LogItem
