import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Menu.module.scss'
const Menu = () => {
    return (
        <div>
            <ul className={classes.menu}>
                <li>
                    {/* <Link to="/">主页</Link> */}
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? 'red' : 'green',
                            }
                        }}
                        to="/"
                    >
                        主页
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? 'red' : 'green',
                            }
                        }}
                        to="/about"
                    >
                        关于
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
