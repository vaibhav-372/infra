import React from "react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="py-10 px-5 bg-gray-200 mx-7 my-14">
      <h3 className="text-4xl font-bold mb-6 text-center text-gray-700">Our Projects</h3>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 lg:m-24 sm:m-24">
        {projects ? (
          Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <li
                key={project._id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-5 flex flex-col md:flex-row md:items-start md:space-x-5"
              >
                {/* Image Area */}
                <div className="relative w-full h-48 sm:h-64 flex-shrink-0 md:w-48 md:h-48 flex justify-center items-center">
                  <img
                    src={`http://localhost:3000${project.imageUrl}`}
                    alt={project.projectName}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Acres Label */}
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded">
                    {project.totalExtent} acres
                  </span>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center items-center md:items-start w-full mt-4 md:mt-0 text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                    {project.projectName}
                  </h4>
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-semibold">Landmark:</span> {project.landMark}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    <span className="font-semibold">Typology:</span> {project.typology || "N/A"}
                  </p>

                  {/* View Details Button */}
                  <Link to={`/project/${project.projectName}`} className="bg-[#96d85f] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#93f544] transition duration-200 mt-4">
                    View Details
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">loading.......</p>
          )
        ) : (
          <p className="text-center col-span-full text-gray-600">No projects available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProjectList;
