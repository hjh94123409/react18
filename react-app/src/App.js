import React, { useEffect } from 'react'
import StudentList from './components/StudentList'
import StuContext from './store/StuContext'
import useFetch from './hooks/useFetch'
const App = () => {
    const {
        data: stuData,
        loading,
        error,
        fetchData,
    } = useFetch({
        url: 'students',
    })

    //组件初始化请求数据
    useEffect(() => {
        fetchData()
    }, [fetchData])

    const loadDataHandler = () => {
        fetchData()
    }

    return (
        <StuContext.Provider value={{ fetchData }}>
            <button onClick={loadDataHandler}>加载数据</button>
            {loading && <p>数据正在加载中...</p>}
            {error && <p>数据加载异常</p>}
            {!loading && !error && <StudentList stu={stuData} />}
        </StuContext.Provider>
    )
}

export default App
