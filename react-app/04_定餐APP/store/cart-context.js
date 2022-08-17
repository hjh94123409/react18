import React from 'react'

export default React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
})
