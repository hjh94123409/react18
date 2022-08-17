import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../../../store/cart-context'

import Item from './Item'

import Bar from './Bar'

const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {
    const ctx = useContext(CartContext)

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => props.onHide()}
                />
            </div>
            <div className={classes.Box}>
                <header className={classes.Header}>
                    <h2>产品详情</h2>
                </header>
                <div className={classes.List}>
                    {ctx.items.map((item) => (
                        <Item key={item.id} meal={item} />
                    ))}
                </div>
                <footer className={classes.Footer}>
                    <p>{ctx.totalPrice}</p>
                </footer>
            </div>
            <Bar totalPrice={ctx.totalPrice} />
        </div>,
        checkoutRoot
    )
}

export default Checkout
