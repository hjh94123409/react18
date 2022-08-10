const App = () => {
    const clickHandler = (event) => {
        alert('我是App中的clickHandler')
        /* 
            在React 中，无法通过return false取消默认行为。
            事件对象
                - React 事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
                - React 中的事件对象同样不是原生的事件对象，是经过React包装后的事件对象
                - 由于对象进行过包装，所以使用过程中无需再去考虑兼容性问题
        */
        // return false
        // console.log(event)
        //取消默认行为
        event.preventDefault()

        //取消事件冒泡
        event.stopPropagation()
    }

    return (
        <div
            style={{ margin: 50, backgroundColor: 'red' }}
            onClick={() => {
                alert('呵呵了')
            }}
        >
            <button
                onClick={() => {
                    alert(123)
                }}
            >
                点我一下
            </button>
            <button onClick={clickHandler}>呵呵了</button>
            <br />
            <a href="http://baidu.com" onClick={clickHandler}>
                超链接
            </a>
        </div>
    )
}

export default App
