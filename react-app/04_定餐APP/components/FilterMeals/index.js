import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import classes from './index.module.scss'

const FilterMeals = (props) => {
    const changeInputHandler = (e) => {
        // console.log(e.target.value)
        props.onFilter(e.target.value.trim())
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    className={classes.SearchInput}
                    type="text"
                    placeholder="请输入关键字"
                    onChange={changeInputHandler}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.SearchIcon}
                />
            </div>
        </div>
    )
}

export default FilterMeals
