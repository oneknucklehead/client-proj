import React from 'react'
import img1 from '../Images/idol-1834688_1920.jpg'
import img2 from '../Images/pottery-4618917_1920.jpg'
import img3 from '../Images/buddha-4440349_1920.jpg'

const Carousel = () => {
  return (
    <>
      <div
        id='carouselExampleCaptions'
        className='carousel slide relative mt-5'
        data-bs-ride='carousel'
      >
        <div
          class='carousel-inner relative w-full overflow-hidden
          h-96
        '
        >
          <div
            class='carousel-item active relative float-left w-full 
          h-96
          '
          >
            <img src={img1} class='block w-full object-cover h-96' alt='...' />
            <div class='carousel-caption block absolute  top-20'>
              <h5 class='text-xl '>Shopping above 50,000 on </h5>
              <h5 class='text-xl'>
                <span className='text-secondary'>Wooden Furniture</span>
              </h5>
              <h5 class='text-xl'>u will get 2,000 discount</h5>
              <div className='border mt-5 border-secondary w-fit p-1 rounded'>
                <button className='btn text-black font-bold bg-secondary px-10 py-1  rounded'>
                  Go to the page
                </button>
              </div>
            </div>
          </div>
          <div class='carousel-item relative float-left w-full h-96'>
            <img src={img2} class='block w-full  object-cover h-96' alt='...' />
            <div class='carousel-caption block absolute top-20'>
              <h5 class='text-xl '>Shopping above 50,000 on </h5>
              <h5 class='text-xl'>
                <span className='text-secondary'>Wooden Furniture</span>
              </h5>
              <h5 class='text-xl'>u will get 2,000 discount</h5>
              <div className='border mt-5 border-secondary w-fit p-1 rounded'>
                <button className='btn text-black font-bold bg-secondary px-10 py-1  rounded'>
                  Go to the page
                </button>
              </div>
            </div>
          </div>
          <div class='carousel-item relative float-left w-full h-96'>
            <img src={img3} class='block w-full h-96 object-cover' alt='...' />
            <div class='carousel-caption block absolute  top-20 '>
              <h5 class='text-xl '>Shopping above 50,000 on </h5>
              <h5 class='text-xl'>
                <span className='text-secondary'>Wooden Furniture</span>
              </h5>
              <h5 class='text-xl'>u will get 2,000 discount</h5>
              <div className='border mt-5 border-secondary w-fit p-1 rounded'>
                <button className='btn text-black font-bold bg-secondary px-10 py-1 rounded'>
                  Go to the page
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            class='carousel-control-prev-icon inline-block bg-no-repeat'
            aria-hidden='true'
          ></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            class='carousel-control-next-icon inline-block bg-no-repeat'
            aria-hidden='true'
          ></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
      {/* <div class='carousel-indicators flex justify-center p-0'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          className='active bg-secondary'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='1'
          className='active btn'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='2'
          aria-label='Slide 3'
          className='active btn'
        ></button>
      </div> */}
    </>
  )
}

export default Carousel
