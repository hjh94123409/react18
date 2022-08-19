import React, { useEffect, useState } from 'react'
import StudentList from './components/StudentList'

const App = () => {
    const [stuData, setStuData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    //组件初始化请求数据
    useEffect(() => {
        // setLoading(true)
        // setError(null)
        // fetch('http://localhost:1337/api/students')
        //     .then((res) => {
        //         if (res.ok) {
        //             return res.json()
        //         }
        //         throw new Error('数据加载失败')
        //     })
        //     .then((data) => {
        //         setStuData(data.data)
        //         setLoading(false)
        //     })
        //     .catch((e) => {
        //         setLoading(false)
        //         setError(e)
        //     })

        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await fetch('http://localhost:1337/api/students')
                if (res.ok) {
                    const data = await res.json()
                    setStuData(data.data)
                    setLoading(false)
                } else {
                    throw new Error('数据加载失败')
                }
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            {loading && <p>数据正在加载中...</p>}
            {error && <p>数据加载异常</p>}
            {!loading && !error && <StudentList stu={stuData} />}
        </div>
    )
}

export default App
