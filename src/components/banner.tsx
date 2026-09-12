import BannerPic from "../assets/Hero Section 1.png"

const Banner = () => {
    return (
        <div className="container mx-auto px-25  py-20 text-center bg-[#f7f3ea] ">
            <h2 className="text-3xl font-semibold pb-5">Freshness <span className="text-green-600">You can count on,</span>  Prices are reasonable <br /> <span className="text-green-500">Happinesss </span>in Healthy Food</h2>
            <p className="text-gray-700 text-[30px] pb-5 ">Fresh fruit is available in our grocery shop.</p>
            <img src={BannerPic} alt="" className="mx-auto h-150" />
        </div>
    );
}

export default Banner;