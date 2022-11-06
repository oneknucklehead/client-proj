import './App.css'
import Carousel from './Components/Carousel'
import CollectionsComp from './Components/CollectionsComp'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Numbers from './Components/Numbers'
import PictureComp from './Components/PictureComp'
import ProductsComp from './Components/ProductsComp'
import SignUpComp from './Components/SignUpComp'

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Numbers />
      <ProductsComp title={'Our Bestseller'} />
      <CollectionsComp />
      <PictureComp />
      <ProductsComp title={'Our New Arrivals'} />
      <ProductsComp title={'Our Timeless Collection'} />
      <SignUpComp />
      <Footer />
    </>
  )
}

export default App
