import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({todo,setTodo}) {
  const [value, setValue] = useState(0);
  const [viewTodo,setView] = useState(todo)

  const handleChange = (event,newValue) => {
    setValue(newValue);

    if(newValue===0)
      setView([...todo])
    else if(newValue===1)
      setView(todo.filter(e=>e.status===true))
    else
      setView(todo.filter(e=>e.status===false))
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return <div className='todo-wrapper'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Pending" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {
          viewTodo.map((e,i)=>{
            return <TodoItem data = {e} key={i} setTodo={setTodo}/>
          })
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      {
          viewTodo.map((e,i)=>{
            return <TodoItem data = {e} key={i} setTodo={setTodo}/>
          })
        }
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      {
          viewTodo.map((e,i)=>{
            return <TodoItem data = {e} key={i} setTodo={setTodo}/>
          })
        }
      </CustomTabPanel>
    </Box>
  </div>
}


function TodoItem({data,setTodo}){
  const allowEdit = ()=>{

  }
  const handleDelete=(id)=>{
    console.log(id)
      setTodo(current=>{
        let index=0
        for(let i = 0;i<current.length;i++)
        {
          if(current[i].id===id)
          {
            index=i
            break;
          }
        }
        
        let newArray = [...current]
        newArray.splice(index,1)
        return newArray
      })
  } 
  return <>
    <div className='add-wrapper'>
            <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                size='normal' 
                value = {data.task} 
                fullWidth 
                InputProps={{disableUnderline: true}}/>
            </div>
            <div>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                size='normal' 
                value = {data.description} 
                fullWidth 
                InputProps={{disableUnderline: true}}/>
            </div>
            <div className='icons-wrapper'>
              <EditIcon className='icons' onClick={()=>allowEdit()}/>
              <DeleteIcon className='icons' onClick={()=>handleDelete(data.id)}/>
            </div>
        </div>
  </>
}

export default Todo