import React, { useEffect, useState } from "react";
import axios from "axios";

const LatestProjects = () => {
  const [latestProjects, setLatestProjects] = useState([]);

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  const fetchLatestProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/projects");
      const projects = Array.isArray(response.data) ? response.data : [];
      // Sort projects by creation date (assuming `createdAt` is the field) and limit to 3
      const sortedProjects = projects
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);
      setLatestProjects(sortedProjects);
    } catch (error) {
      console.error("Error fetching latest projects:", error);
      setLatestProjects([]);
    }
  };

  return (
    <div className="p-8 animate-fadeIn">
      {/* <h2 className="text-2xl font-bold mb-4">Latest Projects</h2> */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProjects.length > 0 ? (
          latestProjects.map((project) => (
            <li
              key={project._id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`http://localhost:3000${project.imageUrl}`}
                  alt={project.projectName}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                  {project.totalExtent} acres
                </span>
              </div>

              {/* Project Details */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{project.projectName}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Landmark:</span> {project.landMark}
                </p>
                <div className="flex justify-center">
                  <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No latest projects available.</p>
        )}
      </ul>
    </div>
  );
};

export default LatestProjects;
