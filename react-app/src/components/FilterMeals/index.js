import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import classes from './index.module.scss'

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('')

    const changeInputHandler = (e) => {
        // console.log(e.target.value)
        // props.onFilter(e.target.value.trim())
        setKeyword(e.target.value.trim())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('XXX')
            props.onFilter(keyword)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [keyword])

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    value={keyword}
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
