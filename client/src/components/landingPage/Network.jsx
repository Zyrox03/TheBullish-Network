import testPicture from "../../assets/network.jpg";

export const Network = () => {
  return (
    <div id="network" className="w-full flex flex-col items-center text-center gap-12">
      <div className="content_container py-8 px-4 lg:p-12">
        <h2 className="text-3xl font-bold uppercase">The Bullish Network</h2>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <img
                    src={testPicture}
                    alt=""
                    className=" rounded-lg w-full h-auto"
                  />
                  <img
                    src={testPicture}
                    alt=""
                    className=" rounded-lg w-full h-auto mt-4"
                  />
                </div>
                <div className="col-span-1">
                  <img
                    src={testPicture}
                    alt=""
                    className=" rounded-lg w-full h-auto"
                  />
                  <img
                    src={testPicture}
                    alt=""
                    className=" rounded-lg w-full h-auto mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

<a target="_blank" rel="noreferrer" href="https://bullishnetwork.gumroad.com/l/xbtcv">
<button className="main_button" role="button">
          Join Now
        </button>

</a>
      
      </div>

      <p className="text-md text-white mx-auto text-center mt-3 w-[70%]">
        For just $31.28 (25£) per month, you can gain access to the exclusive
        benefits of The Elites Network. Enjoy valuable resources such as Bullish
        Investments, detailed Watchlists, and insights into promising Low Market
        Caps. Immerse yourself in the world of Web 3 Challenges and roadmaps,
        and draw inspiration from those who have invested in your areas of
        interest. Elevate your financial journey with The Elites Network.
      </p>
    </div>
  );
};
