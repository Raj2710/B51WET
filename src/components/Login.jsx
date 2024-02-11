import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleLogin = async(e)=>{
    e.preventDefault()
    try {
      let formData = new FormData(e.target)
      let data = Object.fromEntries(formData)

      if(data.email && data.password){
        let res = await AxiosService.post(ApiRoutes.LOGIN.path,data,{
          authenticate:ApiRoutes.LOGIN.authenticate
        })

        if(res.status===200)
        {
          sessionStorage.setItem('token',res.data.token)
          sessionStorage.setItem('role',res.data.role)
          sessionStorage.setItem('name',res.data.name)
          sessionStorage.setItem('userId',res.data.id)
          toast.success(res.data.message)
          if(res.data.role==='admin')
            navigate('/dashboard')
          else
            navigate(`/profile/${res.data.id}`)
        }
      }
      else
      {
        toast.error("Input Email and Password")
      }

    } catch (error) {
        toast.error(error.response.data.message || error.message)
    }
  }

  return <div className='loginWrapper'>
    <div className='loginHeader'>
      <h2>Login Here</h2>
      <p>New here? Don't worry <Link to='/signup'>Sign Up here</Link></p>
    </div>
  <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
}

export default Login