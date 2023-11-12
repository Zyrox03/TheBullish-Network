import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <div className="text-center p-6 select-none text-white">
      <h2 className="invite-only text-3xl md:text-5xl mb-4 uppercase matrix">
        Join The Bullish Network{" "}
      </h2>
      <h6 className="mb-6 text-lg shining_text">
        Join our waitlist to secure your spot in line.
      </h6>
      <Link to="login">
        <button className="main_button" role="button">
          Join Now
        </button>
      </Link>
    </div>
  );
};
