import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
function App() {
  let [user,setUser] = useState([
    {
        firstName:"Ajith",
        lastName:"Kumar",
        email:"ajith@gmail.com",
        mobile:"9087654321",
        batch:"B51" 
    },
    {
      firstName:"Lokesh",
      lastName:"Kumar",
      email:"lokesh@gmail.com",
      mobile:"7890987654",
      batch:"B51" 
  },
  {
    firstName:"Yogesh",
    lastName:"Waran",
    email:"yohesh@gmail.com",
    mobile:"4567897649",
    batch:"B51" 
  } 
  ])
  return <>
  <div id="wrapper">
      <Sidebar/>
      <Dashboard user={user} setUser={setUser}/>
  </div>
  </>
}

export default App
