import React from 'react';

const UserList = (props) => {
  return (
    <div className='user'>
    
      {props.users.map((user, index) => (
        <p key={index}>
          <pre>{user.name} Age:{user.age} College:{user.college}</pre>
        </p>
      ))}
   
    </div>
  );
};

export default UserList;
