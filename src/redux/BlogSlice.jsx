import { createSlice } from '@reduxjs/toolkit'
import BlogsService from '../apiService/Blogs'
export const blogSlice = createSlice({
    name:'blogs',
    initialState:[],
    reducers:{
        saveAllBlogs: (state,action)=>{
            console.log(action.payload.data)
            return action.payload.data
        },
        deleteBlog:(state,action)=>{
            let index
            for(let i=0;i<state.length;i++)
            {
                if(state[i].id===action.payload.id)
                {
                    index=i;
                    break;
                }
            }
            BlogsService.deleteBlog(state[index].id)
            state.splice(index,1)
            return state
        },
        toggleBlog:(state,action)=>{
            let index
            for(let i=0;i<state.length;i++)
            {
                if(state[i].id===action.payload.blog.id)
                {
                    index=i;
                    break;
                }
            }
            state[index].status=!state[index].status
            BlogsService.toggleBlog(state[index])
            return state
        }
    }
})

export const {saveAllBlogs,deleteBlog,toggleBlog} = blogSlice.actions
export default blogSlice.reducer