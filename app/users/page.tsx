import React from 'react'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
const UsersPage = async () => {

    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()


    console.log('this is the response',users)


  return (<>
    <div>This is the Users Page !</div>
     <h4>Following are the Users!</h4>
     <h6>{users.map((user)=>(<> <li>{user.name}</li></>))}</h6>
  
    </>

    
  )
}
export default UsersPage