//RTK
import { configureStore } from '@reduxjs/toolkit'
import { stuReducer } from './stuSlice'
import { schoolReducer } from './schoolSlice'

// const nameAction = setName('猪八戒')

//创建store
const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
    },
})

export default store
