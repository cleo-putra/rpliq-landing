import Button from "@/components/Button";
import AchieveRpl from "@/components/Home/AchieveRpl";
import Testimonial from "@/components/Home/Testimonial";
import Image from "next/image";
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-xl">
              <mark className="bg-green-30 p-4">
                Streamline RPL For Students & RTOs
              </mark>
              <h2 className="mt-6 text-[40px] font-bold text-green-50	leading-snug tracking-wide lg:max-w-lg">
                Simplify Your Qualification Journey With RPLiQ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RPLiQ is a software that automates and simplifies the entire RPL
                process for RTOs. RPLiQ is your solution for a modernised,
                hassle-free qualification journey.
              </p>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="bold-16 whitespace-nowrap btn_dark_green lg:text-lg xs:text-xs">
                    Start Free Trial
                  </label>
                </button>
                <button className="flexCenter gap-3" type="button">
                  <label className="bold-16 whitespace-nowrap btn_white_green lg:text-lg xs:text-xs">
                    Request Demo
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/home-1.png"
              width={507}
              height={458}
              alt="Product screenshot"
              className="rounded-x"
            />
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <Testimonial />
      {/* Accordion Product */}
      <AchieveRpl />
      {/* Banner 2 */}
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex justify-start">
            <Image
              src="/home-2.png"
              width={486}
              height={458}
              alt="Product screenshot"
              className="rounded-x h-[458px]"
            />
          </div>

          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h2 className="text-[30px] font-bold text-black-50	lg:max-w-lg">
                The Ultimate RPL Automation Platform For Training Organisations
                & Students
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                RPLiQ automates and accelerates the entire RPL process. For
                students, it’s a seamless path to qualifications, and for
                Registered Training Organisations (RTOs), it’s an efficient tool
                to simplify RPL assessments.
              </p>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 ref">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Reduce admin work</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">
                    VET & CRICOS compliant (change wording)
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">
                    Embrace a modernised, future-ready RPL solution
                  </dd>
                </div>
              </dl>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="bold-16 whitespace-nowrap btn_dark_green lg:text-lg xs:text-xs">
                    Start Free Trial
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner 3 */}
      {/* Banner */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 max-container padding-container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-xl">
              <h2 className="text-[30px] font-bold text-black-50	lg:max-w-lg">
                Unlock A World Of Benefits With RPLiQ
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand that the journey to qualification can be complex,
                time-consuming, and burdensome. That’s why RPLiQ is here to
                streamline and automate every step of the way, offering you
                unmatched advantages:
              </p>

              <dl className="mt-4 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9 ref">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">User-friendly software</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Real-time progress tracking</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Compliance and quality assurance</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <Image
                      src="/check.png"
                      width={24}
                      height={24}
                      alt="Checklist"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
                  </dt>
                  <dd className="inline">Efficient data management software</dd>
                </div>
              </dl>

              <div className="lg:mt-6 sm:mt-2 flex justify-normal gap-4">
                <button className="flexCenter gap-3" type="button">
                  <label className="bold-16 whitespace-nowrap btn_dark_green lg:text-lg xs:text-xs">
                    Start Free Trial
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/home-3.png"
              width={568}
              height={470}
              alt="Product screenshot"
              className="rounded-x h-[470px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
