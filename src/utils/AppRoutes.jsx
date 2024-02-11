import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import AdminGuard from './AdminGuard'
import UserGuard from './UserGuard'
import {Navigate} from 'react-router-dom'

const AppRoutes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/dashboard',
        element:<AdminGuard>
                    <Dashboard/>
                </AdminGuard>
    },
    {
        path:'/profile/:id',
        element:<UserGuard><Profile/></UserGuard>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]

export default AppRoutes