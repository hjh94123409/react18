import React from 'react'

import { useParams, useLocation, useMatch, useNavigate } from 'react-router-dom'

const STU_DATA = [
    {
        id: 1,
        name: '刘备',
    },
    {
        id: 2,
        name: '关羽',
    },
    {
        id: 3,
        name: '张飞',
    },
]

const Student = () => {
    const { id } = useParams()
    console.log(id)

    const stu = STU_DATA.find((item) => item.id === +id)

    const location = useLocation()
    console.log('location: ', location)

    //用来检查当前的url是否匹配某个路由
    //如果路径匹配，返回一个对象，不匹配返回null
    const match = useMatch('/student/2')
    console.log(match) //null

    //获取一个用于跳转页面的函数
    const nav = useNavigate()
    console.log(nav)

    const clickHandler = () => {
        nav('/about', {
            replace: true,
        })
    }

    return (
        <div>
            <h2>
                {stu.id} --- {stu.name}
            </h2>
            <button onClick={clickHandler}>点我一下</button>
        </div>
    )
}

export default Student
