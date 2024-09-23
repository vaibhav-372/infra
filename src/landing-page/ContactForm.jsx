import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  // Yup schema for form validation
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    number: Yup.string()
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  // Form submit handler
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 max-w-full sm:max-w-sm w-full mx-auto">
      <div className="mb-1 text-orange-600">
        <i className="fas fa-phone-alt"></i> {/* FontAwesome icon */}
      </div>
      <h2 className="text-md sm:text-lg font-bold mb-2">Let Us Call You!</h2>
      <p className="mb-2 text-gray-600 text-xs sm:text-sm">To help you choose your property</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-2">
          {/* Name and Email side by side */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="w-full sm:w-1/2">
              <label htmlFor="name" className="block text-gray-700 text-xs sm:text-sm">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-xs sm:text-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="email" className="block text-gray-700 text-xs sm:text-sm">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 p-1 w-full border border-gray-300 rounded-md text-xs sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
          </div>

          {/* Number Field */}
          <div>
            <label htmlFor="number" className="block text-gray-700 text-xs sm:text-sm">
              Number
            </label>
            <div className="flex space-x-2">
              <Field
                as="select"
                name="countryCode"
                className="p-1 border border-gray-300 rounded-md text-xs sm:text-sm"
              >
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </Field>
              <Field
                type="text"
                id="number"
                name="number"
                placeholder="Your Number"
                className="p-1 w-full border border-gray-300 rounded-md text-xs sm:text-sm"
              />
            </div>
            <ErrorMessage
              name="number"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 text-xs sm:text-sm">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Tell us about desired property"
              rows="3"
              className="mt-1 p-1 w-full border border-gray-300 rounded-md text-xs sm:text-sm"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white p-2 rounded-md w-full hover:bg-orange-600 text-xs sm:text-sm"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
