import React from 'react'

const SignUpComp = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-primary text-white'>
        <div className='m-auto text-center'>
          <p className='text-4xl mt-10 mb-4'>Sign Up and Get Update</p>
          <p className='text-xl mb-8'>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <input className='w-full p-2' />
        </div>
        <div className='border my-5 border-white w-fit p-1 rounded'>
          <button className='btn text-black font-bold bg-white px-10 py-1  rounded'>
            Go to the page
          </button>
        </div>
      </div>
    </>
  )
}

export default SignUpComp
