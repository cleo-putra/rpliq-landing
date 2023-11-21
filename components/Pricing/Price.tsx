import React from "react";

const Price = () => {
  return (
    <div className="mx-auto md:px-6">
      <section className="mb-32">
        <div className="background-radial-gradient text-center text-white lg:h-[300px] h-[150px]">
          <h2 className="mb-12 text-center text-3xl font-bold">Starter</h2>
        </div>

        <div
          className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32"
          style={{ marginTop: "-200px" }}
        >
          <div className="p-0 py-12">
            <div className="block h-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none bg-green-30">
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl uppercase">
                  <strong>Starter</strong>
                </h3>
                <p className="mb-6 text-sm px-10 font-light">
                  For training organisations who just getting started with
                  project management.
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 129</strong>
                  <br />
                  <small className="text-base uppercase">monthly</small>
                </h3>

                <p className="mb-6 text-sm px-10 font-light">
                  Includes 15 users
                </p>

                <button className="flexCenter mx-auto" type="button">
                  <label className="bold-16 btn_white_green text-xs">
                    Start Free Trial
                  </label>
                </button>
              </div>
              <div className="p-6">
                <p className="mb-6 font-light">All you need to get started:</p>

                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    npm installation
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div
            className="block h-full rounded-lg bg-green-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            style={{ zIndex: "1" }}
          >
            <img
              src="./best-pricing.png"
              className="mx-auto relative"
              style={{ zIndex: "99", top: "-35px" }}
            />
            <div className="text-center">
              <h3 className="mb-4 text-xl uppercase">
                <strong>Premium</strong>
              </h3>
              <p className="mb-6 text-sm px-10 font-light">
                For training organisations who just getting started with project
                management.
              </p>
              <h3 className="mb-6 text-3xl">
                <strong>$ 499</strong>
                <br />
                <small className="text-base uppercase">monthly</small>
              </h3>

              <p className="mb-6 text-sm px-10 font-light">Includes 65 users</p>

              <button className="flexCenter mx-auto" type="button">
                <label className="bold-16 btn_black_white text-xs">
                  Start Free Trial
                </label>
              </button>
            </div>
            <div className="p-6">
              <p className="mb-6 font-light">All you need to get started:</p>

              <ol className="list-inside">
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Unlimited updates
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Git repository
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  npm installation
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Code examples
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Premium snippets
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Premium support
                </li>
                <li className="mb-4 flex">
                  <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                  Drag&amp;Drop builder
                </li>
              </ol>
            </div>
          </div>

          <div className="py-12">
            <div className="block h-full rounded-lg bg-green-30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl uppercase">
                  <strong>Enterprise</strong>
                </h3>
                <p className="mb-6 text-sm px-10 font-light">
                  For training organisations who just getting started with
                  project management.
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 299</strong>
                  <br />
                  <small className="text-base uppercase">monthly</small>
                </h3>

                <p className="mb-6 text-sm px-10 font-light">
                  Includes 45 users
                </p>

                <button className="flexCenter mx-auto" type="button">
                  <label className="bold-16 btn_white_green text-xs">
                    Request Pricing
                  </label>
                </button>
              </div>
              <div className="p-6">
                <p className="mb-6 font-light">All you need to get started:</p>
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    npm installation
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Code examples
                  </li>
                  <li className="mb-4 flex">
                    <img className="w-6 h-5 mr-2" src="./icon/rpl-black.png" />
                    Premium snippets
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
