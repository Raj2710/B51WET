import React,{useEffect} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
function NestedExample() {
    let navigate = useNavigate()


    useEffect(()=>{
        navigate('class')
    },[])
  return <>
    <div className='nested-wrapper'>
        <h3>Nested Routing Example</h3>
        <div className='list-wrapper'>
            <ul className='list'>
                <li onClick={()=>navigate('class')}>Class</li>
                <li onClick={()=>navigate('query')}>Query</li>
                <li onClick={()=>navigate('task')}>Task</li>
            </ul>
        </div>
        <div className='content-wrapper'>
            <Outlet/>
        </div>
    </div>
  </>
}

export default NestedExample