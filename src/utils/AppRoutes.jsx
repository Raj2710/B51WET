import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import AdminGuard from './AdminGuard'
import UserGuard from './UserGuard'
import {Navigate} from 'react-router-dom'

const AppRoutes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]

export default AppRoutes