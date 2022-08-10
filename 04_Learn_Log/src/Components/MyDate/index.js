import React from 'react'

import './index.css'

class MyDate extends React.Component {
    render() {
        const month = this.props.date.toLocaleString('zh-CN', { month: 'long' })
        const date = this.props.date.getDate()
        return (
            <div className="date">
                <div className="month">{month}</div>
                <div className="day">{date}</div>
            </div>
        )
    }
}

export default MyDate
