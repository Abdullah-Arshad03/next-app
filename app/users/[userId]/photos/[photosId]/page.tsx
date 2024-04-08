import React from 'react'



interface Props {
    params : {
        userId: number
     photosId : number
    }
}
const page = ({params:{ userId ,photosId}} : Props) => {
  return (
    <div>Photo Id { photosId } ; user Id {userId} </div>
  )
}

export default page