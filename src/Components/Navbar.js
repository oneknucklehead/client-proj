import React from 'react'
import img from '../Images/logo.jpg'
import HoverableDropdown from './HoverableDropdown'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-center bg-purple text-white'>
        <div className='p-1'>
          20 off at shopping above 20,000 || Get 25 off at shopping Standing
          Diya
        </div>
      </div>

      <nav className='bg-white  px-2 py-2 rounded '>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <a href='#'>
            <img src={img} className='h-9 ' alt='Brand Logo' />
          </a>

          <div class='flex '>
            <div class='relative md:block'>
              <input
                type='text'
                id='search-navbar'
                className='block p-2 pr-10 text-tertiary   sm:text-sm '
                placeholder={`Let's look for your favourite....`}
              />
              <div class='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none '>
                <svg
                  class='w-5 h-5 text-tertiary'
                  aria-hidden='true'
                  fill='#97711E'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span class='sr-only'>Search icon</span>
              </div>
            </div>
          </div>
          <div
            class='flex justify-between items-center  w-auto '
            id='navbar-search'
          >
            <ul class='flex p-4 md:flex-row space-x-8 mt-0 '>
              <li>
                <a
                  href='/wishlist'
                  className='block text-primary p-0 '
                  aria-current='page'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='/cart' class='block  text-primary p-0 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='/profile' className='block text-primary p-0 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex mx-auto container flex-wrap justify-start md:justify-center border-t-2 border-primary items-center'>
        <HoverableDropdown
          title='Our Journey'
          items={[
            'Best Sellers',
            'New Arrivals',
            'Timeless Collection',
            'Our Favourites',
          ]}
        />
        <HoverableDropdown
          title='Top Picks'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Divine Essentials'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Decor'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Figurines'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Wooden Handicrafts'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Corporate Giftings'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
        <HoverableDropdown
          title='Say Hello'
          items={
            [
              // 'Best Sellers',
              // 'New Arrivals',
              // 'Timeless Collection',
              // 'Our Favourites',
            ]
          }
        />
      </div>
    </>
  )
}

export default Navbar
