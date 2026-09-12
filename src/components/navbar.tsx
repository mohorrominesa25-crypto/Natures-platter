import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/nav-logo.png"
import type { Iproduct } from "../types/popular";
import type { Dispatch, SetStateAction } from "react";
interface IPopularProductsProps{
    UserPromise:Promise<Iproduct[]>;
    cart:Iproduct[];
    setcart: Dispatch<SetStateAction<Iproduct[]>>;
}
const Navbar=({cart,setcart}:IPopularProductsProps)=>{
    return (
        <nav className=" bg-[#f1eee7] flex justify-between gap-4 items-center container mx-auto px-25 py-5 border-2 border-gray-300">
        <img src= {Logo} alt=""  className="h-20 w-25"/>
        <ul className="flex justify-between gap-8">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            
        </ul>
        <div className="flex justify-between gap-5 items-center">
            <CiSearch />
            <FaShoppingCart />
            <span className="text-green-500 font-semibold">{cart.length}</span>
            <button className="bg-green-500 border-green-400 px-5 py-2 rounded-lg text-white font-semibold hover:scale-110">Login</button>
            <button className="bg-green-500 border-green-400 px-5 py-2 rounded-lg text-white font-semibold hover:scale-110">Buy Now</button>
            </div>
    </nav>
    )
}
export default Navbar;