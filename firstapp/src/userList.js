import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  
  const [list, setList] = useState([]);

  
  useEffect(() => {
   
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);
  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} : {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
