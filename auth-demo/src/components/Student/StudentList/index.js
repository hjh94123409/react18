import React from 'react'
import Student from './Student'
import classes from './index.module.css'
import StudentForm from '../StudentForm'
import { useGetStudentsQuery } from '../../../store/api/studentApi'
const StudentList = () => {
    const { data: stus, isSuccess } = useGetStudentsQuery()

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
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {isSuccess &&
                        stus.map((item) => {
                            return <Student key={item.id} stu={item} />
                        })}
                </tbody>
                <tfoot>
                    <StudentForm />
                </tfoot>
            </table>
        </div>
    )
}

export default StudentList
