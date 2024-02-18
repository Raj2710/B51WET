import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import CreateRequest from '../components/requests/CreateRequest'
import ViewRequest from '../components/requests/ViewRequest'
import Users from '../components/users/Users'
import ViewUser from '../components/users/ViewUser'
import CreateUser from '../components/users/CreateUser'
import Request from '../components/Request'
import AdminGuard from './AdminGuard'
import UserGuard from './UserGuard'
import {Navigate} from 'react-router-dom'

const AppRoutes = [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/request',
        element:<CreateRequest/>

    },
    {
        path:'/request-status',
        element:<ViewRequest/>

    },
    {
        path:'/dashboard',
        element:<UserGuard><Dashboard/></UserGuard>
    },
    {
        path:'/request/:srno',
        element:<UserGuard><Request/></UserGuard>
    },
    {
        path:'/user',
        element:<AdminGuard><Users/></AdminGuard>
    },
    {
        path:'/user/create',
        element:<AdminGuard><CreateUser/></AdminGuard>
    },
    {
        path:'/user/:id',
        element:<AdminGuard><ViewUser/></AdminGuard>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]

export default AppRoutes