import React from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.scss'
const backdropRoot = document.getElementById('backdrop-root')
const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div {...props} className={`${classes.Backdrop} ${props.className}`}>
            {props.children}
        </div>,
        backdropRoot
    )
}

export default Backdrop
