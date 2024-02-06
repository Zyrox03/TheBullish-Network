// import Swiper JS
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

import { useEffect } from "react";


export const SwiperWidget = () => {
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",

      autoplay: {
        delay: 4000,
      },

      effect: "slide",

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },



    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once after component mount

  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper cursor-grabbing">
          <div className="swiper-slide shadow-lg">
            <img
              className="h-full object-cover sm:object-right rounded-3xl"
              loading="lazy"

              src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/1-min_v4ujuu_mqbpgt.webp"
              alt="Blue background with futuristic tech elements and the text 'The Bullish Network, Where Crypto Wisdom Meets Artificial Intelligence'."
            />
          </div>
          <div className="swiper-slide  shadow-lg ">
            <img
              className="h-full object-cover sm:object-right rounded-3xl  "
              loading="lazy"

              src="https://res.cloudinary.com/duh30yscb/image/upload/v1702204795/bullish_network/2-min_yec5b6_bsql8k.webp"
              alt="Blue background with futuristic tech elements and the text 'Crypto Gains & Power of AI'."
            />
          </div>
        </div>

        
        <div className="swiper-button-prev hidden sm:flex"></div>
        <div className="swiper-button-next hidden sm:flex"></div>

      </div>
    </>
  );
};
