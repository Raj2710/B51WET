
import React,{useReducer} from 'react'
import { Actions } from './Actions'
export const UserContext = React.createContext(null)
const initialValues = [
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
]
function UserReducer(state,payload){
    switch(payload.action)
    {
        case Actions.ADD:{
          let {data} = payload
          let newArray = [...state]
          newArray.push(data)
          return newArray
        }
        case Actions.EDIT:{
          let {id,data} = payload
          let newArray = [...state]
          newArray.splice(id,1,data)
          return newArray
        }
        case Actions.DELETE:{
          let {id} = payload
          let newArray = [...state]
          newArray.splice(id,1)
          return newArray
        }
    }
}
function UserContextComponent({children}) {
    let [user,userDispatch] =  useReducer(UserReducer,initialValues)
  return <UserContext.Provider value={{user,userDispatch}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent