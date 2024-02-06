export const CallToAction = () => {
  return (
    <div className="CTA text-center p-6 select-none w-full text-white flex flex-col items-center gap-8 relative"  style={{ zIndex: 100 }}>
                  <div className="blur blur-effect"  ></div>
                  <div className="blur blur-effect-1"  ></div>

      <h2 className="invite-only text-sm  sm:text-2xl md:text-4xl mb-4 uppercase matrix">
        Join The Bullish Network{" "}
      </h2>
      
    <img src="https://public-files.gumroad.com/d180obts8sf7gbahg9ymar9nlwfx" alt="hologram futuristic city with hologram text 'Bullish Network Own A Piece Of The Future'" className="w-full max-w-5xl mb-8 rounded-md shadow-lg"/>

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
  );
};
