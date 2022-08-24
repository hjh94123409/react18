import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Menu.module.css'
const Menu = () => {
    return (
        <div>
            <ul className={classes.Menu}>
                <li>
                    <Link to="/">主页</Link>
                </li>
                <li>
                    <Link to="/about">关于</Link>
                </li>
                <li>
                    <NavLink to="/student/3">学生信息</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
