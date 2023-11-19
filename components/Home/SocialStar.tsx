"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, List, Row } from "antd";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: (
      <>
        <div className="text-center py-2">
          <Image
            width={100}
            height={100}
            className="h-max w-max pt-1 mx-auto"
            src="/icon/5-stars.png"
            alt="photo"
          />
          <p className="text-white text-sm">5 stars user rating</p>
        </div>
      </>
    ),
    content: (
      <div className="h-[30px]">
        <img
          className="h-[25px] w-max pt-1 mx-auto"
          src="/icon/fb.png"
          alt="photo"
        />
      </div>
    ),
  },

  {
    title: (
      <>
        <div className="text-center py-2">
          <Image
            width={100}
            height={100}
            className="h-max w-max pt-1 mx-auto"
            src="/icon/5-stars.png"
            alt="photo"
          />
          <p className="text-white text-sm">5 stars user rating</p>
        </div>
      </>
    ),
    content: (
      <div>
        <img
          className="h-[30px] w-max pt-1 mx-auto"
          src="/icon/google.png"
          alt="photo"
        />
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="text-center py-2">
          <Image
            width={100}
            height={100}
            className="h-max w-max pt-1 mx-auto"
            src="/icon/5-stars.png"
            alt="photo"
          />
          <p className="text-sm text-white">5 stars user rating</p>
        </div>
      </>
    ),
    content: (
      <div>
        <img
          className="h-[30px] w-max pt-1 mx-auto"
          src="/icon/TP.png"
          alt="photo"
        />
      </div>
    ),
  },
  {
    title: (
      <>
        <div className="text-center py-2">
          <Image
            width={100}
            height={100}
            className="h-max w-max pt-1 mx-auto"
            src="/icon/5-stars.png"
            alt="photo"
          />
          <p className="text-sm text-white">5 stars user rating</p>
        </div>
      </>
    ),
    content: (
      <div>
        <img
          className="h-[30px] w-max pt-1 mx-auto"
          src="/icon/capterra.png"
          alt="photo"
        />
      </div>
    ),
  },
];

const SocialStar = () => {
  return (
    <div className="overflow-hidden bg-white padding-container">
      <div className="lg:mx-36 xs:mx-0 max-w-7xl">
        <div className="lg:pr-8 ">
          <div className="grid xs:grid-cols-1 lg:grid-cols-4">
            {data.map((item) => (
              <Col className="lg:col=span-4 xs:col-span-1">
                <Card
                  title={item.title}
                  headStyle={{
                    backgroundColor: "#2E2E2E",
                    border: 0,
                  }}
                  bodyStyle={{
                    backgroundColor: "#F2F2F2",
                    border: 0,
                  }}
                >
                  {item.content}
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialStar;
