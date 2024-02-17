import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  let [data,setData] = useState([])

  let navigate = useNavigate()

  let logout = useLogout()

  const getData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.USERS.path}`,{
        authenticate:ApiRoutes.USERS.authenticate
      })
      if(res.status===200)
      {
        setData(res.data.users)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status===402)
        logout()
    }
  }

  useEffect(()=>{
      getData()
  },[])
  return <>
  <TopBar/>
  <div className='wrapper'>
    
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.staus?"Active":"Inactive"}</td>
              <td>{e.createdAt}</td>
              <td><Button variant='info' onClick={()=>navigate(`/profile/${e._id}`)}>View</Button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
  </>
}

export default Dashboard