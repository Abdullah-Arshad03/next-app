import React from 'react'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import UserTable from './UserTable'



const UsersPage = () => {
    // console.log('this is the response',users)

  return (<>
    <div>This is the Users Page !</div>
    <h2>{new Date().toLocaleTimeString()}</h2>
    
    <UserTable/>

     <Link href='/users/new'>
      <button className=' mt-4 btn btn-secondary'>Go to the nested users page!</button>
     </Link>

    </>

    
  )
}
export default UsersPage