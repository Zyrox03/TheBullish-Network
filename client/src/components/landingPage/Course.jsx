import testPicture from "../../assets/community.jpg";

export const Course = () => {
  return (
    <div id="course" className="w-full flex flex-col items-center text-center gap-12 ">
      <div className="content_container py-8 px-4 lg:p-12 relative overflow-hidden matrix_borders rounded-lg">

        <video
          style={{
            zIndex: 0,
          }}
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-10"
          muted
          loop
          autoPlay
          loading="lazy"

        >
          <source
            className=""
            src="https://res.cloudinary.com/duh30yscb/video/upload/q_10/v1699537427/bullish_network/vecteezy_matrix-code-falling-computer-digital-code-rain-background_22116322_564_1_zsj6pu.mp4"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            zIndex: 1,
          }}
          className="w-full flex flex-col items-center text-center gap-12"
        >
        <h2 className="text-3xl font-bold uppercase  ">On The Chain</h2>

        <div className=" ">
              <img
                src={testPicture}
                alt=""
                className=" rounded-lg h-full max-h-[50vh] object-cover object-left "
              />
            </div>

            <button className="main_button" role="button">
        More
          </button>
          </div>
      </div>
      <p className="text-md text-white mx-auto text-center mt-3 w-[70%] ">
        Dive into a transformative course packed with five years of curated
        practical <span className="shining_text"> knowledge </span> , using
        unique esoteric analogies to simplify complex topics. Covering financial
        fundamentals, it highlights the enduring advantage of cryptocurrencies
        and offers insights into investment strategies.
        <br />
        <br />
        The course guides readers on future-proofing their finances, providing
        practical <span className="shining_text"> wisdom</span> for navigating
        the ever-evolving financial landscape. With a holistic approach, it is
        ideal for mastering finance, cryptocurrency, and wealth-building, backed
        by expert guidance for sustainable{" "}
        <span className="shining_text"> success</span> .
      </p>
    </div>
  );
};
