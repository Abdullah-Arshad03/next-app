import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <>
    <h1>Helloww from the Abdullah Lets goo</h1>
  <button className='btn btn-secondary mr-4'>  <Link href="/users">Users</Link> </button>
   
    <button className='btn btn-secondary'> <Link href='/products'>Go To Products 
    </Link>

    </button>
    
    <ProductCard></ProductCard>

    <Link href="/products?sortOrder=lmao" >check query</Link>
    </>
  )
}
