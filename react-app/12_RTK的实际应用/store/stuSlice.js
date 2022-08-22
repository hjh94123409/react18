import { createSlice } from '@reduxjs/toolkit'

//创建reducer切片
const stuSlice = createSlice({
    name: 'stu', //用来自动生成action中的type
    initialState: {
        //state初始值
        name: '孙悟空',
        age: 18,
        gender: '男',
        address: '花果山',
    },
    reducers: {
        //指定state的各种操作, 直接在对象中添加方法
        setName(state, action) {
            //state是一个代理对象，可以直接修改
            state.name = action.payload
        },
        setAge(state, action) {
            state.age = action.payload
        },
    },
})

//切片对象会自动帮我们生成action
// console.log(stuSlice.actions)
// actions 中存储的是slice自动生成action创建器（函数），调用函数后会自动创建action对象
// action对象的结构{type:name/函数名, payload:函数的参数}
// {type: "student/setName",payload: "猪八戒" }

export const { setName, setAge } = stuSlice.actions
export const { reducer: stuReducer } = stuSlice
