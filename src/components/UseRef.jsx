import React,{useEffect,useState,useRef} from 'react'
import Button from 'react-bootstrap/Button';
function UseRef() {
    let [name,setName] = useState("")

    let count = useRef(0)

    useEffect(()=>{
      count.current += 1
    })

  return <>
  <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
          <h2>useRef</h2>
          <UseRefCase2/>
            {/* <label>Name:</label> <input type='text' onChange={(e)=>setName(e.target.value)}></input>
            <br/>
            The Name is : {name}
            <br/>
            Component Rendered {count.current} times */}
          </div>
        </div>
    </div>
  
  </>
}

function UseRefCase2(){
    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)

    const reset = ()=>{
        inp1.current.value=""
        inp2.current.value=""
        inp3.current.value=""
        inp4.current.value=""
        inp1.current.focus()
    }
    useEffect(()=>{
        reset()
    },[])
    const handleSubmit = ()=>{
        let value = inp1.current.value+inp2.current.value+inp3.current.value+inp4.current.value
        if(value.length===4)
            alert("The otp is :"+value)
        else{
            alert("Invalid OTP")
            reset()
        }
    }
    return<>
        <h4>Enter your OTP</h4>
        <input ref = {inp1} onChange={()=>{inp2.current.focus()}}/>
        <input ref = {inp2} onChange={()=>{inp3.current.focus()}}/>
        <input ref = {inp3} onChange={()=>{inp4.current.focus()}}/>
        <input ref = {inp4} onChange={handleSubmit}/>
        <Button variant='primary' onClick={handleSubmit}>Submit</Button>
        
    </>
}

export default UseRef