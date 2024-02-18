import React, { useState,useEffect } from 'react'
import TopBar from '../TopBar'
import { useParams } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import toast from 'react-hot-toast'
import ApiRoutes from '../../utils/ApiRoutes'
import AxiosService from '../../utils/AxiosService'
import Table from 'react-bootstrap/Table';
import Messages from '../../utils/message'
function ViewUser() {
  let {id} = useParams()
  let [data,setData] = useState({})
  let logout = useLogout()


  let getData = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.USERS.path}/${id}`,{
        authenticate:ApiRoutes.USERS.authenticate
      })
      if(res.status === 200)
      {
        console.log(res.data)
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
    {
      getData()
    }
    else
    {
      logout()
    }
  },[])

  return <>
  <TopBar/>
  <Table striped hover bordered>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(data).map((e,i)=>{
            return <tr key={i}>
              <td>{Messages[e]}</td>
              <td>{e==="status"?data[e]?"Active":"Inactive":data[e]}</td>
            </tr>
          })
        }
      </tbody>
  </Table>
  </>
}

export default ViewUser