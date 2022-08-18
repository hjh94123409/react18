import React from 'react'

const B = (props) => {
    console.log('组件B渲染了')
    return <div>组件B -- {props.count}</div>
}

export default React.memo(B)
