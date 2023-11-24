import React from "react";

const ProductTwoCard = () => {
  return (
    <div className="max-container padding-container mx-auto pt-12">
      <div className="sm:flex sm:justify-center px-10">
        <div className="bg-black-10 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
          <a href="#!">
            <img
              className="rounded-t-lg sm:rounded-none w-fit"
              src="./p-1.png"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-white">
              Card title
            </h5>
            <p className="mb-4 text-base text-white">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
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
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTwoCard;
