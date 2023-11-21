"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import Image from "next/image";

const dataPartner = [
  {
    name: "Jess Wongso",
    desc: "As an RTO manager, navigating the intricate landscape of compliance is a daily challenge. RPLiQ has been a game-changer for our institution. The ASQA-compliant features ensure that we are always in alignment with regulatory standards.",
  },
  {
    name: "Jess Wongso",
    desc: "The software set-up process was easy, with a user-friendly interface and step-by-step guidance. The customisable dashboard has become our control center, allowing us to arrange tools and insights according to our workflows. The real-time analytics provide a level of visibility we never thought possible. ",
  },
  {
    name: "Jess Wongso",
    desc: "As an RTO manager, navigating the intricate landscape of compliance is a daily challenge. RPLiQ has been a game-changer for our institution. The ASQA-compliant features ensure that we are always in alignment with regulatory standards.",
  },

  {
    name: "Jess Wongso",
    desc: "Example 1",
  },
];

const PartnerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white flex">
      <div className="max-container padding-container py-8 grid max-w-2xl grid-cols-1">
        <p className="text-center lg:mt-4 xs:mt-0 md:text-2xl px-5 xs:text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Trusted By Our Training Organisation Partners
        </p>
        <Slider {...settings} className="py-10 px-20">
          {dataPartner.map((item) => (
            <Card
              bordered={true}
              style={{ backgroundColor: "red", minHeight: "450px!important" }}
            >
              <p>{item.desc}</p>
              <div className="mt-10 flex gap-4">
                <Image
                  width={30}
                  height={30}
                  className="h-max w-max rounded-full pt-1"
                  src="/icon-user-black.png"
                  alt="photo"
                />
                <div className="text-base">
                  <div className="font-semibold text-black-50">{item.name}</div>

                  <div className="text-black-50 text-xs">CEO of Workcation</div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlider;
