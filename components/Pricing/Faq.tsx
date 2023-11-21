"use client";
import { Collapse } from "antd";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Can RPLiQ be customised to meet the specific needs of our RTOs?",
    children: text,
  },
  {
    key: "2",
    label: "How does RPLiQ ensure compliance with ASQA standards?",
    children: text,
  },
  {
    key: "3",
    label: "What features does RPLiQ offer to enhance the student experience?",
    children: text,
  },
];

const Faq = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafaf4] to-white">
      <div className="max-container padding-container py-8">
        <p className="text-center lg:mt-4 xs:mt-0 md:text-2xl px-5 xs:text-lg font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Frequently Asked Questions
        </p>

        <div className="mt-10">
          <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={["1"]}
            style={{ margin: "10px" }}
            size="large"
            expandIcon={({ isActive }) => (
              <img
                src={isActive ? "./icon/rpl.png" : "./icon/zoom-white.png"}
                className="w-[20px] h-[20px]"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
