import { useState } from 'react'
import Add from './components/Add'
import Todo from './components/Todo'

function App() {
  const [todo,setTodo] = useState([{
    id:1,
    task:"Learn React",
    description:"Should complete react till CRUD Operation today",
    status:false
  },
  {
    id:2,
    task:"Go for a Movie",
    description:"It was a busy week so need a break from all hustle",
    status:true
  }])
  return <>
    <div className='container-fluid wraper'>
      <div className='header'>
          <h1>My Todo's</h1>
      </div>
      <div>
          <Add setTodo={setTodo}/>
          <Todo todo={todo} setTodo={setTodo}/>
      </div>
    </div>
  </>
}

export default App
