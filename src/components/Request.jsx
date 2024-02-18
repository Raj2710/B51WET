import React, { useState,useEffect } from 'react'
import TopBar from './TopBar'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import useLogout from '../hooks/useLogout'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import {Table,Button, Form} from 'react-bootstrap'
import Messages from '../utils/message'
function Request() {

    let logout = useLogout()
    let {srno} = useParams()
    let [request,setRequest] = useState({})
    let [resolution,setResolution] = useState('')

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
    const handleAssign = async()=>{
        try {
            let res = await AxiosService.put(`${ApiRoutes.REQUEST_ASSIGN.path}/${srno}`,undefined,{
                authenticate:ApiRoutes.REQUEST_ASSIGN.authenticate
            })
            if(res.status===200)
            {
                toast.success(res.data.message)
                getData()
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
          if(error.response.status===402)
            logout()
        }
    }

    const handleClose= async()=>{
        try {
            if(resolution)
            {
                let res = await AxiosService.put(`${ApiRoutes.REQUEST_CLOSE.path}/${srno}`,{
                    resolution
                },{
                    authenticate:ApiRoutes.REQUEST_CLOSE.authenticate
                })
                if(res.status===200)
                {
                    toast.success(res.data.message)
                    getData()
                }
            }
            else
            {
                toast.error("Resolution is required")
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
          if(error.response.status===402)
            logout()
        }
    }

      useEffect(()=>{
            if(srno)
                getData()
            else
                logout()
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
          Object.keys(request).map((e,i)=>{
            return <tr key={i}>
              <td>{Messages[e]?Messages[e]:e}</td>
              <td>{request[e]?request[e]:"-"}</td>
            </tr>
          })
        }
      </tbody>
  </Table>
<div className='loginWrapper'>
    {
        request.status==="Open"?<Button onClick={()=>handleAssign()}>Assign to Me</Button>:
        request.status==="Assigned"?<Form>
        <Form.Group className="mb-3">
            <Form.Label>Resolution</Form.Label>
            <Form.Control type="text" placeholder="Enter Resolution" onChange={(e)=>setResolution(e.target.value)}/>
          </Form.Group>
          <Button onClick={()=>(handleClose())}>Close</Button>
      </Form>:<></>
    }
</div>
  </>
}

export default Request