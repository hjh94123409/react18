import React, { Component } from 'react'

class User extends Component {
    state = {
        count: 0,
        test: '呵呵',
        obj: {
            name: '孙悟空',
            age: 18,
        },
    }

    divRef = React.createRef()

    clickHandler = () => {
        // this.setState((preState) => {
        //     return {
        //         count: preState.count + 1,
        //     }
        // })
        this.setState({
            count: this.state.count + 1,
            obj: { ...this.state.obj, name: '沙和尚' },
        })

        console.log(this.divRef.current)
    }

    render() {
        return (
            <div ref={this.divRef}>
                <h1>
                    {this.state.count} --- {this.state.test}
                </h1>
                <h2>
                    {this.state.obj.name} --- {this.state.obj.age}
                </h2>
                <button onClick={this.clickHandler}>点</button>
                <ul>
                    <li>姓名：{this.props.name}</li>
                    <li>年龄：{this.props.age}</li>
                    <li>性别：{this.props.gender}</li>
                </ul>
            </div>
        )
    }
}

export default User
