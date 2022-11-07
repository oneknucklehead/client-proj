import React from 'react'
import img from '../Images/ganesh-5508585_1920.jpg'
const PictureComp = () => {
  return (
    <div className=' flex flex-col  h-96 w-full relative text-center'>
      <img src={img} className='h-full w-full object-cover' />
      <div className='w-full absolute top-44'>
        <p className=' text-white text-4xl'>
          "There is no must in art cause art is free." Wassily Kandinsky
        </p>
      </div>
    </div>
  )
}

export default PictureComp
