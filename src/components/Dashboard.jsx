import React,{useContext} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Actions } from '../utils/Actions';
import { useNavigate } from 'react-router-dom';
import {GeneralContext} from '../main'
import {UserContext} from '../utils/UserContextComponent'
function Dashboard() {
    let data = [
        {
            isProgress:false,
            title:"Earnings (Monthly)",
            value:"$40,000",
            icon:"fa-calendar",
            color:"primary"
        },
        {
            isProgress:false,
            title:"Earnings (Annual)",
            value:"$215,000",
            icon:"fa-dollar-sign",
            color:"success"
        },
        {
            isProgress:true,
            title:"Tasks",
            value:"80",
            icon:"fa-clipboard-list",
            color:"info"
        },
        {
            isProgress:false,
            title:"Pending Request",
            value:"18",
            icon:"fa-comments",
            color:"warning"
        }
    ]
    const gContext = useContext(GeneralContext)
    const userContext = useContext(UserContext)
    const navigate = useNavigate()
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                {
                    data.map((e,i)=>{
                        return <Card key={i}
                        isProgress={e.isProgress}
                        title={e.title}
                        color={e.color}x
                        value={e.value}
                        icon={e.icon}
                        />
                    })
                }
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h3 className="h3 mb-0 text-gray-800">User List</h3>
            </div>
            <div className='row'>
                <div className='container-fluid'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userContext.user.map((e,i)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.firstName}</td>
                                    <td>{e.lastName}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.batch}</td>
                                    <td>
                                        <Button variant='info' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>userContext.userDispatch({action:Actions.DELETE,id:i})}>Delete</Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                </div>
            </div>
          </div>
        </div>
      </div>
  </>
}
export default Dashboard