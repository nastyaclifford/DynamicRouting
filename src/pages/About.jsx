import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom" 

export default function About () {

// 1) receiving users list from server and recording it into state
const [users, setUser] = useState (false)

//3)  taking json from server using useEffect, doing it one time when the component will render, that's why we leave an empty array
//calling getUsers function that is created below
useEffect (()=>{
  getUsers()
}, []) 

//2) creating fetch, processing data and record them  
  async function getUsers(){
  const resp = await fetch ('https://jsonplaceholder.typicode.com/users')
  const dets = await resp.json()
  setUser(dets)} 

//checking if user === false (it will be false as default state), then returning Loading
if (!users){
  return <h1>Loading...</h1>
}

return (
    <div>
      <ul>
        {users.map ((item) => ( 
          //1)making all users names as Links
          //2)defining id for each item as their route
          <li><Link to={`/about/${item.id}`}>{item.name}</Link></li>
        ))}
      </ul>
    </div>
  )
};


