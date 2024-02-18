import React, { useState,useEffect } from 'react'
import TopBar from '../TopBar'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import useLogout from '../../hooks/useLogout'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import {Button, Table} from 'react-bootstrap'
import Messages from '../../utils/message'
import Form from 'react-bootstrap/Form';
function ViewRequest() {
    let logout = useLogout()
    let [srno,setSr] = useState("")
    let [request,setRequest] = useState({})
    let role = sessionStorage.getItem('role')
    const getData = async()=>{
        try {
          let res = await AxiosService.get(`${ApiRoutes.REQUEST_CLOSED.path}/${srno}`,{
            authenticate:ApiRoutes.REQUEST_CLOSED.authenticate
          })
          if(res.status===200)
          {
            setRequest(res.data.request)
          }
        } catch (error) {
          toast.error(error.response.data.message || error.message)
          if(error.response.status===402)
            logout()
        }
      }

  return <>
  <h2 style={{textAlign:"center"}}>Track your Status Here!</h2>

      <div className='loginWrapper'>
      <Form>
        <Form.Group className="mb-3">
            <Form.Label>SR NO</Form.Label>
            <Form.Control type="email" placeholder="Enter SR NO" onChange={(e)=>setSr(e.target.value)}/>
          </Form.Group>
          <Button onClick={()=>getData()}>Submit</Button>
      </Form>
      </div>
  
      {
        request.srno?<Table striped hover bordered>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(request).map((e,i)=>{
              return <tr key={i}>
                <td>{Messages[e]?Messages[e]:e}</td>
                <td>{request[e]?request[e]:"-"}</td>
              </tr>
            })
          }
        </tbody>
    </Table>:<></>
      }
  </>
}

export default ViewRequest