import React, { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import { Link, Route, Routes } from "react-router-dom";

const LatestProjects = () => {
  const [latestProjects, setLatestProjects] = useState([]);

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  const fetchLatestProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/projects");
      const projects = Array.isArray(response.data) ? response.data : [];
      const sortedProjects = projects
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);
      setLatestProjects(sortedProjects);
    } catch (error) {
      console.error("Error fetching latest projects:", error);
      setLatestProjects([]);
    }
  };

  return (
    <div className="py-10 px-5 bg-gray-200 m-16">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Our Latest Projects
      </h2>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 lg:m-24 sm:m-24">
        {latestProjects.length > 0 ? (
          latestProjects.map((project) => (
            <li
              key={project._id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden p-5 flex flex-col md:flex-row md:items-start md:space-x-5"
            >
              {/* Image Area - Center only on md */}
              <div className="relative w-full h-48 flex-shrink-0 md:w-48 md:h-48 flex md:justify-center md:items-center">
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

              {/* Content Area */}
              <div className="flex flex-col justify-center items-center md:items-start w-full mt-4 md:mt-0 text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                  {project.projectName}
                </h4>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold">Landmark:</span>{" "}
                  {project.landMark}
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  <span className="font-semibold">Typology:</span>{" "}
                  {project.typology || "N/A"}
                </p>

                {/* View Details Button */}
                <Link to={`/project/${project.projectName}`} className="bg-[#96d85f] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#93f544] transition duration-200 mt-4">
                    View Details
                  </Link>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No latest projects available.
          </p>
        )}
      </ul>
      <div className="p-7 flex justify-center">
          <Link className="cursor-pointer text-center h-7 w-44 font-bold text-xl flex justify-center items-center border-black border-2 rounded-full left-1/2 p-5 bg-green-400"
            to="/projects"
          >
            explore more
          </Link>
        </div>
        <Routes>
        <Route path="projects" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default LatestProjects;
