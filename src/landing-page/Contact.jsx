import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    number: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    number: Yup.string().required('Number is required'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/contact', values); // Adjust API endpoint
      if (response.status === 200) {
        alert('Message successfully submitted!');
        resetForm();
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="p-8 flex justify-center animate-fadeIn">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg text-center shadow-xl border-4 border-black">
          <h2 className="text-2xl font-bold mb-4">Indubuildingblocks</h2>
          <p className="mb-2"><strong>Mobile:</strong> 9441123957</p>
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:info@yourwebsite.com" className="text-blue-500 hover:underline">info@yourwebsite.com</a>
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Hotel Kritunga Street, Opp to Sitara Hotel Lane, JN Road, Rajahmundry
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Get in Touch</h3>
          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="bg-slate-400 p-6 rounded-lg shadow-md space-y-4">
                <div>
                  <label className="block text-lg mb-1">Name</label>
                  <Field 
                    name="name"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block text-lg mb-1">Email</label>
                  <Field 
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block text-lg mb-1">Number</label>
                  <Field 
                    name="number"
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your number"
                  />
                  <ErrorMessage name="number" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block text-lg mb-1">Message</label>
                  <Field 
                    name="message"
                    as="textarea"
                    className="w-full border border-gray-300 p-2 rounded transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105">
                  Send message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
