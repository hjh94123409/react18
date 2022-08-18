import React from 'react'
import Meal from './Meal'
import classes from './index.module.scss'
const Meals = (props) => {
    // console.log(props)
    return (
        <div className={classes.Meals}>
            {props.mealsData.map((item) => (
                <Meal key={item.id} meal={item} />
            ))}
        </div>
    )
}

export default Meals
