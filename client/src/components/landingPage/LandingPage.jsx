import { SocialMedia } from "../../Widgets/SocialMedia";
import { CallToAction } from "./CallToAction";
import { Community } from "./Community";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const LandingPage = ({ user }) => {
  return (
    <>
      <Helmet>
        <title>The Bullish Network</title>

        <meta
          name="description"
          content="Empowering our community through crypto strategies, financial sovereignty, and understanding the future of the internet. Join the Bullish Network for financial enlightenment and insights."
        />
        <meta
          name="keywords"
          content="crypto, entrepreneurship, financial sovereignty, future of the internet, Bullish Network, AI, Artificial Intelligence"
        />
        <meta name="author" content="Bullish Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crypto Entrepreneurial Network | Bullish Network"
        />
        <meta
          property="og:description"
          content="Empowering our community through crypto strategies, financial sovereignty, and understanding the future of the internet. Join the Bullish Network for financial enlightenment and insights."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/1-min_v4ujuu_mqbpgt.webp"
        />
        <meta
          property="og:image:alt"
          content="The Bullish Network, Where Crypto Wisdom Meets Artificial Intelligence"
        />
        <meta property="og:url" content="https://bullishnetwork.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crypto Entrepreneurial Network | Bullish Network"
        />
        <meta
          name="twitter:description"
          content="Empowering our community through crypto strategies, financial sovereignty, and understanding the future of the internet. Join the Bullish Network for financial enlightenment and insights."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/1-min_v4ujuu_mqbpgt.webp"
        />
        

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bullishnetwork.xyz" />
      </Helmet>

      <NavBar user={user} />
      <Hero />
      <Community />
      <SocialMedia />
      <CallToAction />
      <Faq />
      <Footer />
    </>
  );
};

// Prop validation for the LandingPage component
LandingPage.propTypes = {
  user: PropTypes.object,
};

// Default props (optional)
LandingPage.defaultProps = {
  user: null,
};
