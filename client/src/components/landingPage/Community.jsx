import testPicture from "../../assets/community.jpg";

export const Community = () => {

  return (
    <div id="community" className="w-full flex flex-col items-center text-center gap-12">
      <div className="content_container py-8 px-4 lg:p-12 relative overflow-hidden ">
        <video
          style={{
            zIndex: 0,
          }}
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-10"
          autoPlay
          muted
          loop
          loading="lazy"

        >
          <source
            className=""
            src="https://res.cloudinary.com/duh30yscb/video/upload/q_10/v1699522989/bullish_network/Matrix_Animation_sihnd9.mov"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            zIndex: 1,
          }}
          className="w-full flex flex-col items-center text-center gap-12 "
        >
          <h2 className="text-3xl font-bold uppercase ">
            The Bullish Community
          </h2>

          <div className="w-full">
            <div className="grid md:grid-cols-3 gap-4 ">
              <div className="hidden md:grid md:col-span-1">
                <img
                  src={testPicture}
                  alt=""
                  className="rounded-lg h-full object-cover object-left "
                />
              </div>
              <div className="col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
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

<a target="_blank" rel="noreferrer" href="https://discord.gg/Tu95TDur3N">
<button className="main_button" role="button">
            Join Now
          </button>
</a>
        
        </div>
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
