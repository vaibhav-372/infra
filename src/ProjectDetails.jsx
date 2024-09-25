import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/projects/${projectName}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectName]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`http://localhost:3000${project.imageUrl}`}
          alt={project.projectName}
          className="w-full h-64 object-cover" // Adjust height as needed
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{project.projectName}</h2>
          <p><strong>Landmark:</strong> {project.landMark}</p>
          <p><strong>Typology:</strong> {project.typology || "N/A"}</p>
          <p><strong>Total Extent:</strong> {project.totalExtent} acres</p>
          {/* Add more project details as needed */}
        </div>
      </div>

      {/* Latest Projects Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Latest Projects</h3>
        <LatestProjects /> {/* Your existing LatestProjects component */}
      </div>
    </div>
  );
};

export default ProjectDetails;
