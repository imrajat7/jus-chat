import React from 'react';
import './Input.css'

const Input = ({message,setmessage,sendMessage})=>{
  return(
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..." 
        value={message} 
        onChange={(event)=> setmessage(event.target.value)}
        onKeyPress={event => event.key==='Enter'? sendMessage(event) : null} 
      />
      <button className="sendButton" onClick={(event)=> sendMessage(event)}>Send</button>
    </form>
  )
}

export default Input;