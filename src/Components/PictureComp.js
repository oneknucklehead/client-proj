import React from 'react'
import img from '../Images/ganesh-5508585_1920.jpg'
const PictureComp = () => {
  return (
    <div className=' h-96 w-full bg-primary relative'>
      <img src={img} className='h-full w-full object-cover' />
      <p className='absolute top-48 text-white text-4xl text-center'>
        "There is no must in art cause art is free." Wassily Kandinsky
      </p>
    </div>
  )
}

export default PictureComp
