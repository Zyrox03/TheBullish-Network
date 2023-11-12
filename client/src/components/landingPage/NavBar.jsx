import { Link } from "react-router-dom";
import BullishBrand from "../../assets/BullishBrand.png";

import { scroller } from "react-scroll";
import PropTypes from "prop-types";

export const NavBar = ({ user }) => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <nav className="bg-main_bg p-4 w-full relative ">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link
          to="/"
          className="lg:flex-1  text-white text-lg font-bold flex items-center"
        >
          <img className="w-[110px]" src={BullishBrand} alt="" />
        </Link>
        <ul className="flex-grow flex justify-center space-x-12  ">
          <li>
            <Link
              onClick={() => scrollToSection("community")}
              className="nav-link"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              onClick={() => scrollToSection("network")}
              className="nav-link"
            >
              Network
            </Link>
          </li>
          <li>
            <Link
              onClick={() => scrollToSection("course")}
              className="nav-link"
            >
              Course
            </Link>
          </li>
        </ul>
        <div className="space-x-4 flex flex-1 justify-end items-center">
          <Link to="/contact">
            <button className="main_button" role="button">
              Contact
            </button>
          </Link>
          {user ? (
            user.email === import.meta.env.VITE_ADMIN_EMAIL &&
            user.emailVerified ? (
              <Link to="/admin/users">
                <button className="main_button" role="button">
                  Admin
                </button>
              </Link>
            ) : (
              <Link to="/account">
                <button className="main_button" role="button">
                  {user.displayName}
                </button>
              </Link>
            )
          ) : (
            <Link to="/account">
              <button className="main_button" role="button">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

// Prop validation for the NavBar component
NavBar.propTypes = {
  user: PropTypes.object, // Assuming user is an object, adjust as needed
};

// Default props (optional)
NavBar.defaultProps = {
  user: null,
};
