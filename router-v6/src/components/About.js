import React from 'react'
// import Hello from './Hello'
import { Outlet, Navigate } from 'react-router-dom'
const About = () => {
    return (
        <div>
            //默认使用push跳转
            <Navigate replace to={'/student/1'} />
            <h2>关于我们</h2>
            <ul>
                <li>刘备</li>
                <li>关羽</li>
                <li>张飞</li>
            </ul>
            {/* <Routes>
                <Route path={'hello'} element={<Hello />} />
            </Routes> */}
            <Outlet />
        </div>
    )
}

export default About
