import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Add({setTodo}) {
  let [task,setTask] = useState("")
  let [description,setDesc] = useState("")

  let addTodo = ()=>{
    setTodo((current)=>{
      let id = current[current.length-1].id?++current[current.length-1].id:0
      let newArray = [...current]
      newArray.push({
        id,
        task,
        description,
        status:true
      })
      return newArray
    })
    setTask("")
    setDesc("")
  }
  return (
    <div className='add-wrapper'>
        <div>
            <TextField id="standard-basic" label="Todo" value={task} variant="standard" size='normal' fullWidth onChange={(e)=>setTask(e.target.value)}/>
        </div>
        <div>
            <TextField id="standard-basic" label="Description" value={description} variant="standard" size='normal' fullWidth onChange={(e)=>setDesc(e.target.value)}/>
        </div>
        <div >
            <Button variant="contained" onClick={()=>addTodo()}>Add</Button>
        </div>
    </div>
  )
}

export default Add