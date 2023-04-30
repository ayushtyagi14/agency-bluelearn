import React from "react";

const CompanyDetails = () => {
  return (
    <div className="bg-white py-8 md:pt-28 pt-24 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            BlueLearn
          </h2>
          <p className="mt-2 md:text-[28px] text-[22px] leading-8 font-extrabold tracking-tight text-gray-900">
            Welcome to Our Agency
          </p>
          <p className="mt-4 max-w-2xl md:text-[18px] text-gray-500 lg:mx-auto">
            Here you can provide some details about your company, such as your
            mission statement or a brief history of the company. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Mollitia assumenda
            eligendi quas praesentium reprehenderit ut, eum voluptatibus nisi
            omnis adipisci? Temporibus consequuntur aliquam minus dicta non.
            Voluptatem dicta quam unde?
          </p>
          <div className="md:mt-10 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold md:text-[16px] text-[14px]"
            >
              Visit our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
