import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
const backDropRoot = document.getElementById('backdrop-root')

const BackDrop = (props) => {
    return ReactDOM.createPortal(
        <div className="backDrop">{props.children}</div>,
        backDropRoot
    )
}

export default BackDrop
