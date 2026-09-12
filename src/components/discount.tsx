const Discount = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 my-16">
      <div className="bg-green-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-green-600 font-semibold mb-2">
            Special Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get 20% Off Your First Order!
          </h2>

          <p className="text-gray-600 mb-6">
            Fresh vegetables delivered straight to your doorstep.
          </p>

          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-full w-48 h-48 md:w-60 md:h-60 flex items-center justify-center shadow-md">
          <div className="text-center">
            <p className="text-gray-500 text-lg">
              Save
            </p>

            <p className="text-5xl font-bold text-green-600">
              20%
            </p>

            <p className="text-gray-500">
              OFF
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Discount;