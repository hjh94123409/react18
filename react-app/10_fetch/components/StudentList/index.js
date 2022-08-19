import React from 'react'
import Student from './Student'
import classes from './index.module.css'
const StudentList = (props) => {
    return (
        <div>
            <table className={classes.Table} cellPadding={0} cellSpacing={0}>
                <caption>学生信息</caption>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>地址</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stu.map((item) => {
                        return <Student key={item.id} stu={item.attributes} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList
