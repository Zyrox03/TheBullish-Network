// import Swiper JS
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

import { useEffect } from "react";

import community from "../assets/community.jpg";
import network from "../assets/network.jpg";

export const SwiperWidget = () => {
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",

      autoplay: {
        delay: 5000,
      },

      effect: "cards",
      perSlideOffset: "0",
      perSlideRotate: "0",
      slideShadows: false,

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
        onlyInViewport: false,
      },



    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once after component mount

  return (
    <>
      <div className="swiper ">
        <div className="swiper-wrapper  ">
          <div className="swiper-slide rounded-3xl shadow-lg ">
            <img
              className="h-full object-cover sm:object-right"
              src={community}
              alt=""
            />
          </div>
          <div className="swiper-slide rounded-3xl shadow-lg ">
            <img
              className="h-full object-cover sm:object-right  "
              src={network}
              alt=""
            />
          </div>
        </div>

        
        <div className="swiper-button-prev hidden sm:flex"></div>
        <div className="swiper-button-next hidden sm:flex"></div>

      </div>
    </>
  );
};
