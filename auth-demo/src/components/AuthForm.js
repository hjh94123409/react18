import React, { useRef, useState } from 'react'

import { useDispatch } from 'react-redux'

import { useNavigate, useLocation } from 'react-router-dom'

import { useRegisterMutation, useLoginMutation } from '../store/api/authApi'
import { login } from '../store/reducer/authSlice'

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const usernameInp = useRef()
    const pwdInp = useRef()
    const emailInp = useRef()

    const [regFn, { error: regError }] = useRegisterMutation()

    const [loginFn, { error: loginError }] = useLoginMutation()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const location = useLocation()
    // console.log('authForm:', location)
    const from = location.state?.preLocation?.pathname || '/'
    // console.log(from)

    const submitHandler = async (e) => {
        e.preventDefault()

        const username = usernameInp.current.value
        const password = pwdInp.current.value

        if (isLoginForm) {
            // console.log('登录-->', username, password)
            loginFn({
                identifier: username,
                password,
            }).then((res) => {
                // console.log(res)
                //登录成功后，需要向系统中添加一个标识，标记用户的登录状态
                //保存登录状态(布尔值，token(jwt)，用户信息)
                if (!res.error) {
                    dispatch(
                        login({
                            token: res.data.jwt,
                            user: res.data.user,
                        })
                    )
                }
                // 跳转页面到之前的目录
                navigate(from, { replace: true })
            })
        } else {
            const email = emailInp.current.value
            // console.log('注册-->', username, password, email)
            regFn({
                username,
                password,
                email,
            }).then((res) => {
                // console.log(res)
                if (!res.error) {
                    //注册成功
                    setIsLoginForm(true)

                    usernameInp.current.value = ''
                    pwdInp.current.value = ''
                }
            })
        }
    }

    return (
        <div>
            <p style={{ color: 'red' }}>
                {regError && regError.data.error.message}
            </p>
            <p style={{ color: 'red' }}>
                {loginError && loginError.data.error.message}
            </p>
            <h2>{isLoginForm ? '登录' : '注册'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder="用户名" />
                </div>
                {!isLoginForm && (
                    <div>
                        <input ref={emailInp} type="email" placeholder="邮箱" />
                    </div>
                )}
                <div>
                    <input ref={pwdInp} type="password" placeholder="密码" />
                </div>
                <div>
                    <button>{isLoginForm ? '登录' : '注册'}</button>
                    <a
                        href="&nbsp;"
                        onClick={(e) => {
                            e.preventDefault()
                            setIsLoginForm((preState) => !preState)
                        }}
                    >
                        {isLoginForm
                            ? '没有账号？点击注册'
                            : '已有账号？点击登录'}
                    </a>
                </div>
            </form>
        </div>
    )
}

export default AuthForm
