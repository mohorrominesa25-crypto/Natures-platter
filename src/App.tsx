import Navbar from './components/navbar'
import Banner from './components/banner'
import Services from './components/services'
import PopularProducts from './components/popular-products'
import Discount from './components/discount'
import Footer from './components/footer'
import { Suspense, useState } from 'react'
import type { Iproduct } from './types/popular'
import { ToastContainer } from 'react-toastify'
import Cartitem from './components/cartitem'
import { DiVim } from 'react-icons/di'

const productFetch=async()=>{
  const response= await fetch('../popular-products.json');
  const data=await response.json();
  return data;
}
 


const App = () => {
     const UserPromise=productFetch();
    const [cart,setcart]=useState<Iproduct[]>([]);
    
    return (
        <div>
            <Navbar cart={cart} setcart={setcart}></Navbar>
    <Banner></Banner>
    <Services></Services>
    <Suspense fallback={<div>Loading.....</div>}><PopularProducts UserPromise={UserPromise} cart={cart} setcart={setcart}></PopularProducts></Suspense>
    <Cartitem cart={cart}></Cartitem>
    <Discount></Discount>
    <Footer></Footer>
    <ToastContainer />
        </div>
    );
};


export default App;