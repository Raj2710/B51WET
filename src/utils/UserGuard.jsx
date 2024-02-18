import {Navigate} from 'react-router-dom'

function UserGuard({children}) {
  let role = sessionStorage.getItem('role')
  let token = sessionStorage.getItem('token')

  return token && (role === 'admin' || role === 'superAdmin') ? children : <Navigate to='/login'/>
}

export default UserGuard