"use client"
import {MyContext} from '@/Helper/Context'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
     setUsers(data); 
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  const Decs = useContext(MyContext)
  return (
    <>
      <button  onClick={()=>{
        getUsers();
      }} className='p-3 m-5 bg-green-600 text-white items-center font-bold rounded ' >Get Data</button>
        <div>{Decs}</div>
      <div className='p-8 bg-slate-100 mt-5'>
        <ul>
          
        {users.map((e) => {
          return <li>{e.name}  ------ <a href={e.id}>Details</a></li>
        })}
        </ul>
      </div>
    </>
  )
}

export default page