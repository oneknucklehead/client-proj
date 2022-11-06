import React from 'react'

const Product = (props) => {
  return (
    <div class=' bg-white max-w-sm'>
      <a href='#!'>
        <img className='h-36 object-cover' src={props.src} alt='product' />
      </a>
      <div class='p-6 text-center'>
        <p className='text-tertiary'>{props.title}</p>
        <p className='text-2xl font-bold text-primary'>{props.description}</p>
        <p className='font-bold text-xl'>{props.price}</p>
        <p className=''>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  )
}

export default Product
