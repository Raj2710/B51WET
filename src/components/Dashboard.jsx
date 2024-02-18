import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'
import {Card,Table,Button,Container,Row,Col} from 'react-bootstrap'

function Dashboard() {
  let [countData,setCountData] = useState([])
  let [selectedStatus,setSelectedStatus] = useState("Open")
  let [requests,setRequests] = useState([])
  let navigate = useNavigate()

  let logout = useLogout()

  const getData = async()=>{
    try {
      let res = await AxiosService.get(ApiRoutes.REQUEST_COUNT.path,{
        authenticate:ApiRoutes.REQUEST_COUNT.authenticate
      })
      if(res.status===200)
      {
        setCountData(res.data)
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message)
      if(error.response.status===402)
        logout()
    }
  }

  const getDataByStatus = async()=>{
    try {
      let res = await AxiosService.get(`${ApiRoutes.REQUEST_CLOSED.path}?status=${selectedStatus}`,{
        authenticate:ApiRoutes.REQUEST_CLOSED.authenticate
      })
      if(res.status===200)
      {
        setRequests(res.data.requests)
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

  useEffect(()=>{
    getDataByStatus()
  },[selectedStatus])
  return <>
  <TopBar/>
  <div className='wrapper'>
    <div style={{marginTop:"25px",marginBottom:"25px"}}>
    <Container>
    <Row>
      <Col>
        <Card style={{ width: '18rem',height:"3rem",cursor:"pointer"}} onClick={()=>setSelectedStatus("Open")}>
          <Card.Title style={{textAlign:"center",marginTop:"12px"}}>Open {countData.Open?countData.Open:0}</Card.Title>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem',height:"3rem",cursor:"pointer"}} onClick={()=>setSelectedStatus("Assigned")}>
          <Card.Title style={{textAlign:"center",marginTop:"12px"}}>Assigned {countData.Assigned?countData.Assigned:0}</Card.Title>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '18rem',height:"3rem",cursor:"pointer"}} onClick={()=>setSelectedStatus("Closed")}>
          <Card.Title style={{textAlign:"center",marginTop:"12px"}}>Closed {countData.Closed?countData.Closed:0}</Card.Title>
        </Card>
      </Col>
    </Row>
    </Container>
    </div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SR No</th>
          <th>Type</th>
          <th>Title</th>
          <th>Status</th>
          <th>Created Date</th>
          <th>Assigned To</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          requests.map((e,i)=>{
            return <tr key={i}>
              <td>{e.srno}</td>
              <td>{e.type}</td>
              <td>{e.title}</td>
              <td>{e.status}</td>
              <td>{e.createdAt}</td>
              <td>{e.assignedTo}</td>

              <td><Button onClick={()=>navigate(`/request/${e.srno}`)}>View</Button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
  </>
}

export default Dashboard