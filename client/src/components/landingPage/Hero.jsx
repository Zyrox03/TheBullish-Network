import { SwiperWidget } from "../../Widgets/SwiperWidget";

// import heroImage from "../../assets/blockchain.jpg";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden ">
 

      <div className=" inset-0 bg-main_bg bg-opacity-50 flex flex-col justify-around gap-12 ">
        <div
          className="container mx-auto text-center p-4 typewriter "
          style={{
            zIndex: 1,
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white uppercase matrix w-fit lg:whitespace-nowrap  ">
            Your Money Community
          </h1>
          <p className="text-smsm:ext-lg md:text-xl text-white mt-2 ">
            Friendly Community Sharing Knowledge and Advice on Understanding
            Crypto and the World of Business
          </p>
        </div>

        <div
          style={{
            zIndex: 1,
          }}
          className="container mx-auto text-center h-[50vh] sm:h-full w-[80%] max-w-[90vw] "
        >
          <SwiperWidget />
        </div>

        <div
          style={{
            zIndex: 1,
          }}
          className="container mx-auto text-center "
        >
          <p className="text-md text-white mx-auto mt-3 w-[70%]">
            At The Bullish Network, we believe in the power of community,
            inspiration, and education. No matter where you are on your
            financial journey, our network provides a launching pad to new
            heights. Connect with fellow investors, learn about the latest
            trends, and get ready to achieve your goals. Join us now and set
            your course for a prosperous future.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
