import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialMedia } from "../../Widgets/SocialMedia";

export const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [emailResult, setEmailResult] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      // Handle form submission logic here
      // Reset the form after submission
      const { status } = await emailjs.sendForm(
        "service_862dy6a",
        "template_k8bco7g",
        form.current,
        "9kpXtsgKCEiwhKJwb"
      );

      if (status === 200) {
        setEmailResult("Email sent successfully!");
      }
      resetForm();
    } catch (error) {
      console.log("Email not sent", error);
      setEmailResult("Error sending email. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setEmailResult("");
      }, 5000);
    }
  };

  const validate = (values) => {
    const errors = {};

    // Add your validation logic here
    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-6 justify-center text-start gap-6 ">
      <div className="content_container py-8 px-4 lg:p-12">
        <h2 className="text-3xl font-bold uppercase">Contact</h2>
        <p className="text-sm text-center ">
          Have questions, suggestions, or just want to say hello? We&apos;d love
          to hear from you! Fill out the form below, and we&apos;ll get back to
          you as soon as possible.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form ref={form} className="mt-8 w-[70%]">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-sm font-semibold ">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full text-black border rounded-md"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold ">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full text-black border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold ">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md text-black resize-none"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {loading ? (
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Sending ...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            )}
          </Form>
        </Formik>

        <p className="text-sm ">{emailResult}</p>

        <SocialMedia />
      </div>

      <Link to="/">
        <button className="main_button my-6" role="button">
          Back
        </button>
      </Link>
    </div>
  );
};
