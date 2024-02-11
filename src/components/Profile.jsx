import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import { useParams } from 'react-router-dom'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'

function Profile() {

  let {id} = useParams()
  let [data,setData] = useState({})

  let logout = useLogout()

  const getProfileData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.USERS.path}/${id}`,{
        authenticate:ApiRoutes.USERS.authenticate
      })
      if(res.status===200)
      {
        setData(res.data.user)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status===402)
        logout()
    }
  }

  useEffect(()=>{
    if(id)
      getProfileData()
  },[])
  return <>
  <TopBar/>
  <div className='wrapper'>
    <Button variant='primary' onClick={getProfileData}>Refresh</Button>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(data).map((e,i)=>{
            return <tr key={i}>
              <td>{e}</td>
              <td>{typeof(data[e])==='boolean'?data[e]?"Active":"Inactive":data[e]}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
  </>
}

export default Profile