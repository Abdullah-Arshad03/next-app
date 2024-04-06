 // 'use client' It is written to make this component from the server to the clinet component, by default it is the server component, but as we use browser event in it i-e button and which use onClick, which is not possible in the server component, so in order to make things work, either we have to two choices. 1) to pull out that browser event from the component . or 2) to make the whole component client side, so for making ther whole component client we have to use the 'use client' at the top of that particular component.

import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (<>
    <div>This is the react component the normal component which we create and then export it into any other page </div>
    <AddToCart></AddToCart>
    <br />

    </>
  )
}

export default ProductCard