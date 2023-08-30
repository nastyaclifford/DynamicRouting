import React from "react"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
//adding useParams to get parameters from URL

export default function User () {

const [user, setUser] = useState (false)
const {data} = useParams()

useEffect (()=>{
    getUser()}, [])

//requesting user list from server and getting user with data from URL
async function getUser (){
const resp = await fetch (`https://jsonplaceholder.typicode.com/users/${data}`) 
const det = await resp.json()
setUser(det)
}

if (!user) {
    return <h1>Loading...</h1>
}




  return (
    <div>
      {user.name}
    </div>
  )
};


