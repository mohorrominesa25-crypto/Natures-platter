import type { Iproduct } from "../types/popular";

interface ICartItemProps {
  cart: Iproduct[];
}

const Cartitem = ({ cart }: ICartItemProps) => {
  return (
    <div className="bg-[#f1eee7] mt-8 py-2 px-5">
      <h2 className="container mx-35 font-semibold text-3xl text-green-600 pt-10  ">
        Cart Items:
      </h2>

      <div className="container font-semibold text-2xl pt-5 grid grid-cols-3 gap-4 px-20">
        {cart.length === 0 ? (
          <p className="text-gray-500 px-15">No items added to cart</p>
        ) : (
          cart.map((element) => (
            <div
              key={element.title}
              className="bg-white p-4 mb-3 rounded-lg flex items-center gap-5"
            >
              <img
                src={element.image}
                alt={element.title}
                className="h-24 w-35 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold text-xl">
                  {element.title}
                </h3>

                <p className="text-green-600 font-semibold">
                  ${element.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cartitem;