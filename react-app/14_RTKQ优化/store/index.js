import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import studentApi from './studentApi'
const store = configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(studentApi.middleware)
    },
})

setupListeners(store.dispatch) //设置以后，将会支持 refetchOnFocus refetchOnReconnect

export default store
