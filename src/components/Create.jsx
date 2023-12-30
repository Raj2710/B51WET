import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BlogCard from './BlogCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
function Create() {
  let [title,setTitle] = useState("")
  let [description,setDesc] = useState("")
  let [image,setImage] = useState("")
  let navigate = useNavigate("")

  const handleSubmit= async()=>{
   try {
    let res = await axios.post(API_URL,{
      title,
      description,
      image,
      status:false
    })
    if(res.status===201)
    {
      alert('Blog Created Successfully')
      navigate('/dashboard')
    }
   } catch (error) {
      console.log(error)
   }

  }

  return <div className='create-wrapper container-fluid'>
    <div className='form-wrapper'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Image Url"  onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder='Description' onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
    <div className='preview-wrapper'>
      <h3 className='text-center'>Preview</h3>
        <BlogCard title={title} image={image} description={description}/>
    </div>
  </div>
}
//https://img.freepik.com/free-vector/golden-2024-new-year-lettering-background-with-firework-decoration-vector_1017-45961.jpg
export default Create