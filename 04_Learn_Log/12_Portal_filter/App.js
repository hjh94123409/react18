import { useState } from 'react'
import Logs from './Components/Logs/Logs'
import LogsForm from './Components/LogsForm'
import './App.css'
import { nanoid } from 'nanoid'
const App = () => {
    const [logsData, setLogData] = useState([
        {
            id: '001',
            date: new Date(2021, 10, 20, 19, 0),
            desc: '学习React',
            time: 20,
        },
        {
            id: '002',
            date: new Date(2022, 3, 15, 9, 10),
            desc: '学习THREE',
            time: 50,
        },
        {
            id: '003',
            date: new Date(2022, 5, 25, 1, 6),
            desc: '学习JavaScript',
            time: 44,
        },
        {
            id: '004',
            date: new Date(2022, 8, 2, 9, 30),
            desc: '学习CSS',
            time: 80,
        },
        {
            id: '005',
            date: new Date(2020, 2, 21, 12, 10),
            desc: '王者荣耀',
            time: 80,
        },
    ])

    const saveLogHandler = (log) => {
        // console.log('===>', log)
        log.id = nanoid()
        setLogData([...logsData, log])
    }

    // const deleteLogByIndex = (index) => {
    //     // console.log('===>', index)
    //     setLogData((prevState) => {
    //         const newLog = [...prevState]
    //         newLog.splice(index, 1)
    //         return newLog
    //     })
    // }

    const deleteLogById = (id) => {
        setLogData((preState) => {
            return preState.filter((item) => {
                return item.id !== id
            })
        })
    }

    return (
        <div className="app">
            <LogsForm onSaveLogHandler={saveLogHandler} />
            <Logs logsData={logsData} onDelLog={deleteLogById} />
        </div>
    )
}

export default App
