import React from 'react'
import B from './B'
const A = (props) => {
    console.log('组件A渲染了')
    return (
        <div>
            组件A -- {props.count}
            <button onClick={props.onAdd}>A+1</button>
            <hr />
            <B />
        </div>
    )
}

export default React.memo(A)
