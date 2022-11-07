import React from 'react'
import Collection from './Collection'

const CollectionsComp = () => {
  return (
    <>
      <div className='flex gap-2 m-5'>
        <div className='m-auto'>
          <div className='text-4xl my-5 text-primary'>Shop by collection</div>
          <div className='flex flex-wrap gap-10'>
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
          </div>
          <div className='flex flex-wrap gap-10'>
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
          </div>
        </div>
      </div>
    </>
  )
}

export default CollectionsComp
