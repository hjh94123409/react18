import React from 'react'
import { useGetStudentsQuery } from './store/studentApi'

const App = () => {
    const { data, isSuccess, isLoading } = useGetStudentsQuery()

    return (
        <div>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess &&
                data.data.map((item) => (
                    <p key={item.id}>
                        {item.attributes.name} ---
                        {item.attributes.age} ---
                        {item.attributes.gender} ---
                        {item.attributes.address}
                    </p>
                ))}
        </div>
    )
}

export default App
