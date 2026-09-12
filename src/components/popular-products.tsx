import { use, type Dispatch, type SetStateAction } from 'react';
import leftPic from '../assets/Mask group.png'
import type { Iproduct } from '../types/popular';
import { toast } from 'react-toastify';
 
interface IPopularProductsProps{
    UserPromise:Promise<Iproduct[]>;
    cart:Iproduct[];
    setcart: Dispatch<SetStateAction<Iproduct[]>>;
}

const PopularProducts = ( {UserPromise,cart,setcart}:IPopularProductsProps) => {
    const product=use(UserPromise);
    const handleCart=(product:Iproduct)=>{
        console.log("Added to Cart: ",product);
        setcart([...cart,product])
        toast(`${product.title} added to cart!!!`)
    }
    return (
        <section className='bg-[#f1eee7]'>
            <h2 className='container mx-35 font-semibold text-3xl text-green-600 pt-10 '>Popular Products</h2>
            <div className="grid grid-cols-12 px-35 py-10 gap-2">
                <div className=" col-span-3 border-2 border-gray-300 rounded-2xl  bg-linear-to-br from-green-600 to-green-300 py-20 px-2">
                      <h2 className="text-2xl font-bold mb-5">30% Discount</h2>
                      <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officiis deserunt magnam repellendus soluta incidunt officia dolorum!</p>
                      <button className="bg-white border-green-400 px-5 py-4 mt-5  rounded-lg  text-green-700 font-semibold hover:scale-110">Buy Now</button>
                      <img src={leftPic} alt=""/>
                </div>
                <div className="col-span-9  rounded-2xl ">
                   <div className='grid grid-cols-3 gap-3'>
                     {
                        product.map(element=>{
                           return(
                               <div className=' border-2 border-white rounded-2xl p-2  '>
                                <img src={element.image} alt="" className='h-24 w-35' />
                                <h2>{element.rating}</h2>
                                <h1>{element.title}</h1>
                                <p>{element.price}</p>
                                <button onClick={()=>{handleCart(element)}} className='font-semibold hover:scale-105 bg-green-500 border-2 border-gray-100 rounded-[7px] text-white p-2'>Add to Cart</button>
                               </div> 
                           ) ;
                        })
                    }
                   </div>
                </div> 
            </div>
        </section>
    );
};

export default PopularProducts;