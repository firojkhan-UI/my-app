import React, {  useRef } from 'react'

const Uncontrolled = () => {
        const inputRef = useRef({})
        const _handleChange = e => {
          inputRef.current[e.target.id]= e.target.value
        }
        const _handleSubmit = (e) => {
          console.log(inputRef.current,"::::::data")
        
          e.preventDefault()
        }
        return (
          <>
          <form onSubmit={_handleSubmit}>
          Name:
            <input 
            type='text' 
            ref = {el => inputRef.current['name']= el} 
            id="name" onChange={_handleChange} />
          Emp_ID:  
            <input 
            type='text' 
            ref = {el => inputRef.current['emp_id']= el} 
            id="emp_id" onChange={_handleChange} />
          Address:  
            <input 
            type='text' 
            ref = {el => inputRef.current['add']= el} 
            id="add" onChange={_handleChange} />
            <button>submit</button>
          </form>
          </>
        )
    }        
export default Uncontrolled;
