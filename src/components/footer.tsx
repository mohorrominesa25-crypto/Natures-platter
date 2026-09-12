const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="container mx-auto px-5 md:px-10 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Nature's Platter
            </h2>

            <p className="text-gray-400 leading-7">
              Fresh and healthy vegetables delivered
              directly to your doorstep. Eat fresh,
              stay healthy.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                Home
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Products
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>


          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer">
                Vegetables
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Fruits
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Organic Foods
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Fresh Products
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Dhaka, Bangladesh</p>

              <p>📞 +880 1234-567890</p>

              <p>✉️ info@naturesplatter.com</p>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">

          <p className="text-gray-500">
            © 2026 Nature's Platter. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;