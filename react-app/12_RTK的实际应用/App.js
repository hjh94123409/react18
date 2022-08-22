import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setName, setAge } from './store/stuSlice'
import { setName as setSchoolName, setAddress } from './store/schoolSlice'

const App = () => {
    // const student = useSelector((state) => state.student)
    // const school = useSelector((state) => state.school)

    const { student, school } = useSelector((state) => state)

    const dispatch = useDispatch()

    const setNameHandler = () => {
        dispatch(setName('沙和尚'))
    }

    const setAgeHandler = () => {
        dispatch(setAge(33))
    }

    return (
        <div>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.gender}</p>
            <p>{student.address}</p>
            <button onClick={setNameHandler}>修改name</button>
            <button onClick={setAgeHandler}>修改age</button>
            <hr />
            <p>{school.name}</p>
            <p>{school.address}</p>
            <button
                onClick={() => {
                    dispatch(setSchoolName('哈哈'))
                }}
            >
                修改name
            </button>
            <button
                onClick={() => {
                    dispatch(setAddress('中关村'))
                }}
            >
                修改地址
            </button>
        </div>
    )
}

export default App
