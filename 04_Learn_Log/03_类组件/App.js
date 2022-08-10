import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="logs">
                <div className="item">
                    <div className="date">
                        <div className="month">四月</div>
                        <div className="day">19</div>
                    </div>
                    <div className="content">
                        <h2 className="desc">学习React</h2>
                        <div className="time">40分钟</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
