import React, { useContext, useState } from 'react'
import BackDrop from '../../UI/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './index.module.scss'
import CartContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal'
import Confirm from '../../UI/Confirm'
const CartDetails = () => {
    const ctx = useContext(CartContext)

    const [showConfirm, setShowConfirm] = useState(false)

    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const okHandler = () => {
        ctx.cartDispatch({ type: 'CLEAR' })
    }

    return (
        <BackDrop onClick={cancelHandler}>
            {showConfirm && (
                <Confirm
                    confirmText={'确认清空购物车吗？'}
                    onCancel={cancelHandler}
                    onOk={okHandler}
                />
            )}

            <div
                className={classes.CartDetails}
                onClick={(e) => e.stopPropagation()}
            >
                <header>
                    <h2>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash} /> 清空购物车
                    </div>
                </header>
                <div className={classes.MealList}>
                    {ctx.items.map((item) => (
                        <Meal noDesc key={item.id} meal={item} />
                    ))}
                </div>
            </div>
        </BackDrop>
    )
}

export default CartDetails
