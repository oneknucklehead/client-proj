import React from 'react'
import img from '../Images/profile.jpg'

const ReviewSection = () => {
  return (
    <>
      <div className='flex'>
        <div className='p-5 xl:ml-[8vw] 2xl:ml-[18vw] '>
          <p className='text-primary text-4xl my-5 w-full'>Customer Reviews</p>
        </div>
      </div>
      <div
        id='carouselExampleControls'
        class='carousel slide relative min-h-96 py-5 mb-10'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner relative w-full overflow-hidden'>
          <div class='carousel-item active relative float-left w-full '>
            {/* <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
              class='block w-full'
              alt='Wild Landscape'
            /> */}
            <div className='block w-full'>
              <div className='flex flex-col items-center'>
                <img src={img} className='h-32 w-32' alt='profile' />
                <p className='text-4xl font-bold'>Huyasang kim</p>
                <p className='text-2xl p-4'>⭐⭐⭐⭐⭐</p>
                <div className='w-full text-primary'>
                  <p className='w-full text-center sm:px-5 text-2xl'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className='w-full text-center  sm:px-5  text-2xl'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='carousel-item relative float-left w-full'>
            {/* <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/042.webp'
              class='block w-full'
              alt='Camera'
            /> */}
            <div className='block w-full'>
              <div className='flex flex-col items-center'>
                <img src={img} className='h-32 w-32' alt='profile' />
                <p className='text-4xl font-bold'>Huyasang kim1</p>
                <p className='text-2xl  p-4'>⭐⭐⭐⭐⭐</p>
                <div className='w-full text-primary'>
                  <p className='w-full text-center  sm:px-5  text-2xl'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className='w-full text-center  sm:px-5  text-2xl'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='carousel-item relative float-left w-full'>
            {/* <img
              src='https://mdbcdn.b-cdn.net/img/new/slides/043.webp'
              class='block w-full'
              alt='Exotic Fruits'
            /> */}
            <div className='block w-full'>
              <div className='flex flex-col items-center'>
                <img src={img} className='h-32 w-32' alt='profile' />
                <p className='text-4xl font-bold'>Huyasang kim2</p>
                <p className='text-2xl  p-4'>⭐⭐⭐⭐⭐</p>
                <div className='w-full text-primary'>
                  <p className='w-full text-center sm:px-5  text-2xl'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className='w-full text-center sm:px-5  text-2xl'>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='inline-block' aria-hidden='true'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-12 h-12 text-primary'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='inline-block' aria-hidden='true'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-12 h-12 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default ReviewSection
