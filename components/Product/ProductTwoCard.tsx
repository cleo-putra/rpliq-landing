import React from "react";

const ProductTwoCard = () => {
  return (
    <div className="max-container padding-container mx-auto pt-12 my-16">
      <div className="text-center">
        <h3 className="mt-6 text-3xl font-bold text-center">
          Revolutionised Students’ Way Of Learning With RPLiQ
        </h3>
        <h5 className="mt-5 md:px-40 xs:px-5 mb-10">
          Both students and RTOs can use RPLiQ to track the progress of RPL
          assessments. You can check the status of your qualification journey
          and monitor the processing of assessments.
        </h5>
      </div>
      <div className="sm:flex sm:justify-center px-10">
        <div className="bg-black-10 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-none w-fit"
              src="./p-1.png"
              alt="Palm Springs Road"
            />
          </a>
          <div className="lg:px-12 xs:px-4">
            <h5 className="mb-2 lg:text-xl xs:text-base font-medium leading-tight text-white">
              For Registered Training Organisations:
            </h5>

            <ul className="mb-4 lg:text-base xs:text-sm text-white list-disc ml-5">
              <li>Reduced Administrative Burden</li>
              <li>Reduced Administrative Burden</li>
              <li>Reduced Administrative Burden</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-10 flex flex-col rounded-lgshadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded-l-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-tl-none"
              src="./product2.png"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="lg:px-12 xs:px-4">
            <h5 className="mb-2 lg:text-xl xs:text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              For Registered Training Organisations:
            </h5>
            <ul className="mb-4 text-base lg:text-base xs:text-sm list-disc ml-5">
              <li>Reduced Administrative Burden</li>
              <li>Reduced Administrative Burden</li>
              <li>Reduced Administrative Burden</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTwoCard;
