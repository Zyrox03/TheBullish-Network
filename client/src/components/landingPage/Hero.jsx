import { SwiperWidget } from "../../Widgets/SwiperWidget";

// import heroImage from "../../assets/blockchain.jpg";

export const Hero = () => {
  return (
    <div className="relative   ">
      <div
        className=" inset-0 bg-main_bg bg-opacity-50 flex flex-col justify-around gap-12 relative "
        style={{ zIndex: 100 }}
      >
        <div className="blur blur-effect"></div>
        <div className="blur blur-effect-1"></div>
        <div
          className="container mx-auto text-center p-4 typewriter  "
          style={{
            zIndex: 1,
          }}
        >
          <h1 className="text-sm  sm:text-2xl md:text-4xl text-white uppercase matrix w-fit lg:whitespace-nowrap  ">
            CRYPTO ENTREPRENEURIAL NETWORK
          </h1>
          <h2 className="text-xs sm:text-sm md:text-xl text-white mt-6">
            Where the future of the internet and exponential growth collide
          </h2>
        </div>

        <div
          style={{
            zIndex: 1,
          }}
          className="container mx-auto text-center sm:h-full w-[100%] sm:w-[80%] max-w-[90vw] "
        >
          <SwiperWidget />
        </div>

        <div
          style={{
            zIndex: 1,
          }}
          className="container mx-auto text-center "
        >
          <p className="text-xs sm:text-sm md:text-xl  text-white mx-auto mt-3 w-[70%]">
            Here at the Bullish Network, a significant amount of vital business
            information is being stored within our walls. This community serves
            as the master key to financial and digital enlightenment, providing
            our members with <span className="shining_text">insights</span>  into crypto, AI, and more.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
