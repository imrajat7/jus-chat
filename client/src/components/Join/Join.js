import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = ()=>{
  const [name, setname] = useState("");
  const [room, setroom] = useState("");

  const handleClick = (event)=>{
    if(!name || !room){
      event.preventDefault();
    }
    return;
  }

  return(
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event)=> setname(event.target.value)}/>
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=> setroom(event.target.value)}/>
        </div>
        <Link onClick={handleClick} to={`/chat/?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;