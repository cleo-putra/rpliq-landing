import CardRto from "@/components/Home/CardRto";
import PartnerSlider from "@/components/Home/PartnerSlider";
import Faq from "@/components/Pricing/Faq";
import Price from "@/components/Pricing/Price";
import TablePrice from "@/components/Pricing/TablePrice";

const Pricing = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 max-container padding-container">
        <div className="mx-auto grid grid-cols-1 gap-x-8 text-center">
          <div className="lg:pt-4">
            <h3 className="mt-6 text-3xl font-bold">
              Tailored to Your RTO’s Unique Needs{" "}
            </h3>
            <p className="mt-5">
              Our pricing is designed to be flexible and adaptable, catering to
              what your RTO needs precisely.
            </p>
          </div>
        </div>
      </div>
      {/* Price Comparison */}
      <Price />
      {/* Partner Slider */}
      <PartnerSlider />
      {/* FAQ */}
      <Faq />
      {/* TablePrice */}
      <TablePrice />
      {/* CardRTo */}
      <CardRto />
    </>
  );
};

export default Pricing;
