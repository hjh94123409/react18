import React, { useState, useContext } from 'react'
import classes from './index.module.scss'
import StuContext from '../../store/StuContext'
import useFetch from '../../hooks/useFetch'
const StudentForm = (props) => {
    const [formData, setFormData] = useState({
        name: props.stu ? props.stu.attributes.name : '',
        age: props.stu ? props.stu.attributes.age : '',
        gender: props.stu ? props.stu.attributes.gender : '男',
        address: props.stu ? props.stu.attributes.address : '',
    })

    const ctx = useContext(StuContext)

    const {
        loading,
        error,
        fetchData: updateStudent,
    } = useFetch(
        {
            url: props.stu ? `students/${props.stu.id}` : 'students',
            method: props.stu ? 'put' : 'post',
        },
        ctx.fetchData
    )

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
        // console.log(formData)
        updateStudent(formData)
    }

    const updateHandler = () => {
        updateStudent(formData)
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
                    {props.stu && (
                        <>
                            <button onClick={props.onCancel}>取消</button>
                            <button onClick={updateHandler}>确认</button>
                        </>
                    )}
                    {!props.stu && (
                        <button onClick={submitHandler}>添加</button>
                    )}
                </td>
            </tr>
            {loading && (
                <tr>
                    <td colSpan={5}>添加中...</td>
                </tr>
            )}
            {error && (
                <tr>
                    <td colSpan={5}>添加失败</td>
                </tr>
            )}
        </>
    )
}

export default StudentForm
