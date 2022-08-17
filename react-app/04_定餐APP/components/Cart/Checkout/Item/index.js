import React from 'react'
import classes from './index.module.scss'
import Counter from '../../../UI/Counter'
const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.Content}>
                <h2>{props.meal.title}</h2>
                <div className={classes.PriceOuter}>
                    <div className={classes.PriceOuter}>
                        <Counter meal={props.meal} />
                    </div>
                    <div className={classes.Price}>
                        {props.meal.price * props.meal.amount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
