import testPicture from "../../assets/community.jpg";

export const Community = () => {
  return (
    <div className="w-full flex flex-col items-center gap-12">
      <div className="content_container">
        <h2 className="text-3xl font-bold uppercase">The Bullish Community</h2>

        <div className="w-full">
          <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-1">
              <img
                src={testPicture}
                alt=""
                className=" rounded-lg h-full object-cover object-left "
              />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
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

        <button className="main_button" role="button">
          Join Now
        </button>
      </div>

      <p className="text-md text-white mx-auto text-center mt-3 w-[70%]">
        Discover a vibrant community of like-minded individuals eager to enhance
        their financial future. Our platform is entirely FREE, providing you
        with the opportunity to connect with individuals who share your
        aspirations. Exchange ideas, explore 18+ wealth creation methods, and
        become motivated to achieve your goals. Join us today and become part of
        a dynamic network dedicated to success!
      </p>
    </div>
  );
};
