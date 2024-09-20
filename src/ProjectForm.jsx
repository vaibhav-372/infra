import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Define validation schema using Yup
const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required("Project Name is required"),
  totalExtent: Yup.number()
    .required("Total Extent is required")
    .positive("Extent must be a positive number"),
  landMark: Yup.string().required("Landmark is required"),
});

const ProjectForm = ({ fetchProjects }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    formData.append("projectName", values.projectName);
    formData.append("totalExtent", values.totalExtent);
    formData.append("landMark", values.landMark);

    if (values.image) {
      formData.append("image", values.image);
    }

    try {
      await axios.post("http://localhost:3000/api/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchProjects(); // Refresh projects after upload
      resetForm();
    } catch (error) {
      console.error("Error uploading project:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ projectName: "", totalExtent: "", landMark: "", image: null }}
      validationSchema={ProjectSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="projectName">
              Project Name
            </label>
            <Field
              type="text"
              name="projectName"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Project Name"
            />
            <ErrorMessage name="projectName" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Total Extent */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="totalExtent">
              Total Extent (in acres)
            </label>
            <Field
              type="number"
              name="totalExtent"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Total Extent"
            />
            <ErrorMessage name="totalExtent" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Landmark */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="landMark">
              Landmark
            </label>
            <Field
              type="text"
              name="landMark"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter Landmark"
            />
            <ErrorMessage name="landMark" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">
              Upload Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              className="mt-1 block w-full"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
