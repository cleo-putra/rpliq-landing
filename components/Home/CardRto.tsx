import React from "react";

const CardRto = () => {
  return (
    <div className="overflow-hidden bg-white  max-container padding-container my-20">
      <div className="bg-gray-200 grid md:grid-cols-3 xs:grid-cols-1 gap-4 mx-auto md:py-0 xs:py-4">
        <div className="col-span-1">
          <img className="h-max w-max mx-auto" src="/cardRto.png" alt="photo" />
        </div>
        <div className="col-span-2 md:px-10 xs:px-4">
          <h3 className="lg:mt-12 xs:mt-0 md:text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Are you ready to take your RTO to the next level?
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our RPLiQ team can help you go through the system and answer any
            questions your have about our RTO software.
          </p>

          <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
            <button className="flexCenter gap-3" type="button">
              <label className="font-bold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                Start Free Trial
              </label>
            </button>
            <button className="flexCenter gap-3" type="button">
              <label className="font-bold whitespace-nowrap btn_white_green lg:text-normal xs:text-xs">
                Request Demo
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRto;
