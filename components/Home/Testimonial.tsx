import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-0 xs:flex xs:flex-wrap">
      <div className="bg-black-50">
        <div className="max-container padding-container-testimonial lg:py-20 xs:py-10">
          <p className="text-white text-2xl">
            RPLiQ is your secret weapon for simplifying RPL. We spend less time
            gathering evidence and I can shift my focus on growing my business.
            Thank you RPLiQ!{" "}
          </p>

          <div className="mt-10 flex gap-4">
            <Image
              width={30}
              height={30}
              className="h-max w-max rounded-full pt-1"
              src="/icon-user.png"
              alt="photo"
            />
            <div className="text-base">
              <div className="font-semibold text-white">Judith Black</div>

              <div className="text-white text-xs">CEO of Workcation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50">
        <div className="max-container padding-container-testimonial lg:py-20 xs:py-10">
          <p className="text-black-50 text-2xl">
            RPLiQ is your secret weapon for simplifying RPL. We spend less time
            gathering evidence and I can shift my focus on growing my business.
            Thank you RPLiQ!{" "}
          </p>

          <div className="mt-10 flex gap-4">
            <Image
              width={30}
              height={30}
              className="h-max w-max rounded-full pt-1"
              src="/icon-user-black.png"
              alt="photo"
            />
            <div className="text-base">
              <div className="font-semibold text-black-50">Judith Black</div>

              <div className="text-black-50 text-xs">CEO of Workcation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
