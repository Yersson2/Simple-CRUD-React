import React, { useState } from 'react';
import UserTable from './Components/UserTable';
import { v4 as uuidv4 } from 'uuid'
import AddUserForm from './Components/AddUserForm';
import EditUserForm from  './Components/EditUserForm'


function App() {

  // creando datos
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  
  // estado
  const[users, setUsers] = useState(usersData);

  // agregando usuario
  const addUser = (user) =>{
    user.id = uuidv4(); // asignando un id aleatorio
    setUsers([
      ...users,
      user
    ])
  }

  // eliminar un usuario
  const deleteUser = (id) => { 
    setUsers(users.filter(user => user.id !== id))
  }

  // editar usuario
  const[editing, setEditing] = useState(false);

  const[currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: ''
  });

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }
  

  return (
    <div className="container">
      <h1>CRUD App con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Editar usuario</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/> 
              </div>
            ) : (
              <div>
                <h2>Agregar usuario</h2>
                <AddUserForm addUser={addUser}/>  
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
