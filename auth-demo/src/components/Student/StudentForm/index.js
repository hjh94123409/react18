import React, { useState, useEffect } from 'react'

import {
    useGetStudentByIdQuery,
    useAddStudentMutation,
    useUpdateStudentMutation,
} from '../../../store/api/studentApi'
import classes from './index.module.css'

const StudentForm = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '男',
        address: '',
    })

    const [addStudent] = useAddStudentMutation()
    const [updateStudent] = useUpdateStudentMutation()

    const { data: stuData, isSuccess } = useGetStudentByIdQuery(props.stuId, {
        skip: !props.stuId,
        refetchOnMountOrArgChange: false,
    })

    useEffect(() => {
        if (isSuccess) {
            setFormData(stuData.attributes)
        }
    }, [isSuccess, stuData])

    const nameChangeHandler = (e) => {
        setFormData((preState) => {
            return { ...preState, name: e.target.value }
        })
    }
    const ageChangeHandler = (e) => {
        setFormData((preState) => {
            return { ...preState, age: +e.target.value }
        })
    }
    const genderChangeHandler = (e) => {
        setFormData((preState) => {
            return { ...preState, gender: e.target.value }
        })
    }
    const addressChangeHandler = (e) => {
        setFormData((preState) => {
            return { ...preState, address: e.target.value }
        })
    }
    const submitHandler = () => {
        addStudent(formData)
        setFormData({
            name: '',
            age: '',
            gender: '男',
            address: '',
        })
    }

    const updateHandler = () => {
        updateStudent({
            id: props.stuId,
            attributes: formData,
        })
        props.onCancel()
    }

    return (
        <>
            <tr className={classes.StudentForm}>
                <td>
                    <input
                        onChange={nameChangeHandler}
                        value={formData.name}
                        type="text"
                    />
                </td>
                <td>
                    <input
                        onChange={ageChangeHandler}
                        type="number"
                        value={formData.age}
                    />
                </td>
                <td>
                    <select
                        onChange={genderChangeHandler}
                        value={formData.gender}
                    >
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td>
                    <input
                        onChange={addressChangeHandler}
                        type="text"
                        value={formData.address}
                    />
                </td>
                <td>
                    {props.stuId && (
                        <>
                            <button onClick={props.onCancel}>取消</button>
                            <button onClick={updateHandler}>确认</button>
                        </>
                    )}
                    {!props.stuId && (
                        <button onClick={submitHandler}>添加</button>
                    )}
                </td>
            </tr>
            {/* {loading && (
                <tr>
                    <td colSpan={5}>添加中...</td>
                </tr>
            )}
            {error && (
                <tr>
                    <td colSpan={5}>添加失败</td>
                </tr>
            )} */}
        </>
    )
}

export default StudentForm
