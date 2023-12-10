import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser({user,setUser}) {
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")

  let navigate = useNavigate()

  const handleSubmit = ()=>{
      let newArray = [...user]
      newArray.push({
        firstName,
        lastName,
        email,
        mobile,
        batch
      })
      setUser(newArray)
      navigate('/dashboard')
  }
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add User</h1>
            </div>
              <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" onChange={(e)=>{setFName(e.target.value)}}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" onChange={(e)=>setLName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
                  </Form.Group>
                <Button variant="primary" onClick={()=>handleSubmit()}>
                  Submit
                </Button>
              </Form>
          </div>
        </div>
      </div>
  </>
}

export default AddUser