import React, { useState } from 'react'
import { useDelStudentMutation } from '../../../store/studentApi'

import StudentForm from '../../StudentForm'
const Student = (props) => {
    const [isEdit, setIsEdit] = useState(false)

    // 返回的是一个数组
    // 操作的触发器
    // 结果集
    const [delStudent, { isSuccess }] = useDelStudentMutation()

    const deleteHandler = () => {
        delStudent(props.stu.id)
    }

    const cancelHandler = () => {
        setIsEdit(false)
    }

    return (
        <>
            {!isEdit && !isSuccess && (
                <tr>
                    <td>{props.stu.attributes.name}</td>
                    <td>{props.stu.attributes.age}</td>
                    <td>{props.stu.attributes.gender}</td>
                    <td>{props.stu.attributes.address}</td>
                    <td>
                        <button onClick={deleteHandler}>删除</button>
                        <button onClick={() => setIsEdit(true)}>修改</button>
                    </td>
                </tr>
            )}

            {isSuccess && (
                <tr>
                    <td colSpan={5}>数据已删除！！</td>
                </tr>
            )}

            {isEdit && (
                <StudentForm stuId={props.stu.id} onCancel={cancelHandler} />
            )}

            {/* {loading && (
                <tr>
                    <td colSpan={5}>正在删除数据</td>
                </tr>
            )}
            {error && (
                <tr>
                    <td colSpan={5}>删除失败...</td>
                </tr>
            )} */}
        </>
    )
}

export default Student
