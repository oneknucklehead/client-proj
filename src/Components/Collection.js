import React from 'react'
import img from '../Images/statuette-3108045_1920.png'

const Collection = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='border-2 border-primary rounded-full w-48 px-4 py-3 '>
          <div className='h-80 '>
            <img src={img} className='h-80 object-cover' />
          </div>
        </div>
        <p className='text-purple font-bold text-center my-10'>
          {' '}
          Divine Essentials
        </p>
      </div>
    </>
  )
}

export default Collection
