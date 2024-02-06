import { Formik, Form, Field, ErrorMessage } from "formik";
import BullishIconeLogo from "../../assets/bullish_icone_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../Widgets/GoogleAuth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Footer } from "../landingPage/Footer";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const Auth = ({ user }) => {
  const auth = getAuth();

  const navigate = useNavigate();

  const [authType, setAuthType] = useState("signup");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      setAuthType("signout");
    }
  }, [user]);

  const signUpWithEmailAndPassword = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        // Add other fields like photoURL if needed
      });

      // Signed up
      const user = userCredential.user;
      setErrorMessage("");

      navigate("/");
      // Handle success as needed
      console.log("User Signed Up:", user);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;

      let errorMessage;
      switch (errorCode) {
        case "auth/user-disabled":
          errorMessage = "User account is disabled";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Too many unsuccessful login attempts. Please try again later.";
          break;
        case "auth/invalid-login-credentials":
          errorMessage =
            "Invalid login credentials. Please check your email and password.";
          break;
        case "auth/email-already-in-use":
          errorMessage =
            "Email already in use. Please use a different email or sign in.";
          break;
        case "auth/weak-password":
          errorMessage = "Weak password. Please choose a stronger password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address. Please enter a valid email.";
          break;
        case "auth/missing-verification-code":
          errorMessage =
            "Missing verification code. Please enter the code sent to your email.";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email or sign up.";
          break;
        default:
          errorMessage =
            "An error occurred while signing in. Please try again.";
      }

      setErrorMessage(errorMessage);
      // Handle the error as needed
      console.error("Sign Up Error:", errorCode, errorMessage);
    }
  };

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;

      setErrorMessage("");
      navigate("/");

      // Handle successful sign-in
      console.log("User Signed In:", user);
    } catch (error) {
      // Handle sign-in errors
      const errorCode = error.code;

      let errorMessage;
      switch (errorCode) {
        case "auth/user-disabled":
          errorMessage = "User account is disabled";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Too many unsuccessful login attempts. Please try again later.";
          break;
        case "auth/invalid-login-credentials":
          errorMessage =
            "Invalid login credentials. Please check your email and password.";
          break;
        case "auth/email-already-in-use":
          errorMessage =
            "Email already in use. Please use a different email or sign in.";
          break;
        case "auth/weak-password":
          errorMessage = "Weak password. Please choose a stronger password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address. Please enter a valid email.";
          break;
        case "auth/missing-verification-code":
          errorMessage =
            "Missing verification code. Please enter the code sent to your email.";
          break;
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email or sign up.";
          break;
        default:
          errorMessage =
            "An error occurred while signing in. Please try again.";
      }

      setErrorMessage(errorMessage);
      console.error("Sign In Error:", errorCode, errorMessage);
    }
  };

  const initialValues = {
    displayName: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    const { email, password, displayName } = values;

    if (authType === "signup") {
      await signUpWithEmailAndPassword(email, password, displayName);
    } else {
      await loginWithEmailAndPassword(email, password);
    }

    // Reset the form after submission
    resetForm();
  };

  const validate = (values) => {
    const errors = {};

    // Add your validation logic here
    if (!values.displayName && authType === "signup") {
      errors.displayName = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error while signing out user");
    } finally {
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Account | Bullish Network</title>
        <meta
          name="description"
          content="Access your user account on the Bullish Network for personalized features and settings. Sign up, log in, or sign out as needed. Join our community for financial empowerment and insights."
        />
        <meta
          name="keywords"
          content="user account, sign up, log in, sign out, Bullish Network, community, financial empowerment"
        />
        <meta name="author" content="Bullish Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="User Account | Bullish Network" />
        <meta
          property="og:description"
          content="Access your user account on the Bullish Network for personalized features and settings. Sign up, log in, or sign out as needed. Join our community for financial empowerment and insights."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/1-min_v4ujuu_mqbpgt.webp"
        />
        <meta property="og:url" content="https://bullishnetwork.xyz/account" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="User Account | Bullish Network" />
        <meta
          name="twitter:description"
          content="Access your user account on the Bullish Network for personalized features and settings. Sign up, log in, or sign out as needed. Join our community for financial empowerment and insights."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/duh30yscb/image/upload/v1702204791/bullish_network/1-min_v4ujuu_mqbpgt.webp"
        />
        {/* Other meta tags specific to the Account Page */}
      </Helmet>
      <div
        className="w-full flex flex-col items-center justify-center min-h-screen relative "
        style={{ zIndex: 100 }}
      >
        <div className="blur blur-effect"></div>
        <div className="blur blur-effect-1"></div>

        {/* Left side for image or text */}
        <div className="w-32">
          {/* Replace the following div with your image or text */}
          <Link to="/">
            <img
              src={BullishIconeLogo}
              className="w-full h-full object-contain"
              alt="Auth image logo"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="bg-secondary_bg rounded-md shadow-md p-6 flex flex-col gap-3">
            {authType === "signout" ? (
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold mb-4">
                  Hello, {user.displayName}
                </h1>

                <button
                  onClick={signOutUser}
                  className="main_button"
                  role="button"
                >
                  <span className="text">Sign Out</span>
                </button>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-4">
                  {authType === "signup" && "Sign Up"}
                  {authType === "login" && "Login"}
                </h1>

                {errorMessage && (
                  <p className="flex items-center gap-2 text-red-500 text-sm ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-alert-octagon"
                    >
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    {errorMessage}
                  </p>
                )}
                {/* Your authentication form content goes here */}

                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validate={validate}
                >
                  <Form className="mt-8 w-full">
                    {authType === "signup" && (
                      <div className="mb-4">
                        <label
                          htmlFor="displayName"
                          className="block text-sm font-semibold "
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          id="displayName"
                          name="displayName"
                          className="mt-1 p-2 w-full border rounded-md  text-black"
                        />
                        <ErrorMessage
                          name="displayName"
                          component="p"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>
                    )}

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold "
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md  text-black"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="mb-4 ">
                      <label
                        htmlFor="password"
                        className="block text-sm font-semibold "
                      >
                        Password
                      </label>
                      <Field
                        type="text"
                        id="password"
                        name="password"
                        className="mt-1 p-2 w-full border rounded-md  text-black"
                      />
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <button
                        type="submit"
                        className="main_button my-6"
                        role="button"
                      >
                        <span className="text">
                          {authType === "signup" && "Sign Up"}
                          {authType === "login" && "Login"}{" "}
                        </span>
                      </button>
                    </div>
                  </Form>
                </Formik>
                {authType === "signup" && (
                  <h2
                    onClick={() => {
                      setAuthType("login");
                      setErrorMessage("");
                    }}
                    className="text-sm hover:text-gray-300 cursor-pointer mb-4"
                  >
                    Already have an account ? Login Here
                  </h2>
                )}
                {authType === "login" && (
                  <h2
                    onClick={() => {
                      setAuthType("signup");
                      setErrorMessage("");
                    }}
                    className="text-sm hover:text-gray-300 cursor-pointer mb-4"
                  >
                    Don&apos; have an account ? Sign up
                  </h2>
                )}
                <GoogleAuth setErrorMessage={setErrorMessage} />
              </>
            )}
          </div>
        </div>
        <Link to="/">
          <button className="main_button my-6" role="button">
            <span className="text">Back</span>
          </button>
        </Link>

        <Footer />
      </div>
    </>
  );
};

Auth.propTypes = {
  user: PropTypes.object, // Assuming user is an object, adjust as needed
};
