import axios from "axios";
import { API_URL } from "../App";
const toggleBlog = async(blog)=>{
    try {
      await axios.put(`${API_URL}/${blog.id}`,blog)
      } catch (error) {
        console.log(error)
      }
}

const deleteBlog = async(id)=>{
    try {
    await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

export default {
    toggleBlog,
    deleteBlog
}