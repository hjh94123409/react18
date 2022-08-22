import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const studentApi = createApi({
    reducerPath: 'studentApi', //api标识，不能和其他的api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/', //指定查询基础信息, 发送请求使用的工具
    }),
    endpoints(build) {
        //用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
        return {
            getStudents: build.query({
                query() {
                    return 'students'
                },
            }),
            getStudentsById: build.query(),
            updateStudent: build.mutation(),
        }
    },
})

//Api对象创建后，对象中会根据各种方法自动的生成对应的钩子函数
//通过这些钩子函数，可以来向服务器发送请求

export const { useGetStudentsQuery } = studentApi

export default studentApi
