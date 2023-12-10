import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom'
function EditUser({user,setUser}) {
  let params = useParams()
  let navigate = useNavigate()

  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  
  useEffect(()=>{
    if(params.id<user.length)
    {
      setFName(user[params.id].firstName)
      setLName(user[params.id].lastName)
      setEmail(user[params.id].email)
      setMobile(user[params.id].mobile)
      setBatch(user[params.id].batch)
    }
    else
    {
      alert("Invalid User Id "+params.id)
      navigate('/dashboard')
    }
  },[])


  const handleEdit = ()=>{
    let newArray = [...user]
    newArray.splice(params.id,1,{
      firstName,
      lastName,
      email,
      mobile,
      batch
    })
    setUser(newArray)
    navigate('/dashboard')
  }

  //Without dependancy array - called when a state changes
  // useEffect(()=>{
  //   console.log('Without dependancy array')
  // })

  //With Empty Dependancy array - called only for the first time when component renders
  // useEffect(()=>{
  //   console.log('With Empty Dependancy array')
  // },[])

  //With Dependancy Array - called only when the mentioned state changes
  // useEffect(()=>{
  //   console.log('With Dependancy array for email and batch')
  // },[email,batch])

  

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
                  <Form.Control type="text" placeholder="First Name"  value = {firstName} onChange={(e)=>{setFName(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name"  value = {lastName} onChange={(e)=>setLName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  value = {email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" placeholder="Mobile" value = {mobile}  onChange={(e)=>setMobile(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control type="text" placeholder="Batch"  value = {batch} onChange={(e)=>setBatch(e.target.value)}/>
                </Form.Group>
              <Button variant="primary" onClick={()=>handleEdit()}>
                Submit
              </Button>
            </Form>
        </div>
      </div>
    </div>
</>
}

export default EditUser