import { Link } from "react-router-dom";
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
      <div className="flex items-center justify-between w-full  max-w-screen">
        <Link to="/contact">
          <button className="main_button lg:hidden" role="button">
            <span className="text">Contact</span>
          </button>
        </Link>

        <Link to="/" className="flex items-center flex-grow justify-center lg:justify-start lg:flex-1 ">
          <img className="w-[150px] sm:w-[250px] md:w-[300px]" src="https://res.cloudinary.com/duh30yscb/image/upload/v1702205395/bullish_network/403732258_1033318091059106_5739630573305200893_n_rrqhg9.webp" alt="" />
        </Link>

        <div className="lg:flex-grow">
          <ul className="flex justify-center space-x-6 hidden lg:flex ">
            <li>
              <Link
                onClick={() => scrollToSection("community")}
                className="main_button text-center "
              >
                <span className="text">Network</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" className="main_button text-center">
                <span className="text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center  justify-end lg:flex-1 space-x-4">
          {user ? (
            user.email === import.meta.env.VITE_ADMIN_EMAIL ? (
              <Link to="/admin/users">
                <button className="main_button" role="button">
                  <span className="text"> Admin</span>
                </button>
              </Link>
            ) : (
              <Link to="/account">
                <button className="main_button" role="button">
                  <span className="text">{user.displayName}</span>
                </button>
              </Link>
            )
          ) : (
            <Link to="/account">
              <button className="main_button" role="button">
                <span className="text">Login</span>
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
