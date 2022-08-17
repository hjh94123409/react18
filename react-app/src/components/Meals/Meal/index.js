import React from 'react'
import classes from './index.module.scss'
import Counter from '../../UI/Counter'
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.Content}>
                <h2>{props.meal.title}</h2>

                {props.noDesc ? null : <p>{props.meal.desc}</p>}

                <div className={classes.Other}>
                    <span>{props.meal.price}</span>
                    <div>
                        <Counter meal={props.meal} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meal
