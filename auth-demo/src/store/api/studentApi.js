import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const studentApi = createApi({
    reducerPath: 'studentApi', //api标识，不能和其他的api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/', //指定查询基础信息, 发送请求使用的工具
        prepareHeaders: (headers, { getState }) => {
            //用来统一设置请求头
            const token = getState().auth.token

            // console.log(token)

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['student'], //用来指定Api中的标签类型
    endpoints(build) {
        //用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
        return {
            getStudents: build.query({
                query() {
                    return {
                        url: 'students',
                    }
                },
                transformResponse(baseQueryReturnValue) {
                    //用来转换响应数据的格式
                    return baseQueryReturnValue.data
                },
                providesTags: [{ type: 'student', id: 'LIST' }],
            }),
            getStudentById: build.query({
                query(id) {
                    return `students/${id}`
                },
                transformResponse(baseQueryReturnValue) {
                    //用来转换响应数据的格式
                    return baseQueryReturnValue.data
                },
                keepUnusedDataFor: 10, //设置数据缓存时间, 单位秒，默认60秒
                invalidatesTags: (result, error, id) => [
                    { type: 'student', id },
                ],
            }),
            delStudent: build.mutation({
                query(id) {
                    return {
                        url: `students/${id}`,
                        method: 'delete',
                    }
                },
            }),
            addStudent: build.mutation({
                query(stu) {
                    return {
                        url: 'students',
                        method: 'post',
                        body: {
                            data: stu,
                        },
                    }
                },
                invalidatesTags: [{ type: 'student', id: 'LIST' }],
            }),
            updateStudent: build.mutation({
                query(stu) {
                    return {
                        url: `students/${stu.id}`,
                        method: 'put',
                        body: {
                            data: stu.attributes,
                        },
                    }
                },
                invalidatesTags: (result, error, stu) => [
                    { type: 'student', id: stu.id },
                ],
            }),
        }
    },
})

//Api对象创建后，对象中会根据各种方法自动的生成对应的钩子函数
//通过这些钩子函数，可以来向服务器发送请求

export const {
    useGetStudentsQuery,
    useGetStudentByIdQuery,
    useDelStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation,
} = studentApi

export default studentApi
