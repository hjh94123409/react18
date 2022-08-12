import LogItem from './LogItem'
import './Logs.css'
import Card from './UI/Card/Card'
const Logs = () => {
    //模拟一组数据

    const logsData = [
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
            desc: '学习React',
            time: 80,
        },
    ]

    const logItem = logsData.map((item) => <LogItem {...item} key={item.id} />)

    return <Card className="logs">{logItem}</Card>
}

export default Logs
