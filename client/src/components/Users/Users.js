import React from 'react';

import './Users.css'
import onlineIcon from '../../icons/onlineIcon.png'

const Users = ({users})=>{
  return(
    <div className="textContainer">
      {
        users
          ? (
            <div>
              <h2>People currently chatting:</h2>
              <div className="activeContainer">
                <h3>
                  {users.map(({name}) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img alt="Online Icon" src={onlineIcon}/>
                    </div>
                  ))}
                </h3>
              </div>
            </div>
          ): null
      }
    </div>
  )
}

export default Users;