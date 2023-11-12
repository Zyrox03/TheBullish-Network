import { SocialMedia } from "../../Widgets/SocialMedia";
import { CallToAction } from "./CallToAction";
import { Community } from "./Community";
import { Course } from "./Course";
import { Events } from "./Events";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Network } from "./Network";

import PropTypes from 'prop-types';

export const LandingPage = ({user}) => {
  return (
    <>
      <NavBar user={user} />
      <Hero />
      <SocialMedia/>

      <Community />
      <Network />
      <CallToAction />
      <Course />
      <Events />
      <Faq />
      <CallToAction />

      <div className="spoiler_container text-center ">
        <p className="text-md text-white mx-auto text-center mt-3 w-[70%] ">
          Get Ready...{" "}
          <span className="spoiler">
            This season is gonna blow your mind ! Like this season is crazy
            dawg! You know what happens on the first episode ? You are not gonna
            believe me bro, like Its crazy dude !
          </span>
        </p>
      </div>

      <Footer />
    </>
  );
};

// Prop validation for the LandingPage component
LandingPage.propTypes = {
  user: PropTypes.object, // Assuming user is an object, adjust as needed
};

// Default props (optional)
LandingPage.defaultProps = {
  user: null,
};