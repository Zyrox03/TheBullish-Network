export const Community = () => {
  return (
    <div
      id="community"
      className="community w-full flex flex-col items-center text-center gap-12"
    >
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
          <h2 className="text-3xl font-bold uppercase">Private Network</h2>

          <div className="w-full">
            <div className="grid md:grid-cols-3 gap-4 ">
              <div className="hidden md:grid md:col-span-1">
                <img
                  src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/5-min_pcxr8u_laoiim.webp"
                  loading="lazy"
                  data-src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/5-min_pcxr8u_laoiim.webp"
                  className="rounded-3xl h-full object-cover  "
                  alt="Blue background with futuristic tech elements and the text 'Achieve Financial Sovereignty' in the center."
                />
              </div>
              <div className="col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <img
                      src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/3-min_zyi76d_luayrs.webp"
                      loading="lazy"
                      data-src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/3-min_zyi76d_luayrs.webp"
                      alt="Blue background with futuristic tech elements and the text 'Explore Effective Crypto Strategies' in the center."
                      className=" rounded-3xl w-full h-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/4-min_bjclci_t6jmbi.webp"
                      loading="lazy"
                      data-src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/4-min_bjclci_t6jmbi.webp"
                      alt="Blue background with futuristic tech elements and the text 'Uncover the Potential of AI' in the center."
                      className=" rounded-3xl w-full h-auto mt-4"
                    />
                  </div>
                  <div className="col-span-1">
                    <img
                      src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/6-min_h1irco_mclsdc.webp"
                      loading="lazy"
                      data-src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/6-min_h1irco_mclsdc.webp"
                      alt="Blue background with futuristic tech elements and the text 'Join Forces with Like-Minded Individuals' in the center."
                      className=" rounded-3xl w-full h-auto"
                    />
                    <img
                      src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/7-min_p7leij_mmvclj.webp"
                      loading="lazy"
                      data-src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/7-min_p7leij_mmvclj.webp"
                      alt="Blue background with futuristic tech elements and the text 'Join Bullish Where Crazy Gains Happen' in the center."
                      className=" rounded-3xl w-full h-auto mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            target="_blank"
            rel="noreferrer"
            href={import.meta.env.VITE_CASHOUT_LINK}
          >
            <button className="main_button" role="button">
              <span className="text">Join Now</span>
            </button>
          </a>
        </div>
      </div>

      <p className="text-xs sm:text-sm md:text-xl text-white mx-auto text-center mt-3 w-[70%]">
        <span className="text-bold">50 : 7,000,000,000 </span>
        <br />
        <br />
         In a world of chaos, the Bullish Network, with
        unmatched foresight, selected 50 from 7,000,000,000 to enter the
        network.
        <br />
         Operating discreetly, embracing continuous learning, their
        wisdom held the keys to the future. 
        <br /> Powered by the future of the
        internet for exponential growth, what they knew wasn&apos;t for sale! It was
        for the 50 elites among men to indulge in. Architects of transformation,
        they navigated a treacherous path, guarding against the potential
        catastrophe of their insights falling into the wrong hands...
        <br />
        <br />
        Can you definitely say for sure you are prepared for what&apos;s to
        come? No matter what happens you have us and you will be well equipped
        on this journey.
        <br />
        <br /> Attack this <span className="shining_text">opportunity</span> and
        walk alongside us in this new era.
        <br /> Join Now!{" "}
      </p>
    </div>
  );
};
