import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { API_URL } from '../App';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { saveAllBlogs,deleteBlog,toggleBlog } from '../redux/BlogSlice';

function Dashboard() {
  let blogs = useSelector(state=>state.blogs)
  let dispatch = useDispatch()
  const getBlogs = async()=>{
      try {
        let res = await axios.get(API_URL)
        dispatch(saveAllBlogs({data:res.data}))
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    getBlogs()
  },[])
  return <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((e)=>{
            return <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td><img src={e.image} style={{width:"100px"}}></img></td>
                <td><div className='description'>{e.description}</div></td>
                <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onClick={()=>dispatch(toggleBlog({blog:e}))}/>
                  <span className="slider round"></span>
                </label>
                </td>
                <td>
                  <i className="fa-solid fa-trash cursor-pointer" onClick={()=>dispatch(deleteBlog({id:e.id}))}></i>
                  &nbsp;
                  <i className="fa-solid fa-pen"></i>  
                </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>
}

export default Dashboard