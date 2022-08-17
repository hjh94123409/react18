import React, { useContext, useState } from 'react'
import classes from './index.module.scss'
import imgIcon from '../../asset/bag.png'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails'
import Checkout from './Checkout'
const Carty = () => {
    const ctx = useContext(CartContext)
    const [showDetails, setShowDetails] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)

    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) return
        setShowDetails((preState) => !preState)
    }
    const showCheckoutHandler = () => {
        if (ctx.totalAmount === 0) return
        setShowCheckout(true)
    }
    const hideCheckoutHandler = () => {
        setShowCheckout(false)
    }

    // console.log('Cart组件渲染了')

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}

            {showDetails && ctx.totalAmount !== 0 && <CartDetails />}

            <div className={classes.Icon}>
                <img src={imgIcon} alt="" />
                {ctx.totalAmount === 0 ? null : (
                    <span className={classes.TotalAmount}>
                        {ctx.totalAmount}
                    </span>
                )}
            </div>
            {ctx.totalAmount === 0 ? (
                <p className={classes.NoMeal}>未选购商品</p>
            ) : (
                <p className={classes.Price}>{ctx.totalPrice}</p>
            )}

            <button
                className={`${classes.Button} ${
                    ctx.totalAmount === 0 ? classes.Disabled : ';'
                }`}
                onClick={showCheckoutHandler}
            >
                去结算
            </button>
        </div>
    )
}

export default Carty
