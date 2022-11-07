import React from 'react'
import Product from './Product'
import img1 from '../Images/buddha-4440349_1920.jpg'
import img2 from '../Images/ganesh-5508585_1920.jpg'
import img3 from '../Images/statuette-3108045_1920.png'
import img4 from '../Images/lord-krishna-7366880_1920.jpg'
import img5 from '../Images/lord-krishna-7366880_1920.jpg'

const ProductsComp = (props) => {
  return (
    <>
      <div className='flex'>
        <div className='md:p-5 m-auto'>
          <p className='text-4xl my-5 text-primary'>{props.title}</p>
          {/* <div> */}
          <div class='flex justify-center flex-wrap gap-3'>
            <Product
              src={img1}
              title={'Wall Hanging'}
              description={'Wall Hanging'}
              price={'$1230.00'}
            />
            <Product
              src={img2}
              title={'Wall Hanging'}
              description={'Wall Hanging'}
              price={'$1230.00'}
            />
            <Product
              src={img3}
              title={'Wall Hanging'}
              description={'Wall Hanging'}
              price={'$1230.00'}
            />
            <Product
              src={img4}
              title={'Wall Hanging'}
              description={'Wall Hanging'}
              price={'$1230.00'}
            />
            <Product
              src={img5}
              title={'Wall Hanging'}
              description={'Wall Hanging'}
              price={'$1230.00'}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default ProductsComp
