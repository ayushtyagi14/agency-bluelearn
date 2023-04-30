import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#">Press</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Our Features</a>
              </li>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Connect with Us</h4>
            <ul>
              <li className="mb-2">
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2">
                <a href="#">Customer Support</a>
              </li>
              <li className="mb-2">
                <a href="mailto:ayush.tyagi145@gmail.com">
                  ayush.tyagi145@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+919911828286">+91 9911828286</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300 mt-8 mb-6" />
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BlueLearn. All rights reserved.
          </div>
          <div>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
