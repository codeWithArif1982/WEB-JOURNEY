import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
    </div>
  );
}

function User(props){
  return(
    <div className="loadUsers">
      <h2> Name : {props.name}</h2>
      <h2>User Name : {props.userName}</h2>
      <h2> Email : {props.email}</h2>
    </div>
  )
}

function LoadUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div >
        <h1>Users Loaded: {users.length}</h1>
        {
          users.map(user => <User name = {user.name} userName = {user.username} email = {user.email}></User>)
        }
    </div>
  )

}

export default App;
