import { useEffect } from 'react'
import { logout } from '../store/reducer/authSlice'
import { useSelector, useDispatch } from 'react-redux'
const useAutoLogout = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const timeout = auth.expirationTime - Date.now()
        if (timeout < 1000 * 60) {
            //如果小于一分钟，直接登出
            dispatch(logout())
            return
        }
        const timer = setTimeout(() => {
            dispatch(logout())
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [auth, dispatch])
}

export default useAutoLogout
