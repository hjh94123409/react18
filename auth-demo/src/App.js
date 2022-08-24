import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AuthPage from './pages/AuthPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'profile'} element={<ProfilePage />} />
                <Route path={'auth-form'} element={<AuthPage />} />
            </Routes>
        </Layout>
    )
}

export default App
