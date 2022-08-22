import React from 'react'
import StudentList from './components/StudentList'

import { useGetStudentsQuery } from './store/studentApi'

const App = () => {
    const { data: stus, isSuccess, isLoading } = useGetStudentsQuery()

    return (
        <div>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess && <StudentList stu={stus} />}
        </div>
    )
}

export default App
