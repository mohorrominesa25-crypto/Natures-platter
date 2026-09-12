import service from '../assets/service.png'
import delivery from '../assets/delivery.png'
import products from '../assets/products.png'
const Services = () => {
    return (
         <div>
            <h1 className='container mx-35 font-semibold text-3xl text-green-600 mt-10 '> Our Services</h1>
             <section className='grid grid-cols-3 justify-between gap-4 px-35 py-10'>
            <div className=' border-2 border-gray-200 rounded-[5px] text-center p-5 bg-[#f1eee7]'>
            <img src={service} alt="" className='mx-auto mb-2' />
            <h2 className='text-2xl font-semibold'>Our Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam saepe magnam similique maiores ab!</p>
        </div>
        <div className=' border-2 border-gray-200 rounded-[5px] text-center p-5 bg-[#f1eee7]'>
            <img src={delivery} alt="" className='mx-auto mb-2'/>
            <h2 className='text-2xl font-semibold' >Our Delivery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam saepe magnam similique maiores ab!</p>
        </div>
        <div className=' border-2 border-gray-200 rounded-[5px] text-center p-5 bg-[#f1eee7]'>
            <img src={products} alt=""  className='mx-auto mb-2'/>
            <h2 className='text-2xl font-semibold'>Our Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam saepe magnam similique maiores ab!</p>
        </div>
        </section>
         </div>
       
    );
};

export default Services;