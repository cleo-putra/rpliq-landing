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
    label: "This is panel header 1",
    children: text,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: text,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: text,
  },
];

const AchieveRpl = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24 padding-container">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="lg:mt-12 xs:mt-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Achieve A Seamless RPL Journey
              </p>

              <div>
                <Collapse
                  items={items}
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isActive }) => (
                    <ZoomInOutlined rotate={isActive ? 90 : 0} />
                  )}
                  style={{ margin: "10px" }}
                  size="large"
                />
              </div>
            </div>
          </div>
          <img
            src="/rpl-laptop-1.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default AchieveRpl;
