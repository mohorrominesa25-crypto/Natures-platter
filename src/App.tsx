import Navbar from './components/navbar'
import Banner from './components/banner'
import Services from './components/services'
import PopularProducts from './components/popular-products'
import Discount from './components/discount'
import Footer from './components/footer'
import { useState } from 'react'
import type { Iproduct } from './types/popular'
import { ToastContainer } from 'react-toastify'
import Cartitem from './components/cartitem'

const productFetch=async()=>{
  const response= await fetch('../popular-products.json');
  const data=await response.json();
  return data;
}
 
const UserPromise=productFetch();

const App = () => {
     
    const [cart,setcart]=useState<Iproduct[]>([]);
    
    return (
        <div>
            <Navbar cart={cart} setcart={setcart}></Navbar>
    <Banner></Banner>
    <Services></Services>
    <PopularProducts UserPromise={UserPromise} cart={cart} setcart={setcart}></PopularProducts>
    <Cartitem cart={cart}></Cartitem>
    <Discount></Discount>
    <Footer></Footer>
    <ToastContainer />
        </div>
    );
};


export default App;