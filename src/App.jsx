import { useState } from "react"
import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import UserContextComponent from "./utils/UserContextComponent"
import NestedExample from "./components/NestedExample/NestedExample"
import Class from './components/NestedExample/Class'
import Query from './components/NestedExample/Query'
import Task from './components/NestedExample/Task'
import UseRef from "./components/UseRef"
import UseReducer from "./components/UseReducer"
function App() {
  
  return <>
  <BrowserRouter>
  <div id="wrapper">
        <Sidebar/>
      <Routes>
        <Route path="/dashboard" element={<UserContextComponent><Dashboard /></UserContextComponent>}/>
        <Route path="/add-user" element={<UserContextComponent><AddUser /></UserContextComponent>}/>
        <Route path="/edit-user/:id" element={<UserContextComponent><EditUser/></UserContextComponent>}/>
        <Route path="/nested-example" element={<NestedExample/>}>
            <Route path='class' element={<Class/>}/>
            <Route path='query' element={<Query/>}/>
            <Route path='task' element={<Task/>}/>
        </Route>
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usereducer" element={<UseReducer/>}/>
        <Route path="*" element={<Navigate to='/dashboard'/>}/>

      </Routes>
  </div>
  </BrowserRouter>
  </>
}
export default App