import { Formik, Form, Field, ErrorMessage } from "formik";
import blockchain from "../../assets/BullishBrand.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../Widgets/GoogleAuth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Footer } from "../landingPage/Footer";

export const Auth = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [authType, setAuthType] = useState("signup");
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      {/* Left side for image or text */}
      <div className="w-32">
        {/* Replace the following div with your image or text */}
        <Link to="/">
          <img
            src={blockchain}
            className="w-full h-full object-contain"
            alt="Auth image logo"
          />
        </Link>
      </div>

      {/* Right side for the authentication form */}
      <div className="w-full md:w-1/2 p-8">
        {/* Replace this with your authentication form component */}
        <div className="bg-secondary_bg rounded-md shadow-md p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold mb-4">
            {authType === "signup" && "Sign Up"}
            {authType === "login" && "Login"}
          </h2>

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
                <label htmlFor="email" className="block text-sm font-semibold ">
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
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  {authType === "signup" && "Sign Up"}
                  {authType === "login" && "Login"}{" "}
                </button>
              </div>
            </Form>
          </Formik>
          {authType === "signup" && (
            <h3
              onClick={() => {
                setAuthType("login");
                setErrorMessage("");
              }}
              className="text-sm hover:text-gray-300 cursor-pointer"
            >
              Already have an account ? Login Here
            </h3>
          )}
          {authType === "login" && (
            <h3
              onClick={() => {
                setAuthType("signup");
                setErrorMessage("");
              }}
              className="text-sm hover:text-gray-300 cursor-pointer"
            >
              Already have an account ? Login Here
            </h3>
          )}
          <GoogleAuth setErrorMessage={setErrorMessage} />
        </div>
      </div>
      <Link to="/">
        <button className="main_button my-6" role="button">
          Back
        </button>
      </Link>

      <Footer/>
    </div>
  );
};
