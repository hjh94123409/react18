import React, { useContext } from 'react'
import classes from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import CardContext from '../../../store/cart-context'

const Counter = (props) => {
    const ctx = useContext(CardContext)
    // console.log(ctx)

    const addHandler = () => {
        // props.addMeal(props.meal)
        ctx.addItem(props.meal)
    }
    const subHandler = () => {
        // props.subMeal(props.meal)
        ctx.removeItem(props.meal)
    }

    return (
        <div className={classes.Counter}>
            {props.meal.amount && props.meal.amount !== 0 ? (
                <>
                    <button className={classes.Sub} onClick={subHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <span>{props.meal.amount}</span>
                </>
            ) : null}
            <button onClick={addHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter
