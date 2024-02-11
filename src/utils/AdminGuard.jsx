import {Navigate} from 'react-router-dom'

function AdminGuard({children}) {
  let role = sessionStorage.getItem('role')
  let token = sessionStorage.getItem('token')

  return token && role === 'admin' ? children : <Navigate to='/login'/>
}

export default AdminGuard