import React from 'react'
import classes from './index.module.scss'
const Bar = (props) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.TotalPrice}>{props.totalPrice}</div>
            <button className={classes.Button}>去支付</button>
        </div>
    )
}

export default Bar
