import React from 'react'
import StudentList from './components/StudentList'

import { useGetStudentsQuery } from './store/studentApi'

const App = () => {
    const result = useGetStudentsQuery(null, {
        //useQuery 可以接收一个对象作为第二个参数,通过该对象可以去请求进行配置
        // selectFromResult: (result) => {
        //     //用来指定useQuery返回的结果
        //     if (result.data) {
        //         result.data = result.data.filter((item) => {
        //             return item.attributes.age < 18
        //         })
        //     }
        //     return result
        // },
        pollingInterval: 0, //设置轮询的间隔, 单位毫秒，如果为0则表示不轮询
        skip: false, //设置是否跳过当前请求
        refetchOnMountOrArgChange: false,
        //是否每次都重新加载数据, false正常使用缓存，
        //true每次都重载数据
        //数字，数据缓存的时间
        refetchOnFocus: true, //是否在重新获取焦点时重载数据
        refetchOnReconnect: true, //是否在重新连接后重载数据
    })

    /* 
        useGetStudentsQuery()的值

        currentData: (5) [{…}, {…}, {…}, {…}, {…}] // 当前参数的最新数据
        data: (5) [{…}, {…}, {…}, {…}, {…}] // 最新数据
        endpointName: "getStudents"
        fulfilledTimeStamp: 1661217460551
        error: Error() //有错是时存在
        isError: false // 是否有错误
        isFetching: false // 数据是否正在加载中
        isLoading: false //数据是否第一次加载
        isSuccess: true //请求是否成功
        isUninitialized: false //请求是否还没有开始发送
        refetch: ƒ () //函数，用来重新加载数据
        requestId: "FQNgWA2Kg0y2i3qdsu3V5"
        startedTimeStamp: 1661217460541
        status: "fulfilled" // 请求状态
    */

    const { data: stus, isSuccess, isLoading, refetch } = result

    return (
        <div>
            <button
                onClick={() => {
                    refetch()
                }}
            >
                刷新
            </button>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess && <StudentList stu={stus} />}
        </div>
    )
}

export default App
