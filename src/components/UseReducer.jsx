import React, { useReducer } from 'react'
import Button from 'react-bootstrap/Button';
import {CounterReducer} from '../reducer/CounterReducer'
const initialValues = {value:0}

function UseReducer() {
    let [counter,counterDispatch] = useReducer(CounterReducer,initialValues)
  return <>
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <h2>useReducer</h2>
                <Button variant='danger' onClick={()=>counterDispatch({action:"DECREMENT"})}>-</Button>
                &nbsp;
                {counter.value}
                &nbsp;
                <Button variant='success' onClick={()=>counterDispatch({action:"INCREMENT"})}>+</Button>
                &nbsp;
            <Button variant='info' onClick={()=>counterDispatch({action:"RESET"})}> Reset </Button>
          </div>
        </div>
    </div>
  </>
}

export default UseReducer