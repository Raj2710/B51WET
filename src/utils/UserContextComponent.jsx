
import React,{useState} from 'react'
export const UserContext = React.createContext(null)
function UserContextComponent({children}) {
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
  return <UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
}

export default UserContextComponent