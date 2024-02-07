import { useEffect, useState } from 'react';
import './App.css';

function App() {
//  const products = [
//   {name : 'Mobile', price : 1500},
//   {name : 'Camera', price : 500},
//   {name : 'Laptop', price : 2500},
//   {name : 'Watch', price : 100},
//   {name : 'Shoes', price : 20}
//  ]
//  return(
//   <div>
//     {
//       products.map(product => <Product name={product.name} price={product.price}></Product>)
//     }
//   </div>
  
//  )
//  function Product (props){
//   return(
//     <div className= "product">
//       <h1>Product name : {props.name}</h1>
//       <h4>Price : {props.price}</h4>
//     </div>
//   )
//  }

return(
  <div className="App">
    <Counter></Counter>
    <ExternalUser></ExternalUser>
  </div>
)

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>External Users</h3>
      {users.map(user=><User name = {user.name} email = {user.email} ></User>)}
    </div>
  )
}

function User(props){
  return(
    <div className='users'>
      <h2>name : {props.name}</h2>
      <p>Email : {props.email}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease  = ()=>{
    const newCounter = count+1;
    setCount(newCounter)
  }
   const handleDecrease  = ()=>{
    const newCounter = count-1;
    setCount(newCounter)
  }
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleIncrease}> Increase </button>
      <button onClick={handleDecrease}> Decrease </button>
    </div>
  )
}
}



  
export default App;
