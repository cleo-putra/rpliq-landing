import CardRto from "@/components/Home/CardRto";
import CarouselProduct from "@/components/Product/CarouselProduct";
import ProductCard from "@/components/Product/ProductCard";
import ProductTwoCard from "@/components/Product/ProductTwoCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">Cloud-Based RPL Software</mark>
              <h2 className="mt-6 text-[40px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                Automated Assessment Tools To Track Student Progress
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RPLiQ is a software that automates and simplifies the entire RPL
                process for RTOs. RPLiQ is your solution for a modernised,
                hassle-free qualification journey.
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_dark_green lg:text-normal xs:text-xs">
                    Start Free Trial
                  </label>
                </button>
                <button className="flexCenter gap-3" type="button">
                  <label className="font-semibold whitespace-nowrap btn_white_green lg:text-normal xs:text-xs">
                    Request Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/product-banner.png"
              width={507}
              height={458}
              alt="Product screenshot"
              className="rounded-x"
            />
          </div>
        </div>
      </div>
      <ProductCard />
      <ProductTwoCard />
      <ProductCard />
      <CarouselProduct />
      <CardRto />
    </>
  );
};

export default page;
